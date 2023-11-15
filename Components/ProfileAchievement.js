
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ProfileAchievement = ({hours, achievement}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.number}>
            {hours} 
        </Text>
        <Text style={styles.achievement}>
            {achievement}
        </Text>
    </View>
  );
};


const styles = StyleSheet.create({  

    container: {
        flex:1, 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 10,
    },
    number: {
        fontSize: 22,
        fontWeight: '700',
        color: 'white',
    },
    line: {
        height: 5,
        color: '#fff',
        width: 50,
    },
    achievement: {
        paddingTop: 5,
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
    },

});


export default ProfileAchievement;
