import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, Switch } from 'react-native';


function It({ data, fun }) {
    console.log("dupa")

    const changeSwitch = () => {
        fun(data.timestamp)
    }

    return (
        <View style={styles.main}>
            <View style={styles.left}>
                <Image style={styles.img} source={require('../default.png')}></Image>
            </View>
            <View style={styles.middle}>
                <Text>Timestamp: {data.timestamp} </Text>
                <Text>Latitude: {data.coords.latitude} </Text>
                <Text>Longitude: {data.coords.longitude} </Text>
            </View>
            <View style={styles.right}>
                <Switch
                    trackColor={{ false: '#75757555', true: '#75757599' }}
                    thumbColor={data.switch ? 'white' : '#eeeeee'}
                    onValueChange={changeSwitch}
                    value={data.switch}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    main: {
        backgroundColor: "#B2DFDB",
        flexDirection: "row",
        height: 100,
        marginTop: 20,
        marginHorizontal: 20,

        borderRadius: 12,
        elevation: 3
    },
    img: {
        width: 80,
        height: 80,
    },
    left: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, middle: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
    },
    right: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default It