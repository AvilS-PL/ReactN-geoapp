import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native';
import * as Font from "expo-font";

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            color: "white"
        };
    }

    componentDidMount = async () => {
        await Font.loadAsync({
            'myfont': require('./sup.ttf'),
        });
        this.setState({ loaded: true, color: "white" })
    }

    test = () => {
        this.props.navigation.navigate("main")
    }

    render() {
        return (
            <View style={styles.center}>
                {this.state.loaded
                    ?
                    <TouchableOpacity onPress={() => this.test()} style={[styles.center]}>
                        <Text style={{
                            fontFamily: 'myfont',
                            fontSize: 60,
                            color: this.state.color,
                        }}>GeoApp</Text>
                        <Text style={{
                            fontFamily: 'myfont',
                            fontSize: 20,
                            color: "white"
                        }}>Find your position</Text>
                        <Text style={{
                            fontFamily: 'myfont',
                            fontSize: 20,
                            color: "white"
                        }}>or something</Text>
                    </TouchableOpacity>
                    :
                    <ActivityIndicator size="large" color="#0000ff" />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#009688",
    }
});