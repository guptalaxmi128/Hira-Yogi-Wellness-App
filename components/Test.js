import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
// import DocumentPicker from "react-native-document-picker";
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

// const datalist = [
//   {
//     id: 1,
//     name: "History",
//     url: "https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

//   },
//   {
//     id: 2,
//     name: "History",
//     url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",

//   },
//   {
//     id: 3,
//     name: "History",
//     url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

//   },
//   {
//     id: 4,
//     name: "History",
//     url: "https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

//   },
//   {
//     id: 5,
//     name: "History",
//     url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",

//   },
//   {
//     id: 6,
//     name: "History",
//     url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

//   },

//   {
//     id: 7,
//     name: "History",
//     url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

//   },
//   {
//     id: 8,
//     name: "History",
//     url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

//   },

// ];



  //   for document
  // const selectDoc = async () => {
  //   try {
  //     const doc = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.pdf],
  //     });
  //     console.log(doc);
  //   } catch (error) {
  //     if (DocumentPicker.isCancel(error))
  //       console.log("User is not selected", error);
  //     else console.log(error);
  //   }
  // };
const Test = ({ navigation, route }) => {
  // const { image } = route.params;
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);


 


  async function pickDocument() {
    let result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    });
    console.log(result);
    /*
    {
      type: 'success',
      uri: 'file:///path/to/document',
      name: 'document.pdf',
      size: 12345,
    }
    */
  }

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Select Subject
        </Text>
      );
    }
    return null;
  };

  return (
    
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select Subject" : "..."}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
        <TouchableOpacity onPress={pickDocument}  >
          <View
            style={{
              width: 175,
              borderWidth: 1,
              height: 50,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: '#e1e5f5',
              borderStyle:'dashed',
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                margin:5,
                
              }}
              source={require("../assets/frame1.png")}
            />
            <Text style={{ fontSize: 16, fontFamily: "Poppins", padding: 5 }}>
              Add Files
            </Text>
          </View>
          </TouchableOpacity>
          {/* <Button title="Add Files" onPress={selectDoc} /> */}
         <TouchableOpacity 
          onPress={()=>navigation.navigate('CameraPage')}
          >
          <View
            style={{
              width: 175,
              borderWidth: 1,
              height: 50,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255,0,0,0.5)",
              borderStyle:'dashed',
            }}
          >
            <Image
              style={{ width: 20, height: 20,margin:5}}
              source={require("../assets/camera.png")}
            />

            <Text style={{ fontSize: 16, fontFamily: "Poppins", padding: 5 }}>
              Take Photo
            </Text>
          </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Image
            style={{ width: 20, height: 20, margin: 10 }}
            source={require("../assets/chart.png")}
          />
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins",
              marginRight: 200,
              marginTop: 8,
            }}
          >
            {/* {image} */}
            History.pdf
          </Text>
          <Image
            style={{ width: 20, height: 20, margin: 10 }}
            source={require("../assets/trash.png")}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image
            style={{ width: 20, height: 20, margin: 10 }}
            source={require("../assets/chart.png")}
          />
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins",
              marginRight: 200,
              marginTop: 8,
            }}
          >
            History.pdf
          </Text>
          <Image
            style={{ width: 20, height: 20, margin: 10 }}
            source={require("../assets/trash.png")}
          />
        </View>
        <View style={{ backgroundColor: "#fff" }}>
          <View
            style={{
              width: 360,
              height: 50,
              backgroundColor: "#333787",
              flexDirection: "row",
              alignItems: "center",
              // padding: 20,
              borderRadius: 20,
              borderColor: "#333787",
              marginTop: 10,
              marginBottom:10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                padding: 4,
                width: "100%",
                height: 30,
                fontSize: 14,
                fontWeight: "bold",
                color: "#fff",
                alignItems: "center",
              }}
            >
              Submit
            </Text>
          </View>
        </View>
        <View
          style={{
            margin:15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{ fontSize: 16, fontWeight: "bold", fontFamily: "Poppins" }}
          >
            All Test Series
          </Text>
          <Image
            style={{ width: 20, height: 20}}
            source={require("../assets/align.png")}
          />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',margin:5,marginTop:30}}>
        <View style={{borderWidth:1,width:170,height:45,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontFamily:'Poppins',fontSize:16}}>History</Text>
        </View>
        <View style={{borderWidth:1,width:170,height:45,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontFamily:'Poppins',fontSize:16}}>Geography</Text>
        </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
        <View style={{borderWidth:1,width:170,height:45,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontFamily:'Poppins',fontSize:16}}>Science & Tech</Text>
        </View>
        <View style={{borderWidth:1,width:170,height:45,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontFamily:'Poppins',fontSize:16}}>All Files</Text>
        </View>
        </View>

        {/* <FlatList
        vertical
        data={datalist}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
            return (
              
    <View
          style={[
            styles.shadowContainerStyle,
            {
              width: 360,
                height: 50,
              backgroundColor: '#fff',
              borderRadius: 12,
              marginTop: 10,
              // marginLeft: 18,
              // marginRight: 18,
                flexDirection: "row",
                justifyContent: "space-between",
            },
          ]}
        >
             <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "pink",
                margin:10,
                borderRadius: 8,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Image
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  borderWidth: 0.4,
                  // borderColor: "#2A3C79",
                }}
                // source={require("../assets/1.jpg")}
                source={{uri:item.url}}
                resizeMode="cover"
              />
              <View
                style={{
                  marginRight: 30,
                  width: 200,
                  paddingLeft: 10,
                  paddingTop: 2,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    // marginBottom: 3,
                  }}
                >
                  {item.name}
                </Text>
              
              </View>

              <View
                style={{
                  // marginTop: 15,
                  marginLeft: 40,
                  alignItems: "center",
                  // paddingRight: 5,
                  width: 30,
                }}
              >
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/profile_icons/arrow-right.png")}
                  />
              </View>
            </View>
        </View>);
        }}
        /> */}
      </View>
    
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height:'100%',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "#fff",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
 
});
