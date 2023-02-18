import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  console.log(posts);

  return (
    <View style={styles.container}>
      <FlatList 
      data={posts}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <View style={styles.imageContainer}>
            <Image
            source={{uri: item.photo}}
            style={styles.image}
            />
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
    marginHorizontal: 16
  },
  imageContainer: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
   
  }
});
export default PostsScreen;
