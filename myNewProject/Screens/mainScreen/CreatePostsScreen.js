import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Camera style={styles.camera}>
        <TouchableOpacity style={styles.snapContainer}>
          <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: 300,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  snap: {
    color: "#FF6C00",
  },
  snapContainer: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FF6C00",
    marginTop: 200,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CreatePostsScreen;
