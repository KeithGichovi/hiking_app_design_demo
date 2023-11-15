import React from 'react';
import { ScrollView, Text } from 'react-native';
import TabComponent from '../../Components/TabComponent';


const FeedTabComponent = () => {

  const PageContentData = [
    {
      text: 'Start a feed!',
      image: require('../../assets/images/feed.png'),
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


export default FeedTabComponent;
