import React from "react";
import { StyleSheet, View } from "react-native";
import MapView , { Marker, Polyline } from "react-native-maps";



const TrailMapRoute = ({ latitude, longitude, polyline }) => {   

    return (
       
        <View>
            <MapView
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.03,
                    longitudeDelta: 0.03,
                }}
                style={styles.container}
                minZoomLevel= {15}
                scrollEnabled={true}
                toolbarEnabled={true}
                loadingIndicatorColor="#358f80"
                
            >
                <Polyline
                    coordinates={polyline}
                    strokeColor="#358f80"
                    strokeWidth={4}
                />

                <Marker
                    coordinate={{
                        latitude: latitude,
                        longitude: longitude,
                    }}
                    pinColor="#000000"
                    
                />
            </MapView>
        </View>
        
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 300,
        zIndex: -1,
    }
});
export default TrailMapRoute;