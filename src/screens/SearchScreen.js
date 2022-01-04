import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
// since searchbar will be in the search screen page we need to import that SearchBar component in here
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useRestaurants from "../hooks/useRestaurants";


const SearchScreen = () => {
    const [term, setTerm] = useState(''); //cause we are using search so much we can name it term
    const [searchApi, restaurants, errorMessage ] = useRestaurants();
  
    return (
        <View>
            {/* We want the Search Bar to appear above the Search Screen text so place it above search screen */}
            <SearchBar
                term = {term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
             />
             {/* if there is error then print the error message otherwise nothing */}
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {restaurants.length} restaurants</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;