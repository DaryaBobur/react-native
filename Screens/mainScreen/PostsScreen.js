import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../nestedScreens/Home";
import CommentsScreen from '../nestedScreens/CommentsScreen';
import MapScreen from "../nestedScreens/MapScreen";

const NestedScreen = createStackNavigator();
const PostsScreen = () => {
return (
  <NestedScreen.Navigator>
    <NestedScreen.Screen name="Home" component={Home}/>
    <NestedScreen.Screen name="Map" component={MapScreen}/>
    <NestedScreen.Screen name="Comments" component={CommentsScreen}/>
  </NestedScreen.Navigator>
)
};

export default PostsScreen;