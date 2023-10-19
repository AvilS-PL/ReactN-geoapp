import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Switch } from 'react-native';
import * as Location from "expo-location";
import AsyncStorage from '@react-native-async-storage/async-storage';

import MyButton from './MyButton';
import List from './List';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: [],
            all: false
        };
    }

    componentDidMount = async () => {
        Location.requestForegroundPermissionsAsync();
        await this.loadAll()
    }

    chSwitch = (what) => {
        let tempTab = [...this.state.tab]
        for (let i = 0; i < this.state.tab.length; i++) {
            if (tempTab[i].timestamp == what) {
                tempTab[i].switch = !tempTab[i].switch
            }
        }
        this.setState({
            tab: tempTab
        })
    }

    chAllSwitch = () => {
        let tempTab = [...this.state.tab]
        for (let i = 0; i < tempTab.length; i++) {
            tempTab[i].switch = !this.state.all
        }
        this.setState({
            tab: tempTab,
            all: !this.state.all
        }, () =>
            this.loadAll())
    }


    getPosition = async () => {
        let pos = await Location.getCurrentPositionAsync({})
        Alert.alert('Position', 'save or not?', [
            { text: 'Yes', onPress: async () => await this.save(pos) },
            { text: 'No' },
        ]);
    }

    save = async (pos) => {
        await AsyncStorage.setItem(JSON.stringify(pos.timestamp, null, 4), JSON.stringify(pos, null, 4))
        await this.loadAll()
    }

    deleteAll = async () => {
        let keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys)
        await this.loadAll()
        alert("All positions removed")
    }


    loadAll = async () => {
        let tempTab = []
        let keys = await AsyncStorage.getAllKeys();
        let stores = await AsyncStorage.multiGet(keys);
        let maps = stores.map((result, i, store) => {
            // let key = store[i][0];
            let value = JSON.parse(store[i][1])
            if (this.state.all) {
                value.switch = true
            } else {
                value.switch = false
            }
            tempTab.push(value)
        });
        this.setState({
            tab: tempTab
        })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={styles.top1}>
                    <MyButton fun={this.getPosition} text="Add point" color="#009688" tcolor="white" x="14" y="4" />
                    <MyButton fun={this.deleteAll} text="Delete all" color="#009688" tcolor="white" x="14" y="4" />
                </View>
                <View style={styles.top2}>
                    <MyButton fun={this.loadAll} text="Show on map" color="#009688" tcolor="white" x="14" y="4" />
                    <Switch
                        trackColor={{ false: '#75757555', true: '#75757599' }}
                        thumbColor={this.state.val ? 'white' : '#eeeeee'}
                        onValueChange={this.chAllSwitch}
                        value={this.state.all}
                    />
                </View>
                <View style={styles.bottom}>
                    <List data={this.state.tab} fun={this.chSwitch} hm={this.state.all} />
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