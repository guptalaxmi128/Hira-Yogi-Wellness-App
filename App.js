import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "./components/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import BottomTab from "./components/BottomTab";
import Course from "./components/Course";
import Login from "./components/Login";
import Otp from "./components/Otp";
import SignUp from "./components/SignUp";

import CameraPage from "./components/CameraPage";
import Auth from "./components/Auth";


const App = () => {
  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    // <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
      {/* <CameraPage /> */}
  
        {/* <BottomTab /> */}
        <Auth />
        {/* <Login /> */}
        {/* <Course /> */}
        {/* <Otp /> */}
        {/* <SignUp /> */}
      </NavigationContainer>
    // </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ffffff",
    alignItems: "center",
    height:'100%',
    width:'100%',
    fontFamily:'Poppins',
  },
});

export default App;
