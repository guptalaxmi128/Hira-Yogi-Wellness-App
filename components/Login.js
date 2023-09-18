import React, { useState } from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import LoadingOverlay from "./loadingOverlay/LoadingOverlay";
import { useLoginAppUserMutation } from "../services/signUpApi";

const Login = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [loginAppUser] = useLoginAppUserMutation();

  const handleSubmit = async () => {
    const sanitizedPhoneNumber = phoneNumber.replace(/^\+91/, "");

    if (!sanitizedPhoneNumber) {
      setPhoneNumberError("Please enter your mobile number");
    } else if (sanitizedPhoneNumber.length !== 10) {
      setPhoneNumberError("Mobile number should have 10 digits");
    } else {
      setPhoneNumberError("");
    }

    if (phoneNumber && sanitizedPhoneNumber.length === 10) setIsLoading(true);
    try {
      const formData = { phoneNumber: sanitizedPhoneNumber };
      // console.log(formData)
      const res = await loginAppUser(formData);
      console.log(res);
      if (res && res.data && res.data.success) {
        setMessage("");
        await AsyncStorage.setItem("authToken", res.data.authToken);
        console.log(await AsyncStorage.getItem("authToken"));
        navigation.navigate("BottomTab");
      } else if (res && res.error.data && res.error.data.message) {
        setMessage(res.error.data.message);
      } 
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "height" : 'padding'}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/logo.png")}
              style={{
                width: responsiveWidth(85),
                height: responsiveHeight(20),
              }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Login</Text>
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                marginLeft: responsiveWidth(8),
                marginBottom: responsiveHeight(5),
                color: "gray",
                fontFamily: "Poppins",
              }}
            >
              Glad to meet you again!
            </Text>
            <Text style={styles.labelText}>Your Mobile</Text>
            <PhoneInput
              defaultValue={phoneNumber}
              defaultCode="IN"
              layout="first"
              withShadow
              containerStyle={styles.phoneNumberView}
              textContainerStyle={{
                paddingVertical: 0,
                backgroundColor: "#fff",
                color: "gray",
              }}
              onChangeFormattedText={(text) => setPhoneNumber(text)}
            />
            {phoneNumberError ? (
              <Text style={{ color: "red", marginLeft: responsiveWidth(5) }}>
                {phoneNumberError}
              </Text>
            ) : null}
            <LoadingOverlay isLoading={isLoading} />
            {message ? (
              <Text style={{ color: "red", marginLeft: responsiveWidth(5) }}>
                {message}
              </Text>
            ) : null}
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={handleSubmit}
            >
              <View
                style={{
                  width: "100%",
                  height: responsiveHeight(6),
                  backgroundColor: "#e08a44",
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 10,
                  borderColor: "#333787",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    padding: responsiveWidth(2),
                    width: "100%",
                    height: responsiveHeight(6),
                    fontSize: responsiveFontSize(2),
                    fontWeight: "bold",
                    color: "#fff",
                    alignItems: "center",
                  }}
                >
                  {/* Get OTP */}
                  Submit
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: responsiveHeight(2),
              }}
            >
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  fontFamily: "Poppins",
                  fontWeight: "200",
                }}
              >
                Don't have an Account.
              </Text>
              <TouchableOpacity
                style={{ textDecorationLine: "underline" }}
                onPress={() => navigation.navigate("SignUp")}
              >
                <Text
                  style={{
                    color: "#e08a44",
                    fontSize: responsiveFontSize(2),
                    fontFamily: "Poppins",
                  }}
                >
                  SignUp
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingTop: responsiveHeight(12),
  },
  imageContainer: {
    width: responsiveWidth(85),
    height: responsiveHeight(20),
    alignItems: "center",
  },
  signUpContainer: {
    marginTop: responsiveHeight(5),
    height: responsiveHeight(65),
    backgroundColor: "#fafafa",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  signUpText: {
    fontSize: responsiveFontSize(3),
    fontWeight: "500",
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(8),
    fontFamily: "Poppins",
  },
  phoneNumberView: {
    alignItems: "center",
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "gray",
  },
  btnContainer: {
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
    marginTop: responsiveHeight(3),
  },
  labelText: {
    fontSize: responsiveFontSize(2),
    marginLeft: responsiveWidth(5),
    fontFamily: "Poppins",
    color: "gray",
  },
});

export default Login;
