import React, { useEffect, useState} from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Avatar } from "react-native-elements";
import Header from "./Header";
import { useGetAppUserQuery } from "../services/signUpApi";

const Profile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email,setEmail]=useState('');
  const { data, isSuccess } = useGetAppUserQuery();
  
 

  useEffect(() => {
    if (data && isSuccess && data.data) {
      setName(data.data.name);
      setEmail(data.data.email);
    }
  }, [data, isSuccess]);
  // const handleLogout= async()=>{ //little bit incomplete
  //   await removeToken('token')
  //   navigation.navigate("Sign Up")
  //   console.log("token is remove!")
  // }
 

  return (
    <View style={styles.container}>
      <Header title={"Profile"} icon={require("../assets/back.png")} />
      <View style={{ margin: 20, flexDirection: "row" }}>
        <Avatar
          rounded
          source={{
            uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          }}
          size={75}
        />
        <View style={{ marginLeft: 20, marginTop: 15 }}>
          <Text
           style={{ fontFamily: "Poppins", fontSize: 16 }}
           >
            {name}
       
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins",
              color: "gray",
              marginTop: 3,
            }}
          >
        {email}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("MyAppointment")}>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            // backgroundColor:'pink'
            height: 45,
            padding: 10,
          }}
        >
          <Image
            style={{ width: 20, height: 20, marginLeft: 20 }}
            source={require("../assets/profile-icon/shopping-bag.png")}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '200',
              marginRight: 123,
              fontFamily: "Poppins",
            }}
          >
            My Appointment
          </Text>
          <Image
            style={{ width: 20, height: 20, marginRight: 20 }}
            source={require("../assets/profile-icon/arrow-right.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
      <TouchableOpacity onPress={() => navigation.navigate("MyDetails")}>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            height: 45,
            padding: 10,
          }}
        >
          <Image
            style={{ width: 20, height: 20, marginLeft: 20 }}
            source={require("../assets/profile-icon/note.png")}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '200',
              marginRight: 170,
              fontFamily: "Poppins",
              // backgroundColor:'yellow'
            }}
          >
            My Details
          </Text>
          <Image
            style={{ width: 20, height: 20, marginRight: 20 }}
            source={require("../assets/profile-icon/arrow-right.png")}
          />
        </View>
      </TouchableOpacity>
   
      <View style={styles.hr} />
      <TouchableOpacity >
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            height: 45,
            padding: 10,
          }}
        >
          <Image
            style={{ width: 20, height: 20, marginLeft: 20 }}
            source={require("../assets/profile-icon/location.png")}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '200',
              marginRight: 120,
              fontFamily: "Poppins",
             
            }}
          >
            Delivery Address
          </Text>
          <Image
            style={{ width: 20, height: 20, marginRight: 20 }}
            source={require("../assets/profile-icon/arrow-right.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
      <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            // backgroundColor:'pink'
            height: 45,
            padding: 10,
          }}
        >
          <Image
            style={{ width: 20, height: 20, marginLeft: 20 }}
            source={require("../assets/profile-icon/notification.png")}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '200',
              marginRight: 150,
              fontFamily: "Poppins",
            }}
          >
            Notifications
          </Text>
          <Image
            style={{ width: 20, height: 20, marginRight: 20 }}
            source={require("../assets/profile-icon/arrow-right.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
     
  
      {/* <TouchableOpacity
      onPress={handleLogout}
      > */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              margin: 30,
              backgroundColor: "#dcdcdc",
              height: 50,
              width: "75%",
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 20, height: 20, marginLeft: 20 }}
              source={require("../assets/profile-icon/logout.png")}
            />
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                fontWeight: "bold",
                color: "#e08a44",
                marginRight: 120,
              }}
            >
              Logout
            </Text>
          </View>
        </View>
      {/* </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    // padding:16,
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

export default Profile;
