import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MyButton from './MyButton';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={styles.top1}>
                    <MyButton text="Add point" color="#009688" tcolor="white" x="14" y="4" />
                    <MyButton text="Delete all" color="#009688" tcolor="white" x="14" y="4" />
                </View>
                <View style={styles.top2}>
                    <MyButton text="Show on map" color="#009688" tcolor="white" x="14" y="4" />
                </View>
                <View style={styles.bottom}>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#009688",
    },
    top1: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-evenly',
    },
    top2: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-evenly',
    },
    bottom: {
        flex: 8,
    }
});