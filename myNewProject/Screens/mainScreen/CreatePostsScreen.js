import React, {useState} from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
// import { TouchableOpacity } from "react-native-gesture-handler";

const CreatePostsScreen = () => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async() => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log('photo', photo);
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {
          photo && (
            <View style={styles.photoContainer}>
              <Image 
              source={{uri: photo}}
              style={{ height: 200, width: 200}}
              />
              
            </View>
          )
        }
        <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
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
    // marginBottom: 32,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  snap: {
    color: "#FF6C00",
  },
  snapContainer: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FF6C00",
    marginBottom: 20,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  photoContainer:{
    position: 'absolute',
    top: 50,
    left: 20,
    borderColor: 'red',
    borderWidth: 1,
  }
});
export default CreatePostsScreen;
