import React from 'react';
import { ScrollView } from 'react-native';
import Homeheader from './Homeheader';
import Searchbar from './Searchbar';
import ExploreView from './ExploreView';
import PopularView from './PopularView';

const ExploreScreen = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Homeheader/>
            <Searchbar />
            <ExploreView navigation={navigation}/>
            <PopularView navigation={navigation}/>
        </ScrollView>
    );
};


export default ExploreScreen;
