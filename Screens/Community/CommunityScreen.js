import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CommunityScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome to the Community Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
    },
});

export default CommunityScreen;