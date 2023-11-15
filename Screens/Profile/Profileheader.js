import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import ProfileAchievement from '../../Components/ProfileAchievement';

const ProfileHeader = () => {

    const achivementJson = [
        {
            number: 0,
            achievement: 'Hours',
        },
        {
            number: 0,
            achievement: 'Completed',
        },
        {
            number: 0,
            achievement: 'New trails',
        },
    ];


    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image
                    source={require('../../assets/images/profilepic.jpeg')}
                    style={styles.profile}
                />
                <View style={styles.profile_basic}>
                    <Text style={styles.name}>
                        Kevin Smith
                    </Text>
                    <Text style={styles.followers}>
                        0 followers
                    </Text>
                </View>
            </View>
            <View style={styles.bottomInnerContainer}>
                {
                    achivementJson.map((item, index) => {
                        return (
                            <ProfileAchievement 
                                hours={item.number}
                                achievement={item.achievement}
                                key={index}
                            />
                        );
                    })
                }
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#358f80',
        height: 300,
    }, 
    innerContainer:{ 
        marginHorizontal: 20,
        flexDirection: 'row',
    
    },
    profile: {
        width: 100, 
        height: 100, 
        borderRadius: 50, 
        marginTop: 100,
    },
    profile_basic:{
        flexDirection: 'column',
    },
    name: {
        fontSize: 27,
        paddingTop: 120,
        paddingLeft: 25,
        fontWeight: 'bold',
        color: 'white',
    },
    followers: {
        fontSize: 18,
        paddingTop: 5,
        paddingLeft: 25,
        color: 'white',
    },
    bottomInnerContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
    }
});

export default ProfileHeader;