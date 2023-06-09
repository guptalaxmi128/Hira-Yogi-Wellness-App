// import React, { useState } from "react";
import React, { useState, useCallback, useEffect } from "react";
// import { useRoute } from "@react-navigation/native";
import YoutubePlayer from 'react-native-youtube-iframe';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
 
} from "react-native";

import Overview from "./Overview";
import LiveClasses from "./LiveClasses";
import Classes from "./Classes";
import CustomSwitch from "./CustomSwitch";
// import { ScrollView } from "react-native-gesture-handler";
import YouTubePlayer from "./YouTubePlayer";

const Course = () => {
 const [courseTab,setCourseTab]=useState(1);


   // const param =useRoute().params;
   const [playing,setPlaying]=useState(false);
    
  //    useEffect(()=>{
  //   console.log("....",param)
  //    },[])
   
     const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
      //   Alert.alert("video has finished playing!");
      }
    }, []);


  const onSelectSwitch=(value) =>{
     setCourseTab(value);
  }

  return (
    <>
    <ScrollView>
      <View style={styles.container}>
        <View
          style={[
            styles.shadowContainerStyle,
            {
              width: 350,
              height: 160,
              backgroundColor: "#fff",
              alignContent: "center",
              borderRadius: 20,
            
            },
          ]}
        >
        
       
<YoutubePlayer
     height={160}
 
    play={playing}
     videoId={'8Nh9Oi1qQiY'}
     onChangeState={onStateChange}
      />
        </View>
       
        <View style={{  marginVertical:20 }}>
          <View
           style={[
             styles.shadowContainerStyle,
              {
                width: 350,
                height: 45,
                borderRadius: 25,
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                alignItems: "center",
                padding: 5,
                marginBottom:5,
              },
            ]}
          >
          <CustomSwitch selectionMode={1} 
            option1="Overview"
            option2="Live Classes"
            option3="Classes"
            onSelectSwitch={onSelectSwitch}
          />

  
      
        </View>
        {courseTab == 1 && <Overview />}
        {courseTab == 2 && <LiveClasses />}
        {courseTab == 3 &&  <Classes />}
        </View>
     
      </View>
      </ScrollView>
      <View style={{ backgroundColor: "#fff" }}>
        <View
          style={{
            width: 350,
            height: 50,
            backgroundColor: "#333787",
            flexDirection: "row",
            alignItems: "center",
            // padding: 20,
            borderRadius: 20,
            borderColor: "#333787",
            margin: 22,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              padding: 4,
              width: "100%",
              height: 30,
              fontSize: 14,
              fontWeight: "bold",
              color: "#fff",
              alignItems: "center",
            }}
          >
            Enroll Now
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 20,
  },
  shadowContainerStyle: {
    // borderWidth: 1,
    borderRadius: 20,
    // borderColor: "#333787",
    borderBottomWidth: 0,
    shadowColor: "#333787",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
  },
  backgroundVideo: {
   borderRadius:20,
  },
  // tabName: {
  //   fontFamily: "Poppins",
  //   fontSize: 13,
  //   backgroundColor: "#e1e5f5",
  //   width: 100,
  //   borderRadius: 20,
  //   height: 30,
  //   textAlign: "center",
  //   padding: 5,
  //   margin: 6,
  //   flex: 1,
  //   color: "#333787",
  // },
 
  video:{
    flex:1,
    alignSelf:'stretch'
  }

});

export default Course;
