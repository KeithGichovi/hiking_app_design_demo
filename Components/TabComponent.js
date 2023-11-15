import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';



const TabComponent = ({image, text}) => {
  return (
      <View style={styles.container}>
        <Image
            source={image}
            style={styles.image}
        />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
      </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      marginHorizontal: 20,
      paddingVertical: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 5,
        width: 400,
        height: 400,
    },
    button:{
        marginVertical: 20,
        borderRadius: 12,
        padding: 5,
        backgroundColor: '#358f80',
    },
    buttonText:{
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
    }
});

export default TabComponent;