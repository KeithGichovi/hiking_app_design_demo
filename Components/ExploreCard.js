import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const ExploreCard = ({title, description, rating, distance, est_time, image, onCardPress}) => {

    const [time, setTime] = useState(est_time)

    useEffect(
        () => {
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
        <TouchableOpacity style={styles.container} onPress={() => onCardPress()}>
            <View style={styles.imageContainer}>
                <Image 
                    source={image}
                    style={styles.image}
                />
            </View>
            <Text style={styles.title} ellipsizeMode='tail'>
                {title.charAt(0).toUpperCase() + title.slice(1)}
            </Text>
            <View style={styles.info}>
                <Text style={styles.description}>
                    Best for {description} Hikers.
                </Text>
                <Text style={{ marginHorizontal: 5, fontSize: 15}}>
                    |
                </Text>
                <Text style={styles.distance}>
                    {distance} miles away
                </Text>
            </View>
            <View style={styles.second_info}>
                <Text style={styles.rating}>
                    {rating}
                </Text>
                <AntDesign name="star" size={17} color="#358f80" style={{ paddingLeft:5 }}/>
                <Feather name="clock" size={17} color="#358f80"  style={{ paddingLeft: 20}}/>
                <Text style={styles.est_time}>
                    {handleTime(time)}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    imageContainer:{
        width: '70%',
        height: 225,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 5,
        width: 340,

    }, 
    title:{
        paddingTop: 10,
        paddingBottom: 5,
        fontWeight: '600',
        fontSize: 22,
    }, 
    info: {
        flexDirection: 'row',
    },
    description: {
        fontSize: 16,
        color: '#708b8e',
    },
    distance: {
        color: '#358f80',
        fontSize: 16,
    },
    rating: {
        fontSize: 16,
    },
    second_info: {
        flexDirection: 'row',
        paddingTop: 7,

    },
    est_time: {
        fontSize: 17,
        paddingLeft: 5,
    }
});

export default ExploreCard;