import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const RestaurantsList = ({ title, restaurants }) => {

    return (
        <View>
            <Text style = {styles.title}>{title}</Text>
            {/* <Text>Restaurants: {restaurants.length} </Text> */}
            <FlatList 
                horizontal
                data={restaurants}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({ item }) => {
                    return <Text>{ item.name} </Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default RestaurantsList;