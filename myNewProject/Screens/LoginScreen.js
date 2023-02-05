import React, { useState, useEffect } from "react";
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

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function LoginScreen() {
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 10 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 10 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardClosed = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardClosed}>
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
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 32 : 144,
                width: dimensions,
              }}
            >
              <Text style={styles.formTitle}>Log In</Text>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Your email"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={value => setState(prevState => ({...prevState, email: value}))}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  secureTextEntry={true}
                  onChangeText={value => setState(prevState => ({...prevState, password: value}))}
                />
              </View>
              <TouchableOpacity
              activeOpacity={0.8}
              onPress={keyboardClosed}
              >
                <Text style={styles.btn}>Log In</Text>
              </TouchableOpacity>
              <Text style={styles.text}>Don't have an account? Sign up!</Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 40,
    marginHorizontal: 16,
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
    marginTop: 43,
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
    marginBottom: 33,
  },
});