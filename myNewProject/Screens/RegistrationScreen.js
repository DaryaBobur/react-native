import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/Photo.jpg")}
      >
        <StatusBar style="auto" />
        <View style={styles.form}>
            <Text style={styles.formTitle}>Sign Up</Text>
          <TextInput style={styles.input} placeholder="Login" />
          <TextInput style={styles.input} placeholder="Your email" />
          <TextInput style={styles.input} placeholder="Password" />
          <TouchableOpacity>
            <Text style={styles.btn}>Sign Up</Text>
            <Text>You have account? Sign in!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0e68c",
  },
  text: {
    color: "#8b0000",
    fontWeight: "700",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#fff", 
    width: '100%', 
    paddingBottom: 45, 
    paddingTop: 45,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25 

  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 40,
    marginHorizontal: 20,
    borderRadius: 8,
    color: "#2a2a2a",
    padding: 10,
    marginBottom: 16,
    backgroundColor:'#F6F6F6',
  },
  btn: {
    backgroundColor: '#FF6C00', 
    fontSize: 16,
    color:'#fff',
    fontWeight: '700',
    marginHorizontal: 16,
    textAlign: 'center',
    marginTop: 25,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 16,
    paddingTop: 16,
    borderRadius: 100,
  },
  formTitle: {
    color: '#212121',
    fontWeight: '500',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 32
  }
});
