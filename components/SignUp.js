import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
  } from "react-native";

  

const SignUp = () => {

    return (<>

  <View style={styles.container}>
  <View style={{width:100,height:100}}>
        <Image
        source={ require('../assets/logo.jpg')}
        style={{ height: 100, width: 100, borderWidth:1,borderColor:"#333787" }}
        resizeMode="cover"
      />
      </View>
      <View style={{marginTop:50,height:500,backgroundColor:'#fafafa',width:'100%',borderTopLeftRadius:30,borderTopRightRadius:30}}>
      <Text style={{fontSize:24,fontWeight:'500',marginTop:10,marginLeft:35,fontFamily:'Poppins'}}>Sign up</Text>
      
        <Text style={{fontSize:14,marginLeft:20,fontFamily:'Poppins',color:"gray",marginTop:30}}>Name</Text>
  <TextInput  style={styles.input}/>
  <Text style={{fontSize:14,marginLeft:20,fontFamily:'Poppins',color:"gray",marginTop:10}}>Your Email</Text>
  <TextInput  style={styles.input}/>
    <TouchableOpacity>
      <View style={{ marginLeft:20,marginRight:20,marginTop:30}} >
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: "#333787",
              flexDirection: "row",
              alignItems: "center",
              // padding: 20,
              borderRadius: 10,
              borderColor: "#333787",
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
            Sign Up
            </Text>
          </View>
        </View>
        </TouchableOpacity>
       
        <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
        <View style={styles.hr}/>
        {/* <View style={{alignItems:'center'}}> */}
        <Text style={{alignItems:'center',fontSize:14,color:'gray',marginTop:5}}>OR Sign in with</Text>
        <View style={styles.hr}/>
        </View>
        <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 30,
                  alignItems:'center',
                  justifyContent:'center',
                }}
              >
               
                  <Image
                    style={{ width: 40, height: 40 ,marginRight:20 }}
                    source={require("../assets/google.png")}
                  />

                 <Image
                    style={{ width: 40, height: 40 }}
                    source={require("../assets/Facebook.png")}
                  />
        </View>
       
      </View>
     
        </View>
      
        </>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    width:'100%',
    // height:'100%',
    paddingTop: 80,
  },

  hr: {
    position: "relative",
    // top: 1,
    width:'30%',
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    opacity: 0.3,
    marginLeft:15,
    marginRight:20,
    marginBottom:10,
  },
  input:{
    width:350,
    height:50,
    borderWidth:0.5,
    borderColor:'gray',
    marginLeft:20,
    marginRight:20,
    borderRadius:10,
    padding:10,
    fontSize:14,
  }
});

export default SignUp;