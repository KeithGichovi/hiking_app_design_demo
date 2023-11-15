import React from 'react';
import { ScrollView } from 'react-native';
import TabComponent from '../../Components/TabComponent';

const FeedTabComponent = () => {

  const PageContentData = [
    {
      text: 'Start a feed on the app!',
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
