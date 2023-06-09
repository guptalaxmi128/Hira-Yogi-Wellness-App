import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

const data=[
  {
    id:1,
    title:'Introduction',
    lesson:'Lesson 1',
    heading:'View Class 4',
    date:'19 Jan 2023',
},
{
  id:2,
  title:'Introduction',
  lesson:'Lesson 4',
  heading:'Types of UI Design',
  date:'19 Jan 2023',
},
{
  id:3,
  title:'Introduction',
  lesson:'Lesson 4',
  heading:'Types of UI Design',
  date:'19 Jan 2023',
},
]
const Classes = () => {
  
  const [showContent, setShowContent] = useState(false);

  return (
    <>
     {/* <ScrollView> */}
      <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item,index})=>
        <View
          style={[
            styles.shadowContainerStyle,
            {
              width: 345,
              //   height: 100,
              backgroundColor: "#fff",
              borderRadius: 20,
              marginTop: 10,
              // marginLeft: 18,
              // marginRight: 18,
            
            },
          ]}
        >
          <TouchableOpacity onPress={() => setShowContent(!showContent)} >
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
                source={require("../assets/1.jpg")}
                resizeMode="cover"
              />
              <View
                style={{
                  marginRight: 110,
                  width: 120,
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
                  {item.title}
                </Text>
                <View
                  style={{
                    width: 65,
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
                    {item.lesson}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  marginTop: 10,
                  marginRight: 5,
                  alignItems: "center",
                  paddingRight: 5,
                  width: 30,
                }}
              >
                {showContent ? (
                  <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/arrow-down.png")}
                  />
                ) : (
                  <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/arrow-up.png")}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
          {showContent && (
            <View style={styles.body}>
            <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
              
                  <Image
                    style={{ width: 20, height: 20, marginRight: 12 }}
                    source={require("../assets/video-circle.png")}
                  />
                
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    {item.heading}
                  </Text>
                </View>
              
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
                
                <View style={{ width: 30,marginRight:10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  {item.date}
                </Text>
              </View>
              <View style={styles.hr} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
              
                  <Image
                    style={{ width: 20, height: 20, marginRight: 12 }}
                    source={require("../assets/video-circle.png")}
                  />
                
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    {item.heading}
                  </Text>
                </View>
              
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
                
                <View style={{ width: 30,marginRight:10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  {item.date}
                </Text>
              </View>
              <View style={styles.hr} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
              
                  <Image
                    style={{ width: 20, height: 20, marginRight: 12 }}
                    source={require("../assets/video-circle.png")}
                  />
                
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    {item.heading}
                  </Text>
                </View>
              
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
                
                <View style={{ width: 30, marginRight: 10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  {item.date}
                </Text>
              </View>
              <View style={styles.hr} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
               
                  <Image
                    style={{ width: 20, height: 20, marginRight: 12 }}
                    source={require("../assets/video-circle.png")}
                  />
                
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    {item.heading}
                  </Text>
                </View>
               
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
               
               
                <View style={{ width: 30, marginRight: 10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  {item.date}
                </Text>
              </View>
            </View>
          )}
        </View> 
        }
        />
        {/* second  */}
       
        {/* <View
          style={[
            styles.shadowContainerStyle,
            {
              width: 345,
              //   height: 100,
              backgroundColor: "#fff",
              borderRadius: 20,
              marginTop: 10,
              marginLeft: 18,
              marginRight: 18,
              //   flexDirection: "row",
              //   justifyContent: "space-between",
            },
          ]}
        >
          <TouchableOpacity onPress={() => setShowContent(!showContent)}>
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
                source={require("../assets/1.jpg")}
                resizeMode="cover"
              />
              <View
                style={{
                  marginRight: 110,
                  width: 120,
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
                  User Search
                </Text>
                <View
                  style={{
                    width: 65,
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
                    Lesson 2
                  </Text>
                </View>
              </View>

              <View
                style={{
                  marginTop: 10,
                  marginRight: 5,
                  alignItems: "center",
                  paddingRight: 5,
                  width: 30,
                }}
              >
                {showContent ? (
                  <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/arrow-down.png")}
                  />
                ) : (
                  <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/arrow-up.png")}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
          {showContent && (
            <View style={styles.body}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
              
                <Image
                  style={{ width: 20, height: 20, marginRight: 12 }}
                  source={require("../assets/video-circle.png")}
                />
              
               
              <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    View Class 4
                  </Text>
                </View>
             
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
                <View style={{ width: 30, marginRight:10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  19 Jan 2023
                </Text>
              </View>
              <View style={styles.hr} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
              
                  <Image
                    style={{ width: 20, height: 20, marginRight: 12 }}
                    source={require("../assets/video-circle.png")}
                  />
                
               
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    View Class 4
                  </Text>
                </View>
              
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
                
                <View style={{ width: 30,marginRight:10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  19 Jan 2023
                </Text>
              </View>
              <View style={styles.hr} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
              
                  <Image
                    style={{ width: 20, height: 20, marginRight: 12 }}
                    source={require("../assets/video-circle.png")}
                  />
                
                
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    View Class 4
                  </Text>
                </View>
              
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
                
                <View style={{ width: 30, marginRight: 10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  19 Jan 2023
                </Text>
              </View>
              <View style={styles.hr} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
               
                  <Image
                    style={{ width: 20, height: 20, marginRight: 12 }}
                    source={require("../assets/video-circle.png")}
                  />
                
              
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    View Class 4
                  </Text>
                </View>
               
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
               
               
                <View style={{ width: 30, marginRight: 10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  19 Jan 2023
                </Text>
              </View>
            </View>
          )}
        </View> */}
        {/* third */}
        {/* <View
          style={[
            styles.shadowContainerStyle,
            {
              width: 345,
              //   height: 100,
              backgroundColor: "#fff",
              borderRadius: 20,
              marginTop: 10,
              marginLeft: 18,
              marginRight: 18,
              //   flexDirection: "row",
              //   justifyContent: "space-between",
            },
          ]}
        >
          <TouchableOpacity onPress={() => setShowContent(!showContent)}>
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
                source={require("../assets/1.jpg")}
                resizeMode="cover"
              />
              <View
                style={{
                  marginRight: 110,
                  width: 120,
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
                  Wireframing
                </Text>
                <View
                  style={{
                    width: 65,
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
                    Lesson 3
                  </Text>
                </View>
              </View>

              <View
                style={{
                  marginTop: 10,
                  marginRight: 5,
                  alignItems: "center",
                  paddingRight: 5,
                  width: 30,
                }}
              >
                {showContent ? (
                  <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/arrow-down.png")}
                  />
                ) : (
                  <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/arrow-up.png")}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
          {showContent && (
            <View style={styles.body}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
              
                <Image
                  style={{ width: 20, height: 20, marginRight: 10 }}
                  source={require("../assets/video-circle.png")}
                />
              
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13}}>
                    Economy Survey & Budget Lecture
                  </Text>
                </View>
               
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
                  
                <View style={{ width: 30 ,marginRight:10}}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
               
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  19 Jan 2023
                </Text>
              </View>
             
              <View style={styles.hr} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
              
                  <Image
                    style={{ width: 20, height: 20, marginRight: 12 }}
                    source={require("../assets/video-circle.png")}
                  />
                
              
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    View Class 4
                  </Text>
                </View>
              
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
                
                <View style={{ width: 30,marginRight:10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  19 Jan 2023
                </Text>
              </View>
              <View style={styles.hr} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
              
                  <Image
                    style={{ width: 20, height: 20, marginRight: 12 }}
                    source={require("../assets/video-circle.png")}
                  />
                
               
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    View Class 4
                  </Text>
                </View>
              
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
                
                <View style={{ width: 30, marginRight: 10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  19 Jan 2023
                </Text>
              </View>
              <View style={styles.hr} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
               
                  <Image
                    style={{ width: 20, height: 20, marginRight: 12 }}
                    source={require("../assets/video-circle.png")}
                  />
                
               
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    View Class 4
                  </Text>
                </View>
               
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
               
               
                <View style={{ width: 30, marginRight: 10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  19 Jan 2023
                </Text>
              </View>
            </View>
          )}
        </View> */}
        {/* Fourth */}
        {/* <View
          style={[
            styles.shadowContainerStyle,
            {
              width: 345,
              //   height: 100,
              backgroundColor: "#fff",
              borderRadius: 20,
              marginTop: 10,
              marginLeft: 18,
              marginRight: 18,
              //   flexDirection: "row",
              //   justifyContent: "space-between",
            },
          ]}
        >
          <TouchableOpacity onPress={() => setShowContent(!showContent)}>
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
                source={require("../assets/1.jpg")}
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
                  Types of UI Design
                </Text>
                <View
                  style={{
                    width: 65,
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
                    Lesson 4
                  </Text>
                </View>
              </View>

              <View
                style={{
                  marginTop: 10,
                  marginRight: 5,
                  alignItems: "center",
                  paddingRight: 5,
                  width: 30,
                }}
              >
                {showContent ? (
                  <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/arrow-down.png")}
                  />
                ) : (
                  <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/arrow-up.png")}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
          {showContent && (
            <View style={styles.body}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
              
                <Image
                  style={{ width: 20, height: 20, marginRight: 12 }}
                  source={require("../assets/video-circle.png")}
                />
              
              <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    View Class 4
                  </Text>
                </View>
             
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
                <View style={{ width: 30, marginRight:10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  19 Jan 2023
                </Text>
              </View>
              <View style={styles.hr} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
              
                  <Image
                    style={{ width: 20, height: 20, marginRight: 12 }}
                    source={require("../assets/video-circle.png")}
                  />
                
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    View Class 4
                  </Text>
                </View>
              
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
                
                <View style={{ width: 30,marginRight:10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  19 Jan 2023
                </Text>
              </View>
              <View style={styles.hr} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
              
                  <Image
                    style={{ width: 20, height: 20, marginRight: 12 }}
                    source={require("../assets/video-circle.png")}
                  />
                
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    View Class 4
                  </Text>
                </View>
              
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
                
                <View style={{ width: 30, marginRight: 10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  19 Jan 2023
                </Text>
              </View>
              <View style={styles.hr} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 8,
                }}
              >
               
                  <Image
                    style={{ width: 20, height: 20, marginRight: 12 }}
                    source={require("../assets/video-circle.png")}
                  />
                
                <View style={{ width:120}}>
                  <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                    View Class 4
                  </Text>
                </View>
               
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/copy.png")}
                  />
               
               
                <View style={{ width: 30, marginRight: 10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/icons_navbar/arrow-down.png")}
                  />
                </View>
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  19 Jan 2023
                </Text>
              </View>
            </View>
          )}
        </View> */}
      </View>
      {/* </ScrollView> */}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
      // height:'100%',
    width: "100%",
    fontFamily: "Poppins",
    overflow: "hidden",
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
  hr: {
    position: "relative",
    // top: 1,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    opacity: 0.1,
    margin: 2,
  },
});

export default Classes;
