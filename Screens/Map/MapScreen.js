import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView , { Marker } from "react-native-maps";
import mapData from "../../Api/mapData";
import MapSeachBar from "./MapSeachBar";



const MapScreen = ({ navigation }) => {

    return (
        <View>
            <MapSeachBar/>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 50.718395,
                    longitude: -1.883377,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                loadingIndicatorColor={"#358f80"}
                showsCompass={true}
                showsBuildings={true}
                showsScale={true}
                showsTraffic={true}
                showsIndoors={true}
                minZoomLevel={10}
            >
            
                {   
                    mapData.map((marker) => (
                        <Marker key={marker.id}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                            pinColor="#000000"
                            style={{ width: 40, height: 40 }}
                            title={marker.title}
                            onPress={() => navigation.navigate("Trailview", { marker })}
                            
                        />  
                    ))
                }
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        height: "100%",
        zIndex: -1,
    },
});

export default MapScreen;