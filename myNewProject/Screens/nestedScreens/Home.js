import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const Home = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
console.log(route.params)
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  console.log("posts", posts);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.photo }} style={styles.image} />
          </View>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Map")}>
        <Feather name="map-pin" size={24} color="#BDBDBD" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
        <EvilIcons name="comment" size={24} color="#BDBDBD" />
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

export default Home;
