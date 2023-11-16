import React, {useState} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

const SearchbarComponent = ({onSearch}) => {

    const [value, setValue] = useState('');

    const [blur, setBlur] = useState(false);

    const handleSearch = () => {
        onSearch(value)
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Search...'
                cursorColor={'#358f80'}
                onChangeText={(text) => setValue(text)}
                value={value}
                style={styles.searchbar}
                clearButtonMode='always'
                clearTextOnFocus={true}
                autoCorrect={false}
                onSubmitEditing={handleSearch}
            />
            <SimpleLineIcons 
                name="equalizer" 
                size={26} 
                color="#358f80" 
                onPress={() => console.log('Filter')}
                style={styles.filter}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    searchbar: {
        height: 50,
        width: '90%',
        borderWidth: 0,
        fontSize: 20,
        paddingLeft: 3,
    },
    filter:{
        position: 'relative',
        marginRight: 10,
    }
});

export default SearchbarComponent;