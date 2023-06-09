import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import * as WebBrowser from 'expo-web-browser';
import { WebView } from "react-native-webview";

const Profile = ({navigation}) => {
  const [showWebView, setShowWebView] = useState(true);

  const handleLoad = () => {
    setShowWebView(false);
  };
  const handlePress= () =>{
    const url='https://www.iqraias.com/';
    navigation.navigate('WebViewScreen',{ url });
  }
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <Avatar
              rounded
              source={{
                uri: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              }}
              size={100}
            />
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontFamily: "Poppins", fontSize: 18 }}>
                Kelvin Holmes
              </Text>
              <Text style={{ fontFamily: "Poppins", fontSize: 14 }}>
                Edit Profile &nbsp;
                <Image
                  style={{ width: 16, height: 16, marginBottom: 1 }}
                  source={require("../assets/profile_icons/edit-2.png")}
                />
              </Text>
            </View>
            <TouchableOpacity
             onPress={handlePress}
            // onPress={toggleWebView}
            >
            {/* {showWebView && (
  <WebView
    source={{ uri: 'https://example.com' }}
    injectedJavaScript={`
      setTimeout(function() {
        window.open('https://example.com', '_blank');
      }, 100);
    `}
    javaScriptEnabled={true}
    domStorageEnabled={true}
    startInLoadingState={true}
    style={{ flex: 1 }}
  />
)} */}
              <View style={[styles.shadowContainerStyle, { margin: 8 }]}>
                <View
                  style={{
                    width: 360,
                    height: 50,
                    backgroundColor: "white",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 15,
                    borderRadius: 20,
                  }}
                >
                  <View style={{ marginBottom: 4 }}>
                    <Image
                      style={{ width: 14, height: 14, margin: 5 }}
                      source={require("../assets/profile_icons/global.png")}
                    />
                  </View>
                  <Text
                    style={{
                      marginRight: 170,
                      paddingTop: 1,
                      width: 100,
                      height: 30,
                      fontSize: 14,
                      fontFamily: "Poppins",
                      //   fontWeight: "bold",
                    }}
                  >
                    Iqraias.com
                  </Text>
                  <View style={{ marginBottom: 6 }}>
                    <Image
                      style={{ width: 14, height: 14, margin: 5 }}
                      source={require("../assets/profile_icons/arrow-right.png")}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <WebView 
              source={{uri:'https://www.iqraias.com/'}}
              onLoad={handleLoad}
            />
 
            <View style={[styles.shadowContainerStyle, { margin: 8 }]}>
              <View
                style={{
                  width: 360,
                  height: 50,
                  backgroundColor: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 15,
                  borderRadius: 20,
                }}
              >
                <Image
                  style={{ width: 14, height: 14, margin: 5 }}
                  source={require("../assets/profile_icons/message-minus.png")}
                />

                <Text
                  style={{
                    marginRight: 69,
                    paddingTop: 2,
                    width: 200,
                    height: 30,
                    fontSize: 14,
                    fontFamily: "Poppins",
                    //   fontWeight: "bold",
                  }}
                >
                  Current Affairs
                </Text>

                <Image
                  style={{ width: 14, height: 14, margin: 5 }}
                  source={require("../assets/profile_icons/arrow-right.png")}
                />
              </View>
            </View>
            <View style={[styles.shadowContainerStyle, { margin: 8 }]}>
              <View
                style={{
                  width: 360,
                  height: 50,
                  backgroundColor: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 15,
                  borderRadius: 20,
                }}
              >
                <Image
                  style={{ width: 14, height: 14, margin: 5 }}
                  source={require("../assets/profile_icons/frame.png")}
                />

                <Text
                  style={{
                    marginRight: 69,
                    paddingTop: 2,
                    width: 200,
                    height: 30,
                    fontSize: 14,
                    fontFamily: "Poppins",
                    //   fontWeight: "bold",
                  }}
                >
                  Saved Course
                </Text>

                <Image
                  style={{ width: 14, height: 14, margin: 5 }}
                  source={require("../assets/profile_icons/arrow-right.png")}
                />
              </View>
            </View>
            <View style={[styles.shadowContainerStyle, { margin: 8 }]}>
              <View
                style={{
                  width: 360,
                  height: 50,
                  backgroundColor: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 15,
                  borderRadius: 20,
                }}
              >
                <Image
                  style={{ width: 14, height: 14, margin: 5 }}
                  source={require("../assets/profile_icons/info-circle.png")}
                />

                <Text
                  style={{
                    marginRight: 69,
                    paddingTop: 2,
                    width: 200,
                    height: 30,
                    fontSize: 14,
                    fontFamily: "Poppins",
                    //   fontWeight: "bold",
                  }}
                >
                  Help Center
                </Text>

                <Image
                  style={{ width: 14, height: 14, margin: 5 }}
                  source={require("../assets/profile_icons/arrow-right.png")}
                />
              </View>
            </View>
            <View style={[styles.shadowContainerStyle, { margin: 8 }]}>
              <View
                style={{
                  width: 360,
                  height: 50,
                  backgroundColor: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 15,
                  borderRadius: 20,
                }}
              >
                <Image
                  style={{ width: 14, height: 14, margin: 5 }}
                  source={require("../assets/profile_icons/bag-timer.png")}
                />

                <Text
                  style={{
                    marginRight: 69,
                    paddingTop: 2,
                    width: 200,
                    height: 30,
                    fontSize: 14,
                    fontFamily: "Poppins",
                    //   fontWeight: "bold",
                  }}
                >
                  Privacy Policy
                </Text>

                <Image
                  style={{ width: 14, height: 14, margin: 5 }}
                  source={require("../assets/profile_icons/arrow-right.png")}
                />
              </View>
            </View>
            <View style={[styles.shadowContainerStyle, { margin: 8 }]}>
              <View
                style={{
                  width: 360,
                  height: 50,
                  backgroundColor: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 15,
                  borderRadius: 20,
                }}
              >
                <Image
                  style={{ width: 14, height: 14, margin: 5 }}
                  source={require("../assets/profile_icons/like.png")}
                />

                <Text
                  style={{
                    marginRight: 69,
                    paddingTop: 2,
                    width: 200,
                    height: 30,
                    fontSize: 14,
                    fontFamily: "Poppins",
                    //   fontWeight: "bold",
                  }}
                >
                  Feedback
                </Text>

                <Image
                  style={{ width: 14, height: 14, margin: 5 }}
                  source={require("../assets/profile_icons/arrow-right.png")}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                marginBottom: 20,
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              <View
                style={{
                  width: 360,
                  height: 50,
                  backgroundColor: "white",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 15,
                  borderRadius: 20,
                  borderColor: "#333787",
                  borderWidth: 1,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    paddingBottom: 4,
                    width: "100%",
                    height: 30,
                    fontSize: 14,
                    fontFamily: "Poppins",
                    color: "#333787",
                  }}
                >
                  Logout
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // paddingTop: 20,
  },
  shadowContainerStyle: {
    // borderWidth: 1,
    borderRadius: 20,
    // borderColor: "#333787",
    borderBottomWidth: 0,
    shadowColor: "#333787",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 10,
  },
});

export default Profile;
