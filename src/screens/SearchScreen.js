import React  from "react";
import { View, Text, StyleSheet } from "react-native";
// since searchbar will be in the search screen page we need to import that SearchBar component in here
import SearchBar from "../components/SearchBar";


const SearchScreen = () => {
    return (
        <View>
            {/* We want the Search Bar to appear above the Search Screen text so place it above search screen */}
            <SearchBar />
            <Text>Search Screen</Text>

        </View>
    );

};

const styles = StyleSheet.create({

});

export default SearchScreen;