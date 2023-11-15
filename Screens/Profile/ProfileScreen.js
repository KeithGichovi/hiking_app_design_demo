import React from 'react';
import { ScrollView } from 'react-native';
import ProfileHeader from './Profileheader';
import ProfileTab from './ProfileTab';


const ProfileScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <ProfileHeader/>
            <ProfileTab/>
        </ScrollView>
    );
};



export default ProfileScreen;