import React from 'react';
import { ScrollView } from 'react-native';
import TrailViewHeader from './TrailViewHeader';
import TrailWeather from './TrailWeather';
import TrailMapRoute from './TrailMapRoute';


const TrailViewScreen = ({ navigation, route }) => {
    const { marker } = route.params;

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <TrailViewHeader   
                image={marker.image} 
                title={marker.title} 
                navigationfunc={() => navigation.goBack()} 
                description={marker.description} 
                rating={marker.rating} 
                est_time={marker.est_time} 
                description2={marker.description2}
            />

            <TrailWeather 
                marker={marker} 
            />

            <TrailMapRoute
                latitude={marker.latitude}
                longitude={marker.longitude} 
                polyline={marker.polyline}  
            />
        </ScrollView>
    );
};


export default TrailViewScreen;