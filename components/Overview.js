import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
const Overview = () => {
  return (
    <>
  {/* <ScrollView> */}
      <View style={styles.container}>
        <View
          style={{ marginTop:5}}
        >
          <Text
            style={{ fontFamily: "Poppins", fontSize: 16, textAlign: "left" }}
          >
            GSE pre + mains
          </Text>
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 11,
              textAlign: "left",
              color: "gray",
            }}
          >
            this is description this is description this is description this is
            description this is descriptionthis is description &nbsp;
            <Text
              style={{ fontFamily: "Poppins", fontSize: 12, color: "#333787",fontWeight:'bold' }}
            >
              Learn more
            </Text>
          </Text>
        </View>
        <View style={{marginTop:10,marginBottom:10,flexDirection:'row'}}>
        <View style={{width:110,height:70,borderRadius:25,backgroundColor:'#e1e5f5',marginRight:10}}></View>
        <View style={{width:110,height:70,borderRadius:25,backgroundColor:'#e1e5f5',marginRight:10}}></View>
        <View style={{width:110,height:70,borderRadius:25,backgroundColor:'#e1e5f5'}}></View>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={{width:110,height:70,borderRadius:25,backgroundColor:'#e1e5f5',marginRight:10}}></View>
        <View style={{width:110,height:70,borderRadius:25,backgroundColor:'#e1e5f5'}}></View>
        </View>
        <View style={{marginTop:10}}><Text style={{fontSize:16 ,fontWeight:'bold',textAlign:'left'}}>Subjects</Text>
        <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{width:70,height:25,borderRadius:20,borderWidth:1,borderColor:'gray'}}><Text style={styles.subText}>History</Text></View>
        <View style={{width:90,height:25,borderRadius:20,borderWidth:1,borderColor:'gray'}}><Text style={styles.subText}>Chemistry</Text></View>
        <View style={{width:70,height:25,borderRadius:20,borderWidth:1,borderColor:'gray'}}><Text style={styles.subText}>Physics</Text></View>
        <View style={{width:73,height:25,borderRadius:20,borderWidth:1,borderColor:'gray'}}><Text style={styles.subText}>Geology</Text></View>
        </View>
        <View style={{width:100,height:25,borderRadius:20,borderWidth:1,marginTop:10,borderColor:'gray'}}><Text style={styles.subText}>Mathematics</Text></View>
        </View>
       
      </View>
      {/* </ScrollView> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //   alignItems: "center",
    // padding: 16,
    width: "100%",
  },
  subText:{
    textAlign:'center',
    padding:2,
    fontSize:12,
    fontFamily:'Poppins',
    color:'gray',
  }
});

export default Overview;
