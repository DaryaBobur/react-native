import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { authSignOut } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(authSignOut())
  }
  return (
    <View>
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={signOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProfileScreen;
