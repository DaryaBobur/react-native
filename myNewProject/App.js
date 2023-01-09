import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <ImageBackground style={styles.image} source={require("./assets/Photo.jpg")}>
        {/* <Text style={styles.text}>Open up App.js to start working on your app!</Text> */}
        <StatusBar style="auto" />
    </ImageBackground>
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e68c',
  },
  text: {
    color: "#2a2a2a",
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: 'center',
    justifyContent: "center",
  }
});
