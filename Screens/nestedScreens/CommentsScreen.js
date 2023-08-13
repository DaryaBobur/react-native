import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { db } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useSelector } from "react-redux";

const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState("");
  const { postId } = route.params;
  const { login } = useSelector((state) => state.auth);

  const createComment = async () => {
    const newCollection = collection(db, "posts", postId, "comments");
    await addDoc(newCollection, { comment, login });
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Comment..."
          onChangeText={setComment}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.sendBtn} onPress={createComment}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  sendBtn: {
    backgroundColor: "#FF6C00",
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    width: 200,
    // marginHorizontal: 16,

    color: "#2a2a2a",
    padding: 10,
    marginBottom: 32,
    backgroundColor: "#fff",
    fontSize: 16,
  },
});

export default CommentsScreen;
