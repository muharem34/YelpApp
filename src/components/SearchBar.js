//import boiler plater from SearchScreen
import React  from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; //importing the search icon from the expowebsite https://github.com/expo/vector-icons


const SearchBar= () => {
    return (
        <View style={styles.backgroundStyle}>
            {/*This is the css code from expowebsite to style the search icon */}
            <FontAwesome5 name="search" size={30} color="black"/> 
            {/* here we are styling the text space    */}
            <TextInput style = {styles.inputStyle} placeholder="Search"/> 
        </View>
    );

};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'lightgray',
        height: 50,
        borderRadius: 4,
        marginHorizontal: 15,
        flexDirection: "row", // Shows the text input on same line as the search icon
    },
    inputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        flex: 1   //Text will take as much space as needed when typing
    }

});

export default SearchBar;