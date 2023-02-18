import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
    <View>
        <MapView style={{flex: 1}}
        initialRegion={{
            latitude: -0.653262183305514,
            longitude: 73.11457316479186,
            latitudeDelta: 0.001,
            longitudeDelta: 0.006
        }}
        >
            <Marker
            coordinate={{latitude: -0.653262183305514,
                longitude: 73.11457316479186,}}
                title='My holidays'
            />
        </MapView>
    </View>
}

export default MapScreen;