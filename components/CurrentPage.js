import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";


const datalist = [
    {
      id: 1,
      name: "Basic Design",
      url: "https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      bgColor: "#fff6e5",
      title:'Introduction to Graphic Design ',
    
    },
    {
      id: 2,
      name: "Typography",
      url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      bgColor: "#feeaeb",
      title:'Introduction to Typography',
    },
    {
      id: 3,
      name: "Colors",
      url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      bgColor: "#ffffcc",
      title:'Principles of colors and elements',
    },
    {
        id: 4,
        name: "Typography",
        url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        bgColor: "#feeaeb",
        title:'Introduction to Typography',
      },
      {
        id: 5,
        name: "Colors",
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        bgColor: "#ffffcc",
        title:'Principles of colors and elements',
      },
      {
        id: 6,
        name: "Typography",
        url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        bgColor: "#feeaeb",
        title:'Introduction to Typography',
      },
      {
        id: 7,
        name: "Colors",
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        bgColor: "#ffffcc",
        title:'Principles of colors and elements',
      },
 
  ];

const CurrentPage = () => {
  return (
    <>
      <View style={styles.container}>
      <FlatList
        vertical
        data={datalist}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
            return (
        <View
          style={[
            styles.shadowContainerStyle,
            {
              width: 355,
              backgroundColor: "#fff",
              borderRadius: 20,
              marginTop: 10,
              marginLeft: 18,
              marginRight: 18,
            },
          ]}
        >
          <View
            style={{
              width: 55,
              height: 55,
              backgroundColor: "pink",
              margin: 10,
            //   padding:5,
            //   marginRight: 10,
            //   marginLeft: 10,
            //   marginBottom: 6,
              borderRadius: 30,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{
                width: 55,
                height: 55,
                borderRadius: 30,
                borderWidth: 0.4,
                borderColor: "#2A3C79",
              }}
            //   source={require("../assets/1.jpg")}
            source={{uri:item.url}}
              resizeMode="cover"
            /> 
            <View
              style={{
                marginRight: 30,
                width: 200,
                paddingLeft: 10,
                paddingTop: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  fontFamily: "Poppins",
                  marginBottom: 1,
                }}
              >
               {item.name}
              </Text>
              <View
                style={{
                  width: 200,
                //   height: 15,
                //   borderRadius: 25,
                //   backgroundColor: "#e1e5f5",
                //   alignItems: "center",
                //   justifyContent: "center",
                  marginRight:2,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    alignItems: "center",
                    color: "gray",
                    fontFamily: "Poppins",
                    
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </View>
          </View>
        </View>)
        }}
        />
        {/* second */}
        {/* <View
          style={[
            styles.shadowContainerStyle,
            {
              width: 345,
              backgroundColor: "#fff",
              borderRadius: 20,
              marginTop: 10,
              marginLeft: 18,
              marginRight: 18,
            },
          ]}
        >
          <View
            style={{
              width: 65,
              height: 65,
              backgroundColor: "pink",
              marginTop: 10,
              marginRight: 10,
              marginLeft: 10,
              marginBottom: 6,
              borderRadius: 15,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{
                width: 65,
                height: 65,
                borderRadius: 15,
                borderWidth: 0.4,
                borderColor: "#2A3C79",
              }}
              source={require("../assets/1.jpg")}
              resizeMode="cover"
            />
            <View
              style={{
                marginRight: 30,
                width: 200,
                paddingLeft: 10,
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
                Story of my life
              </Text>
              <View
                style={{
                  width: 85,
                  height: 15,
                  borderRadius: 25,
                  backgroundColor: "#e1e5f5",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    alignItems: "center",
                    color: "#2A3C79",
                    fontFamily: "Poppins",
                  }}
                >
                  1 hours,20 min
                </Text>
              </View>
            </View>
          </View>
        </View> */}
        {/* Third */}
        {/* <View
          style={[
            styles.shadowContainerStyle,
            {
              width: 345,
              backgroundColor: "#fff",
              borderRadius: 20,
              marginTop: 10,
              marginLeft: 18,
              marginRight: 18,
            },
          ]}
        >
          <View
            style={{
              width: 65,
              height: 65,
              backgroundColor: "pink",
              marginTop: 10,
              marginRight: 10,
              marginLeft: 10,
              marginBottom: 6,
              borderRadius: 15,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{
                width: 65,
                height: 65,
                borderRadius: 15,
                borderWidth: 0.4,
                borderColor: "#2A3C79",
              }}
              source={require("../assets/1.jpg")}
              resizeMode="cover"
            />
            <View
              style={{
                marginRight: 30,
                width: 200,
                paddingLeft: 10,
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
                How to win PES
              </Text>
              <View
                style={{
                  width: 85,
                  height: 15,
                  borderRadius: 25,
                  backgroundColor: "#e1e5f5",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    alignItems: "center",
                    color: "#2A3C79",
                    fontFamily: "Poppins",
                  }}
                >
                  2 hours,45 min
                </Text>
              </View>
            </View>

            
          </View>
        </View> */}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
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
});

export default CurrentPage;
