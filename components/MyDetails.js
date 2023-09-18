import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Modal,
  Alert,
} from "react-native";
import { Avatar } from "react-native-elements";
// import * as ImagePicker from "expo-image-picker";
import Header from "./Header";
import { useGetAppUserQuery } from "../services/signUpApi";


const MyDetails = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [id, setId] = useState("");

  // const localHost = "http://192.168.1.4:5000";
  const localHost="https://global-education-t.onrender.com"

 
//   const [addDonarProfileImage] = useAddDonarProfileImageMutation();
//   const [updateDonarImage] = useUpdateDonarImageMutation();
//   const { data: profileData, isSuccess: profileIsSuccess } =
//     useGetDonarProfileImageQuery();
  // console.log("image", profileData);

//   useEffect(() => {
//     if (profileData && profileIsSuccess && profileData.data) {
//       const firstProfileImage = profileData.data.profileImage_FileName;
//       const id = profileData.data.id;
//       if (firstProfileImage) {
//         setProfileImage(firstProfileImage);
//         setId(id);
//       }
//     }
//   }, [profileData, profileIsSuccess]);
//   console.log(profileImage)

const { data,isSuccess}=useGetAppUserQuery();

  useEffect(() => {
    if (data && isSuccess && data.data) {
      setName(data.data.name);
      setEmail(data.data.email);
      setMobileNumber(data.data.phoneNumber);
    }
  }, [data, isSuccess]);

 

//   useEffect(() => {
//     (async () => {
//       const { status } =
//         await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== "granted") {
//         console.log("Permission to access media library was denied.");
//       }
//     })();
//   }, []);

//   const handleProfileChange = async (id) => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       try {
//         const formData = new FormData();
//         formData.append("donarProfileImage", {
//           uri: result.assets[0].uri,
//           type: "image/jpeg",
//           name: "profile_image.jpg",
//         });
//         // formData.append("id", userId);

//         let response;
//         let isUpdate = false;

//         if (profileImage) {
//           response = await updateDonarImage({formData,id});
//           isUpdate = true;
//         } else {
//           response = await addDonarProfileImage(formData);
//         }

//         if (response && response.data && response.data.success) {
//           const message = isUpdate
//             ? response.data.message
//             : response.data.message;
//          console.log(message);
//           Alert.alert(message);
//           setProfileImage(Date.now());

        
//         } else {
//           console.log("Failed to update profile image.");
//         }
//       } catch (error) {
//         console.log(error);
//         console.log("An error occurred while updating profile image.");
//       }
//     }
//   };

  return (
    <>
    <Header title={"My Details"} icon={require("../assets/back.png")} />
      <ScrollView style={{backgroundColor:'#fff'}}>
        <View style={styles.container}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              position: "relative",
            }}
          >
            <Avatar
              rounded
            //   source={{ uri: `${localHost}/donarProfile/${profileImage}` }}
              source={{
                uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
              }}
              size={100}
            />
            <TouchableOpacity
            //   onPress={()=>handleProfileChange(id)}
              style={styles.imageContainer}
            >
              <View>
                <Image
                  source={require("../assets/profile-icon/camera.png")}
                  style={styles.icon}
                />
              </View>
            </TouchableOpacity>
          </View>
          {/* {donarData && donarData.address ? ( */}
            <>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Name"
                value={name}
              />
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Email"
                value={email}
              />
           
              <Text style={styles.label}>Mobile Number</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Mobile Number"
                value={mobileNumber}
              />
            </>
          {/* ) : (
            <>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Name"
                value={name}
                onChangeText={(text) => setName(text)}
              />
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Email"
                value={email}
                editable={false}
              />
              <Text style={styles.label}>Address</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Address"
                value={address}
                onChangeText={(text) => setAddress(text)}
              />
              <Text style={styles.label}>Mobile Number</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                editable={false}
              />

              <View
                style={{
                  width: "100%",
                  marginTop: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <CustomButton name="Save Changes" onPress={handleSubmit} />
              </View>
            </>
          )} */}
        </View>
      </ScrollView>
    </>
  );
};

export default MyDetails;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 10,
    color: "#000",
    fontFamily: "Poppins",
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    height: 50,
    borderColor: "#8e8e8e",
    fontSize: 16,
    padding: 12,
    fontFamily: "Poppins",
  },
  dropDownSelector: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#8e8e8e",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: "#8e8e8e",
  },
  dropDownArea: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
    alignSelf: "center",
    marginTop: 10,
  },
  typeItems: {
    width: "90%",
    height: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: "#8e8e8e",
    alignSelf: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 44,
    height: 44,
    borderRadius: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
    position: "absolute",
    right: 132,
    top: 55,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
