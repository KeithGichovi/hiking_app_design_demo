import React, { lazy, Suspense } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import mapData from '../../Api/mapData';

const ExploreCard = lazy(() => import('../../Components/ExploreCard'));


const PopularView = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nearby Areas</Text>
            <Text style={styles.subtitle}>Have a look at the routes near you.</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                bounces={true}
                alwaysBounceHorizontal={true}
                data={mapData}
                maxToRenderPerBatch={10}
                keyExtractor={(item) => item.id}
                renderItem={
                    ({ item }) => (
                        <Suspense>
                            <ExploreCard 
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                rating={item.rating}
                                distance={item.distance}
                                est_time={item.est_time}
                                image={item.image}
                                onCardPress={() => navigation.navigate('Trailview', { marker: item })}
                            />
                        </Suspense>
                        
                    )
                }
            />
        </View>
    );
};

const LoadingFallback = () => (
    <View>
        <ActivityIndicator size={20} color="#358f80" />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
    },
    subtitle: {
        fontSize: 16,
        color: '#708b8e',
        marginVertical: 10,
    },
});

export default PopularView;
