import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import popularData from '../../Api/popularData';
import ExploreCard from '../../Components/ExploreCard';


const PopularView = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Most Popular</Text>
            <Text style={styles.subtitle}>Find out what's trending around the world.</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                bounces={true}
                alwaysBounceHorizontal={true}
                data={popularData}
                maxToRenderPerBatch={10}
                keyExtractor={(item) => item.id}
                renderItem={
                    ({ item }) => (
                        
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
                    )
                }
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 20
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
