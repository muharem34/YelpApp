import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
// since searchbar will be in the search screen page we need to import that SearchBar component in here
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";


const SearchScreen = () => {
    const [term, setTerm] = useState(''); //cause we are using search so much we can name it term
    const [restaurants, setRestaurants] = useState([]); //useState something that updates, so this is the part of API 
    const [errorMessage, setErrorMessage] = useState('');

        // We are doing API network request here
    const searchApi = async (searchTerm) => {
        console.log("hi there");
        try {
            const response = await yelp.get('/search', {
                params: { //paramaters
                    limit: 50,
                    term: searchTerm, //if any param are idential like here term=term, it is enough just to put term,
                    location: 'saint louis'
                }
            });
            setRestaurants(response.data.businesses); //we just want the businesses data results
        } catch (err) {
            setErrorMessage('Something went wrong!');
        }
    };

    // Call search API when component
    // is first rendered.  BAD CODE:
    // searchApi('pasta');

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