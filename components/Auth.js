import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Otp from './Otp';
import BottomTab from './BottomTab';
import CameraPage from './CameraPage';
import Course from './Course';
import Test from './Test';
import WebViewScreen from './WebViewScreen';
import YouTubePlayer from './YouTubePlayer';


// const Stack = createNativeStackNavigator();

const Stack = createStackNavigator();
  function Auth (props)  {
    return (

      <Stack.Navigator
    // screenOptions={{headerShown:false}}
    >
     <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
     <Stack.Screen name="Otp" component={Otp} options={{headerShown:false}}  />
     <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown:false}}  />
     <Stack.Screen name="CameraPage" component={CameraPage}  options={{headerShown:false}} />
     {/* <Stack.Screen name="Tests" component={Test}  options={{headerShown:false}} /> */}
    <Stack.Screen name="WebViewScreen" component={WebViewScreen } options={{headerShown:false}} />
    {/* <Stack.Screen name="playVideo" component={YouTubePlayer } options={{headerShown:false}} /> */}
    <Stack.Screen name="Courses" component={Course } options={{headerShown:false}} />

     </Stack.Navigator>

    );
}


export default Auth;