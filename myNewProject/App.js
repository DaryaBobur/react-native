import React, { useState } from "react";
// import {} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/mainScreen/PostsScreen";
import CreatePostsScreen from "./Screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
};

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={console.error}
      />
    );
  }
  return (
    <NavigationContainer>
      <MainTab.Navigator>
        <MainTab.Screen name="Posts" component={PostsScreen}/>
        <MainTab.Screen name="CreatePosts" component={CreatePostsScreen}/>
        <MainTab.Screen name="Profile" component={ProfileScreen}/>
      </MainTab.Navigator>
    </NavigationContainer>
  );
}


  //    <AuthStack.Navigator> 
  // <AuthStack.Screen
  //         options={{
  //           headerShown: false,
  //         }}
  //         name="Register"
  //         component={RegistrationScreen}
  //       />
  //       <AuthStack.Screen
  //         options={{
  //           headerShown: false,
  //         }}
  //         name="Login"
  //         component={LoginScreen}
  //       />
  //     </AuthStack.Navigator> 