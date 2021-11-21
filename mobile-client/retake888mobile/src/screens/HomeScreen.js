
import React, { useState, useReducer } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    ImageBackground
} from 'react-native';
import MatchesDateButtonComponent from '../components/MatchesDateButtonComponent';
import backGround from '../assets/lol-background.png'


const HomeScreen = ({ navigation, route }) => {
    const matchesDate = [
        { date: "20/10/2021", key: "1" },
        { date: "21/10/2021", key: "2" },
        { date: "22/10/2021", key: "3" },
        { date: "23/10/2021", key: "4" },
    ]

    // const matchesDate = route.params.match;

    return (
        <ImageBackground source={backGround} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={matchesDate}
                    renderItem={({ item }) => {
                        return (
                            <MatchesDateButtonComponent
                                onPress={() => navigation.navigate('MatchScreen',item)}
                                date={item.date}
                            />
                        );
                    }}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
});

export default HomeScreen;
