
import React, { useState, useReducer } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    FlatList,
    ImageBackground
} from 'react-native';
import MatchButtonComponent from '../components/MatchButtonComponent';
import backGround from '../assets/lol-background.png'
import { ACTION } from './FacebookScreen';

const reducer = (matches, action) => {
    switch (action.type) {
        case ACTION.CHOOSE_TEAM:
            return matches.map((match) => {
                if (match.key === action.current.key) {
                    return { ...match, choose: action.current.choose }
                }
            })
    }
}

const FlatListDemoScreen = ({ navigation }) => {
    const [matches, dispatch] = useReducer(reducer, DATA)
    const [isRender, setIsRender] = useState(false)
    const DATA = [
        { date: "20/10/2021", time: "18:00", team1Logo: require("../assets/T1.png"), team2Logo: require("../assets/HLE.png"), status: "open", choose: 0, key: "1" },
        { date: "20/10/2021", time: "19:00", team1Logo: require("../assets/T1.png"), team2Logo: require("../assets/HLE.png"), status: "open", choose: 0, key: "2" },
        { date: "21/10/2021", time: "20:00", team1Logo: require("../assets/T1.png"), team2Logo: require("../assets/HLE.png"), status: "open", choose: 0, key: "3" },
        { date: "21/10/2021", time: "21:00", team1Logo: require("../assets/T1.png"), team2Logo: require("../assets/HLE.png"), status: "open", choose: 0, key: "4" },
        { date: "22/10/2021", time: "22:00", team1Logo: require("../assets/T1.png"), team2Logo: require("../assets/HLE.png"), status: "open", choose: 0, key: "5" },
        { date: "22/10/2021", time: "23:00", team1Logo: require("../assets/T1.png"), team2Logo: require("../assets/HLE.png"), status: "open", choose: 0, key: "6" },
    ]

    const renderItem = ({ item }) => {
        return (
            <MatchButtonComponent
                time={item.time}
                team1Logo={item.team1Logo}
                team2Logo={item.team2Logo}
                status={item.status}
                choose={item.choose}
            />
        );
    }

    return (
        <ImageBackground source={backGround} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={DATA}
                    renderItem={renderItem}
                // extraData={isRender}
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

export default FlatListDemoScreen;
