import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";
import Header from "./Header";

const Notification = () => {
  return (
    <>
      <Header title={"Notification"} icon={require("../assets/back.png")} />
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View style={styles.container}>
          <View
            style={{
              marginTop: 20,
              marginLeft: 10,
              marginRight: 10,
              flexDirection: "row",
            }}
          >
            <View style={{ marginTop: 4 }}>
              <Avatar
                rounded
                source={{
                  uri: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                }}
                size={50}
              />
            </View>
            <View style={{ marginTop: 2, marginLeft: 10 }}>
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 14,
                  fontWeight: "700",
                  width: 95,
                  height: 20,
                }}
              >
                SALE IS LIVE
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    width: 254,
                    height: 50,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
                  sit amet, consectetur adipiscing elit.
                </Text>
                <Text
                  style={{
                    width: 54,
                    height: 15,
                    fontFamily: "Poppins",
                    fontSize: 11,
                    fontWeight: "500",
                  }}
                >
                  1 min ago
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.hr} />
          {/* second */}
          <View style={{ margin: 10, flexDirection: "row" }}>
            <View style={{ marginTop: 4 }}>
              <Avatar
                rounded
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                }}
                size={50}
              />
            </View>
            <View style={{ marginTop: 2, marginLeft: 10 }}>
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 14,
                  fontWeight: "700",
                  width: 95,
                  height: 20,
                }}
              >
                SALE IS LIVE
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    width: 254,
                    height: 50,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
                  sit amet, consectetur adipiscing elit.
                </Text>
                <Text
                  style={{
                    width: 54,
                    height: 15,
                    fontFamily: "Poppins",
                    fontSize: 11,
                    fontWeight: "500",
                  }}
                >
                  1 min ago
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.hr} />
          {/* Third */}
          <View style={{ margin: 10, flexDirection: "row" }}>
            <View style={{ marginTop: 4 }}>
              <Avatar
                rounded
                source={{
                  uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                }}
                size={50}
              />
            </View>
            <View style={{ marginTop: 2, marginLeft: 10 }}>
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 14,
                  fontWeight: "700",
                  width: 95,
                  height: 20,
                }}
              >
                SALE IS LIVE
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    width: 254,
                    height: 50,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
                  sit amet, consectetur adipiscing elit.
                </Text>
                <Text
                  style={{
                    width: 54,
                    height: 16,
                    fontFamily: "Poppins",
                    fontSize: 11,
                    fontWeight: "500",
                  }}
                >
                  1 min ago
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.hr} />
          {/* Fourth */}
          <View style={{ margin: 10, flexDirection: "row" }}>
            <View style={{ marginTop: 4 }}>
              <Avatar
                rounded
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1669135328266-9d8ee270d01f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                }}
                size={50}
              />
            </View>
            <View style={{ marginTop: 2, marginLeft: 10 }}>
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 14,
                  fontWeight: "700",
                  width: 95,
                  height: 20,
                }}
              >
                SALE IS LIVE
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    width: 254,
                    height: 50,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
                  sit amet, consectetur adipiscing elit.
                </Text>
                <Text
                  style={{
                    width: 80,
                    height: 15,
                    fontFamily: "Poppins",
                    fontSize: 11,
                    fontWeight: "500",
                  }}
                >
                  10 Hrs ago
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.hr} />
        </View>
      </ScrollView>
    </>
  );
};

export default Notification;
const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    backgroundColor: "#fff",
    //   alignItems: "center",
    //   width: "100%",
  },
  hr: {
    position: "relative",
    width: "100%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    opacity: 0.1,
    marginTop: 5,
  },
});
