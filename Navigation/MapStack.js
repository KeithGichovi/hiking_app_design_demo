import MapScreen from "../Screens/Map/MapScreen";
import TrailViewScreen from "../Screens/TrailView/TrailViewScreen";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const MapStack = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Maploader" component={MapScreen} options={{ headerShown: false }} />
            <Stack.Screen 
                name="Trailview" 
                component={TrailViewScreen} 
                options={{ 
                    headerShown: false
                }}/>
        </Stack.Navigator>
    )
};

export default MapStack;