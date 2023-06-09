import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  option3,
  onSelectSwitch,
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };
  return (
    <View style={{
        height:30,
        width:'100%',
        // backgroundColor:'pink',
        borderRadius:20,
        borderColor:'#AD40AF',
        flexDirection:'row',
        justifyContent:'center',
    }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 1 ? "#e1e5f5" : "white",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 13,
            color: getSelectionMode == 1 ? "#333787" : "gray",
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 2 ?"#e1e5f5" : "white",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 13,
            color: getSelectionMode == 2 ? "#333787" : "gray",
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(3)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 3 ? "#e1e5f5" : "white",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 13,
            color: getSelectionMode == 3 ? "#333787" : "gray",
          }}
        >
          {option3}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// const styles = StyleSheet.create({
//   tabName: {
//     backgroundColor: "#e1e5f5",
//     width: '100%',
//     //   borderRadius: 20,
//     height: 30,
//     // borderColor: "#e1e5f5",
//     //   textAlign: "center",
//     //   padding: 5,
//     //   margin: 6,
//     //   flex: 1,
//     //   color: "#333787",
//     flexDirection:'row',
//   },
// });
