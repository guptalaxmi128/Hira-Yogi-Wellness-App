import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image, ScrollView ,FlatList,TouchableOpacity } from "react-native";


const LiveClasses = () => {
 const navigation=useNavigation();
  const VideoList = [
    {
      id: 2,
      course: "Geography",
      thumbnail: "demo.png",
      title: "Live classes",
      instructorName: "Mayank Sir",
      videoLink: "X6gqWkYAsTg",
      videoType: "youtube",
      createdAt: null,
      updatedAt: null,
    },
    {
      id: 3,
      course: "History ",
      thumbnail: "demo.png",
      title: "Live classes",
      instructorName: "Avadh Ojha Sir",
      videoLink: "j27QgY9Y4_g",
      videoType: "youtube",
      createdAt: null,
      updatedAt: null,
    },
    {
      id: 4,
      course: "Ncert Jan",
      thumbnail: "1673263920357-pending.png",
      title: "one demo",
      instructorName: "Ojha Sir",
      videoLink: "8Nh9Oi1qQiY",
      videoType: "Youtube",
      createdAt: "2023-01-09T11:32:00.000Z",
      updatedAt: "2023-01-09T11:32:00.000Z",
    },
  ];
  return (
    <>
    
      <View style={styles.container}>
     
      <FlatList
        data={VideoList}
        renderItem={({item,index})=>
        <TouchableOpacity 
        // onPress={()=>console.log('Video Clicked:'+index)}
        onPress={()=>navigation.navigate('Courses',{videoData:item})}
        >


           <View
          style={[
            styles.shadowContainerStyle,
            {
              width: 345,
              height: 80,
              backgroundColor: "#fff",
              borderRadius: 20,
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
         
          <View
            style={{
              width: 65,
              height: 65,
              backgroundColor: "pink",
              borderRadius: 15,
              alignItems: "center",
              marginLeft: 8,
              marginTop: 8,
              marginBottom: 8,
            }}
          >
            <Image
              style={{ width: 65, height: 65, borderRadius: 15,borderWidth:0.4,borderColor:"#2A3C79" }}
              source={require("../assets/logo.jpg")}
              resizeMode="cover"
            />
          </View>
          <View style={{ padding: 15, marginRight: 130,width:110,marginTop:8 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "100",
                fontFamily: "Poppins",
                marginBottom:1,
              }}
            >
              {item.course}
            </Text>
            <View
              style={{
                width: 65,
                height: 15,
                borderRadius: 25,
                backgroundColor: "#e1e5f5",
                alignItems: "center",
                justifyContent:'center',
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  // fontWeight: "bold",
                  // textAlign: "center",
                  alignItems: "center",
                  color: "#2A3C79",
                  // padding: 2,
                  fontFamily: "Poppins",
                }}
              >
                {item.instructorName}
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 25, marginRight: 10,alignItems:'center',paddingRight:20,width:30}}>
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/video-circle.png")}
            />
          </View>
        </View>
        </TouchableOpacity>

        }
        />

       
        {/* <View
          style={[
            styles.shadowContainerStyle,
            {
              width: 345,
              height: 80,
              backgroundColor: "#fff",
              borderRadius: 20,
              marginTop: 10,
              marginLeft: 18,
              marginRight: 18,
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <View
            style={{
              width: 65,
              height: 65,
              backgroundColor: "pink",
              borderRadius: 15,
              alignItems: "center",
              marginLeft: 8,
              marginTop: 8,
              marginBottom: 8,
            }}
          >
            <Image
              style={{ width: 65, height: 65, borderRadius: 15,borderWidth:0.4,borderColor:'#2A3C79' }}
              source={require("../assets/logo.jpg")}
              resizeMode="cover"
            />
          </View>
          <View style={{ padding: 15, marginRight: 130, width: 110,marginTop:8 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "100",
                fontFamily: "Poppins",
                marginBottom:1,
              }}
            >
              History
            </Text>
            <View
              style={{
                width: 80,
                height: 15,
                borderRadius: 25,
                backgroundColor: "#e1e5f5",
                alignItems: "center",
                justifyContent:'center',
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  // fontWeight: "bold",
                  // textAlign: "center",
                  alignItems: "center",
                  color: "#2A3C79",
                  // padding: 2,
                  fontFamily: "Poppins",
                }}
              >
                Avadh Ojha Sir
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 25, marginRight: 10,width:30,paddingRight:20,alignItems:'center' }}>
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/video-circle.png")}
            />
          </View>
        </View>
        <View
          style={[
            styles.shadowContainerStyle,
            {
              width: 345,
              height: 80,
              backgroundColor: "#fff",
              borderRadius: 20,
              marginTop: 10,
              marginLeft: 18,
              marginRight: 18,
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <View
            style={{
              width: 65,
              height: 65,
              backgroundColor: "pink",
              borderRadius: 15,
              alignItems: "center",
              marginLeft: 8,
              marginTop: 8,
              marginBottom: 8,
            }}
          >
            <Image
              style={{ width: 65, height: 65, borderRadius: 15,borderWidth:0.4,borderColor:"#2A3C79" }}
              source={require("../assets/logo.jpg")}
              resizeMode="cover"
            />
          </View>
          <View style={{ padding: 15, marginRight: 130, width: 110,marginTop:8 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "100",
                fontFamily: "Poppins",
                marginBottom:1,
              }}
            >
              Ncert Jan
            </Text>
            <View
              style={{
                width: 45,
                height: 15,
                borderRadius: 25,
                backgroundColor: "#e1e5f5",
                alignItems: "center",
                justifyContent:'center',
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  // fontWeight: "bold",
                  // textAlign: "center",
                  alignItems: "center",
                  color: "#2A3C79",
                  // padding: 2,
                  fontFamily: "Poppins",
                }}
              >
                Ojha Sir
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 25, marginRight: 10,width:30,alignItems:'center',paddingRight:20}}>
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/video-circle.png")}
            />
          </View>
        </View> */}
      </View>
      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    //   height:'100%',
    width: "100%",
    fontFamily: "Poppins",
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

export default LiveClasses;
