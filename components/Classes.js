import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

const data = [
  {
    id: 1,
    title: "History",
    creator: "By Vikas",
  },
  {
    id: 2,
    title: "History",
    creator: "By Vikas",
  },
  {
    id: 3,
    title: "History",
    creator: "By Vikas",
  },
];
const Classes = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {/* <ScrollView> */}
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.shadowContainerStyle,
                {
                  width: 345,
                  backgroundColor: "#fff",
                  borderRadius: 20,
                  marginTop: 10,
                },
              ]}
            >
              {/* <TouchableOpacity onPress={() => setShowContent(!showContent)} > */}
              <View
                style={{
                  width: 55,
                  height: 55,
                  margin: 8,
                  borderRadius: 15,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    borderWidth: 0.4,
                    borderColor: "#2A3C79",
                    marginTop:15
                  }}
                  source={require("../assets/video-circle.png")}
                  resizeMode="contain"
                />
                <View
                  style={{
                    marginRight: 110,
                    width: 120,
                    paddingLeft: 15,
                    paddingTop: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "100",
                      fontFamily: "Poppins",
                      marginBottom: 1,
                    }}
                  >
                    {item.title}
                  </Text>
                  <View
                    style={{
                      width: 80,
                      height: 18,
                      alignItems: "center",
                      justifyContent: "center",
                      paddingRight: 25,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,

                        alignItems: "center",
                        color: "#e08a44",

                        fontFamily: "Poppins",
                      }}
                    >
                      {item.creator}
                    </Text>
                  </View>
                </View>
              </View>
              {/* </TouchableOpacity> */}
              {/* {showContent && (
            <View style={styles.body}>
            <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
              
                  <Image
                    style={{ width: 20, height: 20, marginRight: 12 }}
                    source={require("../assets/video-circle.png")}
                  />
                
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    {item.heading}
                  </Text>
                </View>
              
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
                
                <View style={{ width: 30,marginRight:10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  {item.date}
                </Text>
              </View>
              <View style={styles.hr} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
              
                  <Image
                    style={{ width: 20, height: 20, marginRight: 12 }}
                    source={require("../assets/video-circle.png")}
                  />
                
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    {item.heading}
                  </Text>
                </View>
              
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
                
                <View style={{ width: 30,marginRight:10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  {item.date}
                </Text>
              </View>
              <View style={styles.hr} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
              
                  <Image
                    style={{ width: 20, height: 20, marginRight: 12 }}
                    source={require("../assets/video-circle.png")}
                  />
                
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    {item.heading}
                  </Text>
                </View>
              
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
                
                <View style={{ width: 30, marginRight: 10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  {item.date}
                </Text>
              </View>
              <View style={styles.hr} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
               
                  <Image
                    style={{ width: 20, height: 20, marginRight: 12 }}
                    source={require("../assets/video-circle.png")}
                  />
                
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    {item.heading}
                  </Text>
                </View>
               
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
               
               
                <View style={{ width: 30, marginRight: 10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  {item.date}
                </Text>
              </View>
            </View>
          )} */}
            </View>
          )}
        />
  
      </View>
      {/* </ScrollView> */}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    width: "100%",
    fontFamily: "Poppins",
    overflow: "hidden",
  },
  shadowContainerStyle: {
    borderRadius: 20,

    borderBottomWidth: 0,
    shadowColor: "#333787",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 10,
  },
  body: {
    paddingHorizontal: "2%",
    paddingVertical: "3%",
  },
  hr: {
    position: "relative",

    borderBottomColor: "gray",
    borderBottomWidth: 1,
    opacity: 0.1,
    margin: 2,
  },
});

export default Classes;
