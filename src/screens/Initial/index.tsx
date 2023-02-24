import { useCallback, useEffect, useState } from 'react';
import { Alert, AsyncStorage, SectionList, TouchableOpacity,View } from 'react-native';

import logo from "@assets/Logo.png";
import elipse from "@assets/Ellipse.png";
import { Percent } from '@components/Percent';
import { AddMeal } from '@components/AddMeal';
import { formatPercentage } from '../../utils/formatPercentage';
import { RootStackScreenProps } from 'src/@types/navigation';
import { Container, Logo, Perfil_logo, Header, DateTitle } from './styles';
import { formatDate } from '../../utils/formatDate';
import { useFocusEffect } from '@react-navigation/native';
import { MEAL_COLLECTION } from '../../storage/storageConfig';
import { MealSection } from '@components/MealSection';

export type DietVariant = 'inDiet' | 'outDiet';

export type Meal = {
    id: string;
    title: string;
    date: number;
    description: string;
    diet: boolean;
  };
  
  export interface DataProps {
    title: string;
    data: Meal[];
  }

export function Initial({ navigation }: RootStackScreenProps<'Initial'>){
    const [data, setData] = useState<DataProps[]>([]);
    const [diet, setDiet] = useState<DietVariant>('inDiet');

    const meals = data.map((meal) => meal.data).flat();

    const totalMealsInDiet = meals.filter((meal) => meal.diet).length;
    const totalMeals = meals.length;

    const percentageInDiet = totalMealsInDiet / totalMeals;

    const formattedPercentageInDiet = formatPercentage(
        totalMealsInDiet,
        totalMeals
    );

    function handleGoToStatisticsScreen() {
        navigation.navigate('Statistics', {
          diet,
          data,
        });
      }
    
      function handleCreateMeal() {
        navigation.navigate('CreateMeal');
      }
    
      function handleGoToMealScreen(meal: Meal) {
        navigation.navigate('Meal', { meal });
      }

    useEffect(() => {
        if (percentageInDiet <= 0.5) {
          setDiet('outDiet');
        } else {
          setDiet('inDiet');
        }
    }, [percentageInDiet]);

    useFocusEffect(
      useCallback(() => {
        async function fetchMeals() {
          try {
            const storageData = await AsyncStorage.getItem(MEAL_COLLECTION);
            const parsedData = storageData ? JSON.parse(storageData) : [];
            setData(parsedData);
          } catch (error) {
            console.log(error);
            Alert.alert('Dados', 'Não foi possível recuperar os dados.');
          }
        }
        fetchMeals();
      }, [])
    );

    return(
        <Container>
            <Header>
                <Logo source={logo}/>
                <TouchableOpacity>
                    <Perfil_logo source={elipse}/>
                </TouchableOpacity>
            </Header>

            <Percent
                value={totalMeals > 0 ? formattedPercentageInDiet : '0,00%'}
                text='das refeições dentro da dieta'
                onPress={handleGoToStatisticsScreen}
                variant={diet}
            />

            <AddMeal
                title="Refeições"
                handleCreateMeal={handleCreateMeal}
            />

            <SectionList 
                sections={data}
                keyExtractor={(meal, index) => meal.title + index}
                renderItem={({ item: meal }) => (
                <MealSection
                    title={meal.title}
                    time={formatDate(meal.date, 'time')}
                    variant={meal.diet ? 'inDiet' : 'outDiet'}
                    onPress={() => handleGoToMealScreen(meal)}
                />
                )}
                renderSectionHeader={({section: {title}}) => (
                    <DateTitle style={{marginTop: 30}}>{title}</DateTitle>
                )}
            />
        </Container>
    )
}