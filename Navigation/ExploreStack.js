import ExploreScreen from "../Screens/Explore/ExploreScreen";
import TrailViewScreen from "../Screens/TrailView/TrailViewScreen";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const ExploreStack = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="ExploreStack" component={ExploreScreen} options={{ headerShown: false }} />
            <Stack.Screen 
                name="Trailview" 
                component={TrailViewScreen} 
                options={{ 
                    headerShown: false
                }}/>
        </Stack.Navigator>
    )
};

export default ExploreStack;