import React, { Component, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';


function Map({ route }) {

    const [places, setPlaces] = useState([])

    useEffect(() => {
        let tab = []
        for (let i = 0; i < route.params.tab.length; i++) {
            if (route.params.tab[i].switch) {
                tab.push(
                    <Marker
                        coordinate={{
                            latitude: route.params.tab[i].coords.latitude,
                            longitude: route.params.tab[i].coords.longitude,
                        }}
                        key={route.params.tab[i].timestamp}
                    />
                )
            }
        }

        setPlaces(tab)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: route.params.tab[0].coords.latitude,
                    longitude: route.params.tab[0].coords.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                {places}
            </MapView>

        </View>
    );
}

export default Map
