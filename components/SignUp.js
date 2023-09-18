import React, { useState } from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import PhoneInput from "react-native-phone-number-input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import LoadingOverlay from "./loadingOverlay/LoadingOverlay";
import { useRegisterAppUserMutation } from "../services/signUpApi";

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [registerAppUser] = useRegisterAppUserMutation();

  // console.log(phoneNumber)

  const handleSubmit = async () => {
    const sanitizedPhoneNumber = phoneNumber.replace(/^\+91/, "");
    const pattern = /^[a-zA-Z\s]+$/;
    const valid = pattern.test(name);
    if (!name) {
      setNameError("Please enter your name");
    } else if (!valid) {
      setNameError("Invalid name. Only characters are allowed.");
    } else if (name.length < 3) {
      setNameError("Name should have at least 3 characters");
    } else {
      setNameError("");
    }

    if (!sanitizedPhoneNumber) {
      setPhoneNumberError("Please enter your mobile number");
    } else if (sanitizedPhoneNumber.length !== 10) {
      setPhoneNumberError("Mobile number should have 10 digits");
    } else {
      setPhoneNumberError("");
    }
    if (!email) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
    if (
      name &&
      name.length >= 3 &&
      phoneNumber &&
      sanitizedPhoneNumber.length === 10 &&
      email
    )
      setIsLoading(true);
    try {
      const formData = { name, phoneNumber: sanitizedPhoneNumber, email };
      // console.log(formData)
      const res = await registerAppUser(formData);
      console.log(res);

      if (res && res.data && res.data.success) {
        setMessage("");
        await AsyncStorage.setItem("authToken", res.data.authToken);
        console.log(await AsyncStorage.getItem("authToken"));
        setName("");
        setPhoneNumber("");
        setEmail("");
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
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/logo.png")}
            style={{
              height: responsiveHeight(20),
              width: responsiveWidth(85),
            }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Sign up</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text
                style={[styles.labelText, { marginTop: responsiveHeight(5) }]}
              >
                Name
              </Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
              />
              {nameError ? (
                <Text style={{ color: "red", marginLeft: responsiveWidth(5) }}>
                  {nameError}
                </Text>
              ) : null}
              <Text
                style={[styles.labelText, { marginTop: responsiveHeight(2) }]}
              >
                Your Email
              </Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              {emailError ? (
                <Text style={{ color: "red", marginLeft: responsiveWidth(5) }}>
                  {emailError}
                </Text>
              ) : null}
              <Text
                style={[styles.labelText, { marginTop: responsiveHeight(2) }]}
              >
                Phone Number
              </Text>
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
                // onPress={()=>navigation.navigate("BottomTab")}
              >
                <View>
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
                      Create an Account
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: responsiveHeight(5),
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
                  If Already have an Account.
                </Text>
                <TouchableOpacity
                  style={{ textDecorationLine: "underline" }}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text
                    style={{
                      color: "#e08a44",
                      fontSize: responsiveFontSize(2),
                      fontFamily: "Poppins",
                    }}
                  >
                    Login here
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingTop: responsiveHeight(10),
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
  labelText: {
    fontSize: responsiveFontSize(2),
    marginLeft: responsiveWidth(5),
    fontFamily: "Poppins",
    color: "gray",
  },
  btnContainer: {
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
    marginTop: responsiveHeight(3),
  },
  input: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    borderWidth: 0.5,
    borderColor: "gray",
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
    borderRadius: 10,
    padding: responsiveWidth(3),
    fontSize: responsiveFontSize(2),
    alignItems: "center",
    justifyContent: "center",
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
});
