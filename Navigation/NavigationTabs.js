import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../Screens/Profile/ProfileScreen";
import CommunityScreen from "../Screens/Community/CommunityScreen";
import { Fontisto ,FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import MapStack from "./MapStack";
import ExploreStack from "./ExploreStack";

const  Tab = createBottomTabNavigator();

const NavigationTabs = () => {

    return (
        <Tab.Navigator
            initialRouteName="Explore"
            screenOptions={{ 
                headerShown: false,
                tabBarActiveTintColor: '#358f80',
                tabBarInactiveTintColor: '#000000',
                tabBarStyle: {
                    showLabel: false,
                    size: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }}
            
        >
            <Tab.Screen name="Explore" component={ExploreStack}
                options={{ 
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="explore" size={size} color={color} />
                }}
            />
            <Tab.Screen name="Map" component={MapStack} 
                options={{ 
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name="map-marked-alt" size={size} color={color} /> 
                }}
            />
            <Tab.Screen name="Community" component={CommunityScreen}
                        options={{
                            tabBarIcon: ({ color, size }) => <Fontisto name="persons" size={size} color={color} />
                        }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} 
                options={{ 
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name="user-alt" size={size} color={color} /> 
                }}
            />
        </Tab.Navigator>
    )

}

export default NavigationTabs;