import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image } from "react-native";
import TestIcon from "../assets/icons_navbar/test_icon.png";
import TestActiveIcon from "../assets/icons_navbar/test_active.png";
import HomeIcon from "../assets/icons_navbar/home_icon.png";
import HomeActiveIcon from "../assets/icons_navbar/home_active.png";
import UserIcon from "../assets/icons_navbar/user_icon.png";
import UserActiveIcon from "../assets/icons_navbar/user_active.png";
import CourseActiveIcon from "../assets/icons_navbar/course_active.png";
import CourseIcon from "../assets/icons_navbar/course_icon.png";
import AffairsActiveIcon from "../assets/icons_navbar/affairs_active.png";
import AffairsIcon from "../assets/icons_navbar/affairs_icon.png";
import Home from "./Home";
import Profile from "./Profile";
import CurrentAffairs from "./CurrentAffairs";
// import Course from "./Course";
import Appointment from "./Appointment";
import AllCourses from "./seeAllCourses/AllCourses";
import MyLearning from "./myLearning/MyLearning";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#e08a44",
          tabBarStyle: {
            height: 55,
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            elevation: 10,
            backgroundColor: "#ffffff",
          },
        }}
      >
        <Tab.Screen
          name={"Home"}
          component={Home}
          options={{
            headerShown: false,
            tabBarLabelStyle: { marginTop: 18 },
            tabBarLabel: "Home",

            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? HomeActiveIcon : HomeIcon}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 18,
                  // marginRight:25,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Course"
          component={AllCourses}
          options={{
            title: "Course",
            headerShown: false,
            tabBarLabelStyle: { marginTop: 18 },
            tabBarLabel: "Course",
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? CourseActiveIcon : CourseIcon}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 18,
                  // marginRight:25,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Test Series"
          component={MyLearning}
          options={{
            headerShown: false,
            tabBarLabelStyle: { marginTop: 18 },
            tabBarLabel: "My Learning",
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? TestActiveIcon : TestIcon}
                style={{
                  width: 15,
                  height: 20,
                  marginTop: 18,
                  // marginRight:25,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Affairs"
          component={Appointment}
          options={{
            headerShown: false,
            tabBarLabelStyle: { marginTop: 18 },
            tabBarLabel: "Appointment",
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? AffairsActiveIcon : AffairsIcon}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 18,
                  // marginRight:25,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarLabelStyle: { marginTop: 20 },
            tabBarLabel: "Profile",
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? UserActiveIcon : UserIcon}
                style={{
                  width: 20,
                  height: 23,
                  marginTop: 20,
                  // marginRight:25,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTab;
