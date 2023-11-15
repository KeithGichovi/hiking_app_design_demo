import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const TrailViewHeader = ({navigationfunc, modalFunc ,image, title, description, rating, est_time, description2}) => {

    const [time, setTime] = useState(est_time);

    useEffect(
        ()=>{
            setTime(time)
        }, [est_time]
    );

    const  handleTime = (time) => {
        if( time % 60 === 0 ){
            return `${time/60} hr`
        }else{
            const hours = Math.floor(time / 60);
            const minutes = time % 60;
            const hourText = hours > 0 ? `${hours} hr` : '';
            const minuteText = minutes > 0 ? `${minutes} min` : '';
            return `${hourText} ${minuteText}`.trim(); 
        }
    }


    return (
        <ScrollView>
            <View>
                <Image source={image} style={styles.background} />
                <Ionicons 
                    name="arrow-back-circle" 
                    size={26} 
                    color="#ffffff"
                    style={styles.goback} 
                    onPress={navigationfunc}
                />
                <MaterialCommunityIcons
                    name="dots-horizontal-circle" 
                    size={26} 
                    color="#ffffff"
                    style={styles.dots}
                    onPress={modalFunc}
                />
                <FontAwesome5 
                    name="bookmark" 
                    size={26} 
                    color="#ffffff"
                    style={styles.bookmark}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.info_section}>
                    <Text style={styles.description}>
                        {description}    
                    </Text>
                    <Text style={{ color: '#000000', paddingLeft: 5 }}>
                        |
                    </Text>
                    <Text style={styles.rating}>
                        {rating}
                    </Text>
                    <AntDesign name="star" size={16.5} color="#358f80" style={{ paddingLeft:5 }}/>
                    <Text style={{ color: '#000000', paddingLeft: 5 }}>
                        |
                    </Text>
                    <Text style={styles.rating}>
                        Est: {handleTime(time)}
                    </Text>
                </View>
                <View style={styles.descriptionView}>
                    <Text style={styles.descriptiontitle}>
                        Description
                    </Text>
                    <Text style={styles.description2} ellipsizeMode='tail'>
                        {description2}
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: 300,   
        zIndex: -1,
    },
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: '600',
        color: '#000',
    },
    goback: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 1,
        shadowColor: '#ffffff',
        shadowRadius: 20,
    },
    dots:{
        position: 'absolute', 
        top: 50, 
        right: 20, 
        zIndex: 1,
    },
    bookmark: {
        position: 'absolute', 
        bottom: 20, 
        right: 30, 
        zIndex: 1,
    },
    info_section:{
        flexDirection: 'row',
        paddingVertical: 10,
    },
    description: {
        fontSize: 16,
        color: '#708b8e',
    },
    rating: {
        fontSize: 16,
        paddingLeft: 5,
        color: '#708b8e',
    },
    descriptionView: {
        paddingVertical: 10,
        flexDirection: 'column',

    },
    descriptiontitle: {
        fontSize: 20,
        color: '#000000',
    },
    description2: {
        fontSize: 16,
        color: '#708b8e',
        paddingVertical: 5,
        textAlign: 'justify',
    },
});
export default TrailViewHeader;
