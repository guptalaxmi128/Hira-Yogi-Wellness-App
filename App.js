import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Login from "./components/Login";
import Otp from "./components/Otp";
import BottomTab from "./components/BottomTab";
import CameraPage from "./components/CameraPage";
import Course from "./components/Course";
import { store } from "./store/store";
import WebViewScreen from "./components/WebViewScreen";
import Appointment from "./components/Appointment";
import SplashScreen from "./components/SplashScreen";
import SignUp from "./components/SignUp";
import MyDetails from "./components/MyDetails";
import Notification from "./components/Notification";
import MyAppointment from "./components/myAppointment/MyAppointment";
import AllCourses from "./components/seeAllCourses/AllCourses";

const App = () => {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Otp"
            component={Otp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CameraPage"
            component={CameraPage}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="WebViewScreen"
            component={WebViewScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Courses"
            component={Course}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Appointment"
            component={Appointment}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyAppointment"
            component={MyAppointment}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MyDetails"
            component={MyDetails}
            options={{ headerShown: false }}
          />
            <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          />
            <Stack.Screen
            name="SeeAllCourses"
            component={AllCourses}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
