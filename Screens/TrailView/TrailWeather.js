import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const TrailWeather = ({marker}) => {

    const [weather, setWeather] = useState([]);
    

    const getWeather = (latitude, longitude) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7930bc09e5e0bec13eade6715c5d4ee1&units=metric`)
        .then((response) => response.json())
        .then((json) => {
            setWeather({
                temp: json.main.temp,
                humidity: json.main.humidity,
                description: json.weather[0].description,
                wind: json.wind.speed,
                sunrise: json.sys.sunrise,
                sunset: json.sys.sunset,
        
            })
        });
    }


    useEffect(() => {   
        async function getWeatherData() {
            await getWeather(marker.latitude, marker.longitude);
        }
        getWeatherData();
    }, [])

      

    const processTime = (time) => {
        const date = new Date(time * 1000); 
      
        const hours = date.getHours();

        const minutes = date.getMinutes();

        const ampm = hours >= 12 ? 'pm' : 'am';
      
        const formattedHours = hours % 12 || 12;

        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      
        const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
      
        return formattedTime;
    }




    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Current Weather
            </Text>
            <Text style={styles.description}>
                {weather.description}
            </Text>
            <View style={styles.weather_main}>
                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <MaterialCommunityIcons name="weather-sunset-up" size={32} color="#358f80" style={{ paddingBottom : 20 }} />
                    <Text style={styles.text}>{processTime(weather.sunrise)}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <MaterialCommunityIcons name="water-opacity" size={32} color="#358f80" style={{ paddingBottom : 20 }} />
                    <Text style={styles.text}>{weather.humidity}%</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <FontAwesome name="thermometer" size={32} color="#358f80" style={{ paddingBottom : 20 }} />
                    <Text style={styles.text}>{weather.temp}°C</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <MaterialCommunityIcons name="weather-windy" size={32} color="#358f80" style={{ paddingBottom : 20 }} />
                    <Text style={styles.text}>{weather.wind} mph</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <MaterialCommunityIcons name="weather-sunset-down" size={32} color="#358f80" style={{ paddingBottom : 20 }} />
                    <Text style={styles.text}>{processTime(weather.sunset)}</Text>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 120,
        marginHorizontal: 20,
        marginBottom: 80,
    },
    header: {
        fontSize: 20,
        fontWeight: "600",
        color: "#358f80",
        paddingVertical: 20,
    },
    description: {
        fontSize: 16,
        fontWeight: "600",
        color: "#708b8e",
        paddingBottom: 20,
        textTransform: "capitalize",
    },
    weather_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 20,
    },
    
});

export default TrailWeather;
