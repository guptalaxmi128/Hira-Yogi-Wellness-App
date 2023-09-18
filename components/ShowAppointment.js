import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import { useGetAppUserQuery } from "../services/signUpApi";

const ShowAppointment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { data, isSuccess } = useGetAppUserQuery();

  useEffect(() => {
    if (data && isSuccess && data.data) {
      setName(data.data.name);
      setEmail(data.data.email);
    }
  }, [data, isSuccess]);

  return (
    <View style={styles.container}>
      {/* <Header title={"Show Appointment"} icon={require("../assets/back.png")} /> */}
      <ScrollView>
        <View style={{ padding: 5 }}>
          <View
            style={{
              width: "100%",
              height: 100,
              borderRadius: 20,
              backgroundColor: "#fff",
              elevation: 3,
              padding: 12,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Avatar
                rounded
                source={{
                  uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
                }}
                size={75}
              />
              <View style={{ marginLeft: 20, marginTop: 15 }}>
                <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>
                  {name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Poppins",
                    color: "gray",
                    marginTop: 3,
                  }}
                >
                  {email}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              elevation: 3,
              width: "100%",
              height: 50,
              marginTop: 20,
              borderRadius: 20,
            }}
          >
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Image
                style={{ width: 20, height: 20, marginLeft: 20, marginTop: 3 }}
                source={require("../assets/calender.png")}
              />
              <View style={styles.verticalLine} />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  marginLeft: 15,
                }}
              >
                June 10,2023
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              elevation: 3,
              width: "100%",
              height: 50,
              marginTop: 20,
              borderRadius: 20,
            }}
          >
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Image
                style={{ width: 20, height: 20, marginLeft: 20, marginTop: 3 }}
                source={require("../assets/time.png")}
              />
              <View style={styles.verticalLine} />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  marginLeft: 15,
                }}
              >
                12:00 AM - 2:30 PM
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              elevation: 3,
              width: "100%",
              height: 50,
              marginTop: 20,
              borderRadius: 20,
            }}
          >
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins",
                  color: "#8e8e8e",
                  marginLeft: 15,
                  marginTop: 2,
                }}
              >
                Age
              </Text>
              <View style={styles.verticalLine} />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  marginLeft: 15,
                }}
              >
                26-30
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              elevation: 3,
              width: "100%",
              height: 50,
              marginTop: 20,
              borderRadius: 20,
            }}
          >
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins",
                  color: "#8e8e8e",
                  marginLeft: 15,
                  marginTop: 2,
                }}
              >
                Purpose
              </Text>
              <View style={styles.verticalLine} />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  marginLeft: 15,
                }}
              >
                abc
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 20,
              backgroundColor: "#fff",
              elevation: 3,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 18,
                fontFamily: "Poppins",
                padding: 15,
              }}
            >
              Order Services
            </Text>
            <View style={styles.hr} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 14, fontFamily: "Poppins", color: "gray" }}
                >
                  Appointment
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  {" "}
                  ₹1000
                </Text>
                <View style={styles.statusCell}>
                  <Text style={styles.statusText}>Paid</Text>
                </View>
              </View>
            </View>

            {/* <View style={styles.hr} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 14, fontFamily: "Poppins", color: "gray" }}
                >
                  Blood Test
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins",
                    color: "#e08a44",
                    fontSize: 12,
                  }}
                >
                  55 min
                </Text>
              </View>

              <Text
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                {" "}
                ₹1000
              </Text>
            </View>
            <View style={styles.hr} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <View>
                <Text
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Total
                </Text>
              </View>

              <Text
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                {" "}
                ₹2000
              </Text>
            </View> */}
          </View>
          <TouchableOpacity
          //   onPress={()=>navigation.navigate('Otp')}
          >
            <View style={{ marginTop: 30 }}>
              <View
                style={{
                  width: "100%",
                  height: 50,
                  backgroundColor: "#e08a44",
                  flexDirection: "row",
                  alignItems: "center",
                  // padding: 20,
                  borderRadius: 10,
                  borderColor: "orange",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    padding: 4,
                    width: "100%",
                    height: 30,
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#fff",
                    alignItems: "center",
                  }}
                >
                  Cancel Appointment
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ShowAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
    fontFamily: "Poppins",
    // padding: 15,
  },
  hr: {
    position: "relative",
    width: "100%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    opacity: 0.1,
    marginTop: 3,
    // marginBottom: 10,
  },
  verticalLine: {
    height: 30,
    position: "relative",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    opacity: 0.2,
    borderLeftWidth: 1,
    marginLeft: 15,
  },
  statusCell: {
    flex: 1,
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 20,
    padding: 5,
    backgroundColor: "#c9eae0",
  },
  statusText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#50c793",
  },
});
