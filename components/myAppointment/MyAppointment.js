import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomSwitch from "../CustomSwitch";
import Header from "../Header";
import ShowAppointment from "../ShowAppointment";

const MyAppointment = () => {
  const [courseTab, setCourseTab] = useState(1);

  const onSelectSwitch = (value) => {
    setCourseTab(value);
  };

  return (
    <>
      <Header title={"My Appointment"} icon={require("../../assets/back.png")} />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ marginVertical: 5 }}>
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
                  marginBottom: 5,
                },
              ]}
            >
              <CustomSwitch
                selectionMode={1}
                option1="Upcoming"
                option2="History"
                onSelectSwitch={onSelectSwitch}
              />
            </View>
            {courseTab == 1 && <ShowAppointment />}
            {courseTab == 2 && <Text>History</Text>}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  shadowContainerStyle: {
    borderRadius: 20,
    borderBottomWidth: 0,
    shadowColor: "#333787",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
  },
  backgroundVideo: {
    borderRadius: 20,
  },
});

export default MyAppointment;
