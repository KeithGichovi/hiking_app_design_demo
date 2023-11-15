import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const  Homeheader = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Let's Explore!
            </Text>
            <Text style={styles.subtitle}>
                Find the best hiking trails and more.  
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        marginTop: 80,
        marginHorizontal: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
    },
    subtitle: {
        paddingTop: 10,
        fontSize: 16,
        color: '#708b8e',
    },
});

export default Homeheader;