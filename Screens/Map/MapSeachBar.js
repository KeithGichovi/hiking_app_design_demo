import { TextInput, View, StyleSheet } from "react-native";
import React , {useState} from "react";
import SearchbarComponent from "../../Components/SearchbarComponent";


const MapSeachBar = () => {

    const [value, setValue] = useState(''); 

    return (
        <View style={styles.container}>
            <SearchbarComponent />
        </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        height: 30,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80,
        paddingBottom: 50
    },
    searchbar: {
        height: 30,
        width: '90%',
        borderWidth: 0,
        fontSize: 20,
        paddingLeft: 3,
        borderColor: '#358f80',
    },
});

export default MapSeachBar;