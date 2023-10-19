import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native';

import ListItem from './ListItem';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: true
        };
        setTimeout(() => {
            this.setState({
                test: false
            })
        }, 1000);
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.props.data}
                    extraData={this.state.test}
                    renderItem={({ item }) => <ListItem data={item} fun={this.props.fun} />}
                    keyExtractor={item => item.timestamp}
                />
            </View>
        );
    }
}
