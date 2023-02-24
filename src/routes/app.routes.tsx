import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/@types/navigation';

import { Initial } from '@screens/Initial';
import { Statistics } from '@screens/Statistics';
import { Feedback } from '@screens/Feedback';
import { Meal } from '@screens/Meal';
import { EditMeal } from '@screens/EditMeal';
import { CreateMeal } from '@screens/CreateMeal';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen 
                name='Initial'
                component={Initial}
            />
            <Screen name='Statistics' component={Statistics} />
            <Screen name='CreateMeal' component={CreateMeal} />
            <Screen name='Feedback' component={Feedback} />
            <Screen name='Meal' component={Meal} />
            <Screen name='EditMeal' component={EditMeal} />
        </Navigator>
    )
}