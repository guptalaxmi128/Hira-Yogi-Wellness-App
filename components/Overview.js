import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useGetCourseByIdQuery } from "../services/signUpApi";

const Overview = ({ courseId }) => {
  const [course, setCourse] = useState([]);
  const { data, isSuccess } = useGetCourseByIdQuery(courseId);
  // console.log(data);

  useEffect(() => {
    if (data && isSuccess && data.data) {
      setCourse(data.data);
    }
  }, [data, isSuccess]);
  return (
    <>
      {/* <ScrollView> */}
      <View style={styles.container}>
        <View style={{ marginTop: 5 }}>
          <Text
            style={{ fontFamily: "Poppins", fontSize: 16, textAlign: "left" }}
          >
            Course details
          </Text>
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 11,
              textAlign: "left",
              color: "gray",
            }}
          >
           {course.description} &nbsp;
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 12,
                color: "#E99548",
                fontWeight: "bold",
              }}
            >
              Learn more
            </Text>
          </Text>
        </View>
        {/* <View style={{ marginTop: 10, marginBottom: 10, flexDirection: "row" }}>
          <View
            style={{
              width: 110,
              height: 70,
              borderRadius: 25,
              backgroundColor: "#F3E6DA",
              marginRight: 10,
            }}
          ></View>
          <View
            style={{
              width: 110,
              height: 70,
              borderRadius: 25,
              backgroundColor: "#F3E6DA",
              marginRight: 10,
            }}
          ></View>
          <View
            style={{
              width: 110,
              height: 70,
              borderRadius: 25,
              backgroundColor: "#F3E6DA",
            }}
          ></View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              width: 110,
              height: 70,
              borderRadius: 25,
              backgroundColor: "#F3E6DA",
              marginRight: 10,
            }}
          ></View>
          <View
            style={{
              width: 110,
              height: 70,
              borderRadius: 25,
              backgroundColor: "#F3E6DA",
            }}
          ></View>
        </View> */}
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "left" }}>
            For
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: 'auto',
                height: 30,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "gray",
                padding:4
              }}
            >
              <Text style={styles.subText}>{course.topic}</Text>
            </View>
            {/* <View
              style={{
                width: 120,
                height: 25,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "gray",
              }}
            >
              <Text style={styles.subText}>Thyroid disease</Text>
            </View>

            <View
              style={{
                width: 100,
                height: 25,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "gray",
              }}
            >
              <Text style={styles.subText}>Diabetes insipidus</Text>
            </View> */}
          </View>
          {/* <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                width: 240,
                height: 25,
                borderRadius: 20,
                borderWidth: 1,
                marginTop: 10,
                borderColor: "gray",
              }}
            >
              <Text style={styles.subText}>
                Necrobiosis lipoidica diabeticorum
              </Text>
            </View>

            <View
              style={{
                width: 100,
                height: 25,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "gray",
                marginTop: 10,
              }}
            >
              <Text style={styles.subText}>Mastopathy</Text>
            </View>
          </View> */}
        </View>
        {/* <View
          style={{
            width: 220,
            height: 25,
            borderRadius: 20,
            borderWidth: 1,
            marginTop: 10,
            borderColor: "gray",
          }}
        >
          <Text style={styles.subText}>Polycystic ovary syndrome</Text>
        </View> */}
      </View>
      {/* </ScrollView> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  subText: {
    textAlign: "center",
    padding: 2,
    fontSize: 12,
    fontFamily: "Poppins",
    color: "gray",
  },
});

export default Overview;
