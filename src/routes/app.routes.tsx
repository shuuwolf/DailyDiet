import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Initial } from '@screens/Initial';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen 
                name='initial'
                component={Initial}
            />
        </Navigator>
    )
}