import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '../storage/storageConfig';
import { formatDate } from '../utils/formatDate';
import { getAllMeals } from './getAllMeals';

export async function deleteMeal(id: string, date: number) {
  try {
    const storageData = await getAllMeals();
    const dataByDate = storageData.find(
      (item) => item.title === formatDate(date, 'date')
    );
    if (dataByDate) {
      const filteredMeals = dataByDate.data.filter((meal) => meal.id !== id);
      dataByDate.data = filteredMeals;
      const updatedStorageDataWhenNoMeals = storageData.filter(
        (item) => item.title !== dataByDate.title
      );
      await AsyncStorage.setItem(
        MEAL_COLLECTION,
        JSON.stringify(
          filteredMeals.length === 0
            ? updatedStorageDataWhenNoMeals
            : storageData
        )
      );
    }
  } catch (error) {
    throw error;
  }
}