import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

const Otp = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{ width: 100, height: 100 }}>
          <Image
            source={require("../assets/logo.jpg")}
            style={{
              height: 100,
              width: 100,
              borderWidth: 1,
              borderColor: "#333787",
            }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            marginTop: 50,
            height: 500,
            backgroundColor: "#fafafa",
            width: "100%",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "500",
              marginTop: 10,
              marginLeft: 40,
              fontFamily: "Poppins",
            }}
          >
            Login
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginLeft: 40,
              fontFamily: "Poppins",
              color: "gray",
              marginTop: 30,
            }}
          >
            Enter OTP
          </Text>
          <View style={{ marginLeft: 40, marginRight: 40 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TextInput style={styles.input} />
              <TextInput style={styles.input} />
              <TextInput style={styles.input} />
              <TextInput style={styles.input} />
              <TextInput style={styles.input} />
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("BottomTab")}>
            <View style={{ marginLeft: 20, marginRight: 20, marginTop: 30 }}>
              <View
                style={{
                  width: "100%",
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
                  Login
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.hr} />
            {/* <View style={{alignItems:'center'}}> */}
            <Text
              style={{
                alignItems: "center",
                fontSize: 14,
                color: "gray",
                marginTop: 5,
              }}
            >
              OR Sign in with
            </Text>
            <View style={styles.hr} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 40, height: 40, marginRight: 20 }}
              source={require("../assets/google.png")}
            />

            <Image
              style={{ width: 40, height: 40 }}
              source={require("../assets/Facebook.png")}
            />
          </View>
           <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <View style={{ marginTop: 60, alignItems: "center" }}>
            <Text
              style={{ fontSize: 12, fontFamily: "Poppins", fontWeight: "400" }}
            >
              Don't receive code?&nbsp;
             
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Poppins",
                  color: "#333787",
                  fontWeight: "400",
                }}
              >
                Resend
              </Text>
             
            </Text>
          </View>
           </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    // height:'100%',
    paddingTop: 120,
  },
  input: {
    width: 55,
    height: 55,
    borderWidth: 0.5,
    borderColor: "gray",
    marginLeft: 1,
    marginRight: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
  },

  hr: {
    position: "relative",
    // top: 1,
    width: "30%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    opacity: 0.3,
    marginLeft: 15,
    marginRight: 20,
    marginBottom: 10,
  },
});

export default Otp;
