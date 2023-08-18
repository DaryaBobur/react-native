import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { authSignOut } from "../../redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  const [userPosts, setUserPosts] = useState([]);
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);

  useEffect(() => {
    getUserPosts();
  }, []);

  const getUserPosts = async () => {
    const postsRef = collection(db, "posts");
    const postsUser = await query(postsRef, where("userId", "==", userId));
    await onSnapshot(postsUser, (data) =>
      setUserPosts(data.docs.map((doc) => ({ ...doc.data() })))
    );
  };

  const signOut = () => {
    dispatch(authSignOut());
  };
  return (
    <View>
      <FlatList
        data={userPosts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.photo }} style={styles.image} />
            <Text>{item.description}</Text>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Map", { location: item.location })
                }
              >
                <Feather name="map-pin" size={24} color="#BDBDBD" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Comments", { postId: item.id })
                }
              >
                <EvilIcons name="comment" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
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
  image: {
    height: 240,
    width: 343,
    marginHorizontal: 16,
  },
  imageContainer: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProfileScreen;
