import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity , Alert} from "react-native";


const JoinMembership = () => {

    const JoinAlert = () => {
        Alert.alert(
           'Welcome to the community!',
           'You can now share your experiences with others!', 
           [
                {
                    text: 'OK',
                
                },
            ],
            { 
                cancelable: false 
            }
        );
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/BG3.jpg')} style={styles.background}>
                <View style={styles.innercontainer}>
                    <Text style={styles.title}>
                        Community
                    </Text>
                    <Text style={styles.subtitle}>
                        Take part in our community and share your experiences with others!
                    </Text>
                </View>
                <View style={styles.bottomView}>
                    <Text style={styles.bottomViewText}>
                        Make friends, share experiences, and more....
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={JoinAlert}>
                        <Text style={styles.buttonText}>
                            Join the Community
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    innercontainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 60,
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
        color: '#ffffff',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#ffffff',
        paddingTop:10,
        fontStyle: 'italic',
    },
    bottomView: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingVertical: 40,
        paddingHorizontal: 20
    },
    bottomViewText:{
        paddingVertical: 10,
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
        fontStyle: 'italic',
    },
    button: {
        backgroundColor: '#358f80',
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 16,
        width: 230,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#ffffff',
    }

});

export default JoinMembership;