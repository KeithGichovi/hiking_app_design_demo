import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FeedTabComponent from './FeedTabComponent';
import SavedTabComponent from './SavedTabComponent';
import PhotoTabComponent from './PhotoTabComponent';

const Tab = createMaterialTopTabNavigator();


const ProfileTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{ 
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#000000',
                tabBarIndicatorStyle: {
                    backgroundColor: '#358f80',
                    fontWeight: '600',
                },
                tabBarItemStyle:{
                    backgroundColor: '#358f80',
                    fontWeight: '700',
                }
            }}
        >
            <Tab.Screen name="Feed" component={FeedTabComponent} />
            <Tab.Screen name="Photos" component={PhotoTabComponent} />
            <Tab.Screen name="Saved" component={SavedTabComponent} />
        </Tab.Navigator>
    )
};

export default ProfileTab;