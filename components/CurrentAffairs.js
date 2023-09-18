import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TextInput,
    FlatList,
  } from "react-native";
  import Header from './Header';


  const datalist = [
    {
      id: 1,
      name: "Basic What is PHP?",
      url: "https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      bgColor: "#fff6e5",
      time:'1 hours, 20 min',
    
    },
    {
      id: 2,
      name: "Story Of my life",
      url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      bgColor: "#feeaeb",
      time:'1 hours,20 min',
    },
    {
      id: 3,
      name: "How to win PES",
      url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      bgColor: "#ffffcc",
      time:'2 hours, 45 min',
    },
 
  ];

const CurrentAffairs = () => {
    return (<>
    <View style={styles.container}>
    <Header title={"My Learning"} icon={require("../assets/back.png")} />
     {/* <View style={styles.searchArea}>
        <Image
          style={styles.icon}
          source={require("../assets/search-icon.png")}
        />
        <TextInput placeholder="Search" style={styles.input} />
        <Image style={styles.filter} source={require("../assets/filter.png")} />
      </View>
      <View
      style={{
        // padding:20,
        width:345,
        height:160,
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: "#ffff",
        marginTop:10,
        marginRight:20,
        marginLeft:20,
      
      }}
    >
    
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }}
        style={{ width: 345, height: 160,borderRadius:20 }}
        resizeMode='cover'
      />
    </View>
    <View style={{margin:20}}><Text style={{fontSize:24,fontWeight:'500',fontFamily:'Poppins'}}>Last seen courses</Text></View>
    <FlatList
        vertical
        data={datalist}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
            return (
    <View
          style={[
            // styles.shadowContainerStyle,
            {
              width: 345,
              //   height: 100,
              backgroundColor: item.bgColor,
              borderRadius: 20,
              marginTop: 10,
              marginLeft: 18,
              marginRight: 18,
              //   flexDirection: "row",
              //   justifyContent: "space-between",
            },
          ]}
        >
             <View
              style={{
                width: 65,
                height: 65,
                backgroundColor: "pink",
                marginTop: 10,
                marginRight:10,
                marginLeft:10,
                marginBottom:6,
                borderRadius: 15,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Image
                style={{
                  width: 65,
                  height: 65,
                  borderRadius: 15,
                  borderWidth: 0.4,
                  borderColor: "#2A3C79",
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
                  paddingTop: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "100",
                    fontFamily: "Poppins",
                    marginBottom: 1,
                  }}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    width: 85,
                    height: 15,
                    borderRadius: 25,
                    backgroundColor: "#e1e5f5",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      // fontWeight: "bold",
                      // textAlign: "center",
                      alignItems: "center",
                      color: "#2A3C79",
                      // padding: 2,
                      fontFamily: "Poppins",
                    }}
                  >
                    {item.time}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  marginTop: 15,
                  marginRight: 5,
                  alignItems: "center",
                  paddingRight: 5,
                  width: 30,
                }}
              >
                  <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/profile_icons/arrow-right.png")}
                  />
              </View>
            </View>
        </View>);
        }}
        /> */}
     
      </View>
     
    </>);
}

const styles = StyleSheet.create({
    container:{
  backgroundColor:"#ffffff",
  flex:1,
//   alignItems:'center',
    },
 
    searchArea: {
      width: "90%",
      flexDirection: "row",
      alignItems: "center",
      height: 40,
      margin: 10,
      borderWidth: 0.2,
      marginLeft: 20,
      marginRight:20,
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
    shadowContainerStyle: {
        // borderWidth: 1,
        borderRadius: 20,
        // borderColor: "#333787",
        borderBottomWidth: 0,
        shadowColor: "#333787",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 10,
        shadowRadius: 5,
        elevation: 10,
      },
      body: {
        paddingHorizontal: "2%",
        paddingVertical: "3%",
      },
    
  });

export default CurrentAffairs;