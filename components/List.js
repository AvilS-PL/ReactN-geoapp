import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native';

import ListItem from './ListItem';

function List({ data, fun }) {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={({ item }) => <ListItem data={item} fun={fun} />}
                keyExtractor={item => item.timestamp}
            />
        </View>
    );
}

export default List