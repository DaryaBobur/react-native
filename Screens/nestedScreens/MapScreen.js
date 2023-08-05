import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => (
  
  <View style={styles.container}>
    <MapView
      style={{flex: 1}}
      initialRegion={{
        latitude: -0.653262183305514,
        longitude: 73.11457316479186,
        latitudeDelta: 0.01,
        longitudeDelta: 0.1,
      }}
    >
      <Marker
        coordinate={{
          latitude: -0.653262183305514,
          longitude: 73.11457316479186,
        }}
        title="My holidays"
      />
    </MapView>
  </View>
  )
;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default MapScreen;