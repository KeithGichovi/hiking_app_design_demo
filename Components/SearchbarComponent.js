import React, {useState} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';



const SearchbarComponent = () => {

  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search...'
        cursorColor={'#358f80'}
        onChangeText={(text) => setValue(text)}
        value={value}
        style={styles.input}
        clearButtonMode='always'
        clearTextOnFocus={true}
        autoCorrect={false}
        onSubmitEditing={() => console.log(value)}
      />
      
        <SimpleLineIcons 
          name="equalizer" 
          size={26} 
          color="#358f80" 
          onPress={() => console.log('Filter')}
          style={styles.filter}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
  },
  input: {
    fontSize: 22,
    color: '#000',
    paddingLeft: 10,
    width: '80%',
  },
  filter: {
    width: '10%',
  },
});

export default SearchbarComponent;
