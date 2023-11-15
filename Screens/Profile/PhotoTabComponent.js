import React from 'react';
import { ScrollView } from 'react-native';
import TabComponent from '../../Components/TabComponent';

const PhotoTabComponent = () => {

  const PageContentData = [
    {
      text: 'post your hiking Pictures!',
      image: require('../../assets/images/photo.png'),
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

export default PhotoTabComponent;
