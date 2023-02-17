import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput  } from "react-native";
import { Camera } from "expo-camera";
// import { TextInput } from "react-native-gesture-handler";

const CreatePostsScreen = ({navigation}) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const makePhoto = async() => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log('photo', photo);
  };

  const sendPhoto =() => {
    console.log(navigation);
    navigation.navigate('Posts', {photo})
  }

  return (
    <View style={styles.container}>

    <Camera style={styles.camera} ref={setCamera}>
        {
          photo && (
            <View style={styles.photoContainer}>
              <Image 
              source={{uri: photo}}
              style={styles.photo}
              />
              
            </View>
          )} 
        <TouchableOpacity onPress={makePhoto} style={styles.snapContainer}>
          <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Download photo</Text>
      </View>
      <View>
        <TextInput
        style={styles.input}
        placeholder="Description..."
        />
      </View>
      <View>
        <TextInput
        style={styles.input}
        placeholder="Location..."
        />
      </View>
      <View>
      <TouchableOpacity onPress={sendPhoto} style={styles.publishBtn}>
          <Text style={styles.publish}>Publish post</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    
  },
  camera: {
    height: '50%',
    marginHorizontal: 16,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 8,
    // borderWidth: 1,
    // borderColor: '#E8E8E8',
    // borderRadius: 8,
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
    left: 100,
    borderColor: '#FF6C00',
    borderWidth: 1,
    borderRadius: 20
  },
  photo: {
    height: 200, 
    width: 200,
  },
  publishBtn:{
    marginHorizontal: 16,
    borderRadius: 100,
    paddingBottom: 16,
    paddingTop: 16,
    paddingRight: 118,
    paddingLeft: 118,
    borderWidth: 1,
    borderColor: 'transparent',
    marginBottom: 20,
    color: 'red',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#F6F6F6'
  },
  publish: {
    color: '#BDBDBD',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    height: 40,
    marginHorizontal: 16,
    color: "#2a2a2a",
    padding: 10,
    marginBottom: 32,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  text:{
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },
  textContainer: {
    marginHorizontal: 16, 
    marginBottom:48
  }
});
export default CreatePostsScreen;
