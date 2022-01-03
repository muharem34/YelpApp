import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
// since searchbar will be in the search screen page we need to import that SearchBar component in here
import SearchBar from "../components/SearchBar";


const SearchScreen = () => {
    const [term, setTerm] = useState(''); //cause we are using search so much we can name it term

    return (
        <View>
            {/* We want the Search Bar to appear above the Search Screen text so place it above search screen */}
            <SearchBar
                term = {term} 
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit= {() => console.log('term was submitted')}
             />
            <Text>Search Screen</Text>
            <Text>{term}</Text>

        </View>
    );

};

const styles = StyleSheet.create({

});

export default SearchScreen;