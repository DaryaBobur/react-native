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
  Button,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegisterScreen() {
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 10 * 2
  );

  useEffect(()=> {
    const onChange = () => {
      const width = Dimensions.get('window').width - 10 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/Photo.jpg")}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.form}
        >
          <View
            // style={{ ...styles.form, paddingBottom: isShowKeyboard ? 32 : 78 }}
          >
       
              <Text style={styles.formTitle}>Sign Up</Text>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Login"
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Your email"
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <TouchableOpacity>
                <Text style={styles.btn}>Sign Up</Text>
              </TouchableOpacity>
              <Text style={styles.text}>You have account? Sign in!</Text>
            </View>

        </KeyboardAvoidingView>
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
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    marginTop: 16,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#fff",
    width: "100%",
    paddingBottom: 32,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
    backgroundColor: "#F6F6F6",
  },
  btn: {
    backgroundColor: "#FF6C00",
    fontSize: 16,
    color: "#fff",
    fontWeight: "700",
    marginHorizontal: 16,
    textAlign: "center",
    marginTop: 25,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 16,
    paddingTop: 16,
    borderRadius: 100,
  },
  formTitle: {
    color: "#212121",
    fontWeight: "500",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 32,
  },
});
