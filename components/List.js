import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import ListItem from './ListItem';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={({ item }) => <ListItem data={item} fun={this.props.fun} />}
            // keyExtractor={item => JSON.parse(item).timestamp}
            />
        );
    }
}
