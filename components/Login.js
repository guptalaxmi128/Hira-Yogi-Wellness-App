import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
  } from "react-native";
  import PhoneInput from "react-native-phone-number-input";
  

const Login = ({navigation}) => {
 const[phoneNumber,setPhoneNumber]=React.useState('');
 const getPhoneNumber=()=>{
  Alert.alert(phoneNumber);
 }
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
      <Text style={{fontSize:24,fontWeight:'500',marginTop:10,marginLeft:35,fontFamily:'Poppins'}}>Login</Text>
        <Text style={{fontSize:14,marginLeft:35,marginBottom:30,color:'gray',fontFamily:'Poppins'}}>Glad to meet you again!</Text>
        <Text style={{fontSize:14,marginLeft:20,fontFamily:'Poppins',color:"gray",marginTop:30}}>Your Mobile</Text>
    <PhoneInput
    defaultValue={phoneNumber}
    defaultCode='IN'
    layout='first'
    withShadow
    // autoFocus
    containerStyle={styles.phoneNumberView}
    textContainerStyle={{paddingVertical:0,backgroundColor:'#fff',color:'gray'}}
    onChangeFormattedText={text=>setPhoneNumber(text)}
    />
    <TouchableOpacity onPress={()=>navigation.navigate('Otp')}>
      <View style={{ marginLeft:20,marginRight:20,marginTop:30}} onPress={()=>getPhoneNumber()}>
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
            Get OTP
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
    paddingTop: 120,
  },
  phoneNumberView:{
    alignItems:'center',
    width:350,
    height:50,
    marginLeft:20,
    marginRight:20,
    // marginTop:60,
    flexDirection:'row',
    borderRadius:10,
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
});

export default Login;