import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import ScanDocument from './screens/Scanner';




const App = () => {

    const Stack = createNativeStackNavigator();

    return  (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    headerShadowVisible: false,
                    headerBackTitleVisible:false,
                }}
                initialRouteName={'ScanDocument'}
            >
                <Stack.Screen name={"Home"} component={Home}/>
                <Stack.Screen name={"ScanDocument"} component={ScanDocument}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}





export default App;
