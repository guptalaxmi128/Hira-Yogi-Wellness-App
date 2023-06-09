import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-elements";

import CarouselItem from "./CarouselItem";



const Home = () => {

  return (
    <>
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <View style={{ paddingTop: 5 }}>
          <Avatar
            rounded
            source={{
              uri: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            }}
            size={43}
          />
        </View>
        <Text style={styles.sectionTitle}>Welcome, Kelvin</Text>
        <View style={styles.Item}>
          <Image
            style={styles.AddItem}
            source={require("../assets/notification-icon.png")}
          />
        </View>
      </View>

      <View style={styles.searchArea}>
        <Image
          style={styles.icon}
          source={require("../assets/search-icon.png")}
        />
        <TextInput placeholder="Search" style={styles.input} />
        <Image style={styles.filter} source={require("../assets/filter.png")} />
      </View>
      <CarouselItem />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          margin:5,
        }}
      >
        <Text style={{ paddingTop: 5, fontSize: 16, fontWeight: "bold" }}>
          Trending Course
        </Text>
        <Text
          style={{
            paddingTop: 5,
            fontSize: 16,
            fontWeight: "bold",
            color: "#333787",
          }}
        >
          See All
        </Text>
      </View>
        </View>
        <View
        style={{
          justifyContent: "center",
          flex: 1,
        //   marginTop: 5,
        //   marginBottom: 7,
          backgroundColor:"#ffffff",
        }}
      >
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 20,
              marginRight: 20,
             
            }}
          >
            <View>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                }}
                style={{ height: 135, width: 165, borderRadius: 20 }}
                resizeMode="cover"
              />
              <Text
                style={{
                  fontSize: 14,
                  // fontWeight: "bold",
                  paddingHorizontal: 10,
                  width: 165,
                  fontFamily: 'Poppins',
                  marginVertical:5,
                }}
              >
                UI/UX Design master class
              </Text>
            </View>
            <View>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                }}
                style={{ height: 135, width: 165, borderRadius: 20 }}
                resizeMode="cover"
              />
              <Text
                style={{
                  fontSize: 14,
                  // fontWeight: "bold",
                  paddingHorizontal: 10,
                  width: 165,
                  fontFamily: 'Poppins',
                  marginVertical:5,
                }}
              >
                Digital Marketing
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 20,
            //   backgroundColor:"#ffffff",
            }}
          >
            <View>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                }}
                style={{ height: 135, width: 165, borderRadius: 20 }}
                resizeMode="cover"
              />
              <Text
                style={{
                  fontSize: 14,
                  // fontWeight: "bold",
                  paddingHorizontal: 10,
                  width: 165,
                  fontFamily: 'Poppins',
                  marginVertical:5,
                }}
              >
                Office management master class
              </Text>
            </View>
            <View>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                }}
                style={{ height: 135, width: 165, borderRadius: 20 }}
                resizeMode="cover"
              />
              <Text
                style={{
                  fontSize: 14,
                  // fontWeight: "bold",
                  paddingHorizontal: 10,
                  width: 165,
                  fontFamily: 'Poppins',
                  marginVertical:5,
                }}
              >
                Online Marketing
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    
    </>
  );
};

const styles = StyleSheet.create({
  container:{
backgroundColor:"#ffffff",
  },
  tasksWrapper: {
    paddingTop: 23,
    paddingHorizontal: 20,
    flexDirection: "row",
    width: 100,
    height: 75,
    // marginTop:23,
    // marginVertical:10,
    // justifyContent:'space-between',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    width: 200,
    margin: 10,
    fontFamily: 'Poppins',
  },

  searchArea: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    margin: 10,
    borderWidth: 0.2,
    marginLeft: 20,
    // paddingHorizontal: 20,
    borderRadius: 10,
  },
  icon: {
    width: 20,
    height: 20,
    opacity: 0.5,
    marginLeft: 10,
  },
  input: {
    paddingHorizontal: 10,
  },
  filter: {
    width: 15,
    height: 15,
    opacity: 0.4,
    marginLeft: 230,
    // backgroundColor: "transparent",
  },
  Item: {
    height: 75,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    // marginRight:20,
  },
  AddItem: {
    width: 25,
    height: 25,
    marginBottom: 20,
    justifyContent: "center",
    // marginHorizontal:18,
    marginLeft: 50,
    // margin
  },
});

export default Home;
