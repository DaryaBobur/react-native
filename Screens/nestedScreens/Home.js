import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";

import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const Home = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    await onSnapshot(collection(db, "posts"), (data) =>
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
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
              <TouchableOpacity onPress={() => navigation.navigate("Comments", {postId: item.id})}>
                <EvilIcons name="comment" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
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

export default Home;
