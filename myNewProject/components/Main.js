import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { auth } from "../firebase/config";
import appRoute from "../router";
import { onAuthStateChanged } from "firebase/auth";

const Main = () => {
  const [user, setUser] = useState(null);
  const state = useSelector((state) => state);
  console.log(state);

  onAuthStateChanged(auth, (user) => setUser(user));
  const routing = appRoute(user);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
