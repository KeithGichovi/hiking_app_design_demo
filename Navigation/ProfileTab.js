import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FeedTabComponent from '../Screens/Profile/FeedTabComponent';
import SavedTabComponent from '../Screens/Profile/SavedTabComponent';
import PhotoTabComponent from '../Screens/Profile/PhotoTabComponent';
import ProfileHeader from '../Screens/Profile/Profileheader';

const Tab = createMaterialTopTabNavigator();


const ProfileTab = () => {
    return (
        <>
            <ProfileHeader/>
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
        </>
        
    )
};

export default ProfileTab;