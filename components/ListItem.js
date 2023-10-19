import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Switch } from 'react-native';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: this.props.data.switch
        };
    }

    changeSwitch = () => {
        if (this.state.val) {
            this.setState({
                val: false
            })
        } else {
            this.setState({
                val: true
            })
        }

        this.props.fun(this.props.data.timestamp)
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.left}>
                    <Image style={styles.img} source={require('../default.png')}></Image>
                </View>
                <View style={styles.middle}>
                    <Text>Timestamp: {this.props.data.timestamp} </Text>
                    <Text>Latitude: {this.props.data.coords.latitude} </Text>
                    <Text>Longitude: {this.props.data.coords.longitude} </Text>
                </View>
                <View style={styles.right}>
                    <Switch
                        trackColor={{ false: '#75757555', true: '#75757599' }}
                        thumbColor={this.props.data.switch ? 'white' : '#eeeeee'}
                        onValueChange={this.changeSwitch}
                        value={this.props.data.switch}
                    />
                </View>
            </View>
        );
    }
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