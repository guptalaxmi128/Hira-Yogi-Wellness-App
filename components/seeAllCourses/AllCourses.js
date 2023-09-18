import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity,StyleSheet,TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useGetAllCourseQuery } from "../../services/signUpApi";
import Header from "../Header";

const AllCourses = () => {
  const navigation = useNavigation();
  const [courseData, setCourseData] = useState([]);
  const [id, setId] = useState(null);
  // const localHost = "http://192.168.1.5:5000";
  const localHost='https://hira-yogi.onrender.com';

  const { data: course, isSuccess: courseIsSuccess } = useGetAllCourseQuery();
  // console.log(course)

  useEffect(() => {
    if (course && courseIsSuccess && course.data) {
      setCourseData(course.data);
    }
  }, [course, courseIsSuccess]);

  const handleCardPress = (id) => {
    setId(id);
    navigation.navigate("Courses", { id: id });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleCardPress(item.id)}>
        <View style={{ marginRight: 20 }}>
          <Image
            source={{
              uri: `${localHost}/courseFile/${item.courseImage_FileName}`,
            }}
            style={{ height: 135, width: 165, borderRadius: 20 }}
            resizeMode="cover"
          />
          <Text
            style={{
              fontSize: 14,
              paddingHorizontal: 10,
              width: 165,
              fontFamily: "Poppins",
              marginVertical: 5,
            }}
          >
            {item.courseName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header title={"Courses"} icon={require("../../assets/back.png")} />
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={styles.searchArea}>
            <Image
              style={styles.icon}
              source={require("../../assets/search-icon.png")}
            />
            <TextInput placeholder="Search" style={styles.input} />
            <Image
              style={styles.filter}
              source={require("../../assets/filter.png")}
            />
          </View>
        <FlatList
          data={courseData}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
          contentContainerStyle={{ margin: 20 }}
        />
      </View>
    </>
  );
};

export default AllCourses;

const styles = StyleSheet.create({


  searchArea: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    margin: 10,
    borderWidth: 0.2,
    marginLeft: 20,
    // paddingHorizontal: 20,
    borderRadius: 10,
  },
  icon: {
    width: 20,
    height: 20,
    opacity: 0.5,
    marginLeft: 10,
  },

  filter: {
    width: 15,
    height: 15,
    opacity: 0.4,
    marginLeft: 230,
    // backgroundColor: "transparent",
  },

 
});
