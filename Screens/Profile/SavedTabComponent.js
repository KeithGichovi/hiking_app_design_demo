import React from 'react';
import { ScrollView } from 'react-native';
import TabComponent from '../../Components/TabComponent';

const SavedTabComponent = () => {

    const PageContentData = [
        {
            text: 'Save Trails',
            image: require('../../assets/images/saved.png'),
            
        }
    ];

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <TabComponent
                text = {PageContentData[0].text}
                image = {PageContentData[0].image}
            />
        </ScrollView>
    );
};

export default SavedTabComponent;
