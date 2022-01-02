//import boiler plater from SearchScreen
import React  from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; //importing the search icon from the expowebsite https://github.com/expo/vector-icons

const SearchBar= () => {
    return (
        
        <View style={styles.backgroundStyle}>
            {/*This is the css code from expowebsite to style the search icon */}
            <FontAwesome5 name="search" style={styles.iconStyle}/> 
            {/* here we are styling the text space    */}
            <TextInput style = {styles.inputStyle} placeholder="Search"/> 
        </View>
    );

};

const styles = StyleSheet.create({
    //    We are aligning the parent here
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: 'lightgray',
        height: 45,
        borderRadius: 5,
        marginHorizontal: 17,
        flexDirection: "row", // Shows the text input on same line as the search icon
    },
        //   Aligning the Children
    inputStyle: {
        // borderColor: 'black',
        flex: 1,   //Text will take as much space as needed when typing but will be inside the text space
        // borderWidth: 1,
        flex: 1,
        fontSize: 20
    },
        // Styling the Search Icon
    iconStyle: {
        fontSize: 34,
        alignSelf: "center",
        marginHorizontal: 15
       

    }

});

export default SearchBar;