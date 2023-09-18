import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-elements";
import CarouselItem from "./CarouselItem";
import {
  useGetAllCourseQuery,
  useGetAppUserQuery,
  useGetAppointmentBannerQuery,
} from "../services/signUpApi";

const Home = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [courseData, setCourseData] = useState([]);
  const [appointmentData,setAppointmentData]=useState([]);
  const { data, isSuccess } = useGetAppUserQuery();


  // const localHost = "http://192.168.1.5:5000";
   const localHost='https://hira-yogi.onrender.com';
  useEffect(() => {
    if (data && isSuccess && data.data) {
      setName(data.data.name);
    }
  }, [data, isSuccess]);

  const { data: course, isSuccess: courseIsSuccess } = useGetAllCourseQuery();
  // console.log(course);

  useEffect(() => {
    if (course && courseIsSuccess && course.data) {
      setCourseData(course.data);
    }
  }, [course, courseIsSuccess]);

  const {data:appointment,isSuccess:appointmentIsSuccess}=useGetAppointmentBannerQuery();
  

  useEffect(() => {
    if (appointment && appointmentIsSuccess && appointment.data) {
      setAppointmentData(appointment?.data);
    }
  }, [appointment, appointmentIsSuccess]);

  // console.log(appointmentData);
  // console.log(course)

  const renderItem = ({ item }) => {
    const imageUrl = `${localHost}/courseFile/${item.courseImage_FileName}`;
// console.log("Image URL:", imageUrl);
    return (
      <View style={{ marginRight: 20 }}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={{ height: 135, width: 165, borderRadius: 20 }}
          resizeMode="cover"
          // onError={(error) => console.error("Image Load Error:", error)} 
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
    );
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View style={styles.container}>
          <View style={styles.tasksWrapper}>
            <View style={{ paddingTop: 5 }}>
              <Avatar
                rounded
                source={{
                  uri: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                }}
                size={43}
              />
            </View>
            <Text style={styles.sectionTitle}>Welcome, {name}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <View style={styles.Item}>
                <Image
                  style={styles.AddItem}
                  source={require("../assets/notification-icon.png")}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.searchArea}>
            <Image
              style={styles.icon}
              source={require("../assets/search-icon.png")}
            />
            <TextInput placeholder="Search" style={styles.input} />
            <Image
              style={styles.filter}
              source={require("../assets/filter.png")}
            />
          </View>
          <CarouselItem />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 15,
              margin: 5,
            }}
          >
            <Text style={{ paddingTop: 5, fontSize: 16, fontWeight: "bold" }}>
              Trending Course
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SeeAllCourses")}
            >
              <Text
                style={{
                  paddingTop: 5,
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#333787",
                }}
              >
                See All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          horizontal
          data={courseData}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
          contentContainerStyle={{ marginHorizontal: 20 }}
        />
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 15,
            margin: 5,
          }}
        >
          <Text style={{ paddingTop: 5, fontSize: 16, fontWeight: "bold" }}>
            Appointment
          </Text>
        </View>
        <TouchableOpacity
          style={{
            // padding:20,
            width: 345,
            height: 160,
            borderRadius: 20,
            alignItems: "center",
            backgroundColor: "#ffff",
            marginTop: 8,
            justifyContent:'center',
            marginLeft:20,
            marginBottom:10
          }}
          onPress={() => navigation.navigate("Appointment")}
        >
          <Image
            // source={{uri: `${localHost}/masterFile/${appointmentData.appointmentBanner_FileName}`}}
            source={require("../assets/appointment.png")}
            style={{ width: 345, height: 160, borderRadius: 20 }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  tasksWrapper: {
    paddingTop: 23,
    paddingHorizontal: 20,
    flexDirection: "row",
    width: 100,
    height: 75,
    // marginTop:23,
    // marginVertical:10,
    // justifyContent:'space-between',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    width: 200,
    margin: 10,
    fontFamily: "Poppins",
  },

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
  input: {
    paddingHorizontal: 10,
  },
  filter: {
    width: 15,
    height: 15,
    opacity: 0.4,
    marginLeft: 230,
    // backgroundColor: "transparent",
  },
  Item: {
    height: 75,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    // marginRight:20,
  },
  AddItem: {
    width: 25,
    height: 25,
    marginBottom: 20,
    justifyContent: "center",
    // marginHorizontal:18,
    marginLeft: 50,
    // margin
  },
});

export default Home;
