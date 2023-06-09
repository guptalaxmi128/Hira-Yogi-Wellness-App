import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { StyleSheet, Text, View, Dimensions, Image,FlatList } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width+30 ;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    name: "Slide 1",
    url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=628&q=80",
  },
  {
    id: 2,
    name: "Slide 2",
    url: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 3,
    name: "Slide 3",
    url: "https://images.unsplash.com/photo-1588581939864-064d42ace7cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];


const datalist = [
  {
    id: 1,
    name: "Design",
    url: "https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    bgColor: "#fff6e5",
  },
  {
    id: 2,
    name: "Code",
    url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    bgColor: "#feeaeb",
  },
  {
    id: 3,
    name: "Business",
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    bgColor: "#ffffcc",
  },
  {
    id: 4,
    name: "Photos",
    url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    bgColor: "#defff6",
  },
  {
    id: 5,
    name: "Marketing",
    url: "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    bgColor: "#ffffcc",
  },
];

const renderItem = ({ item }) => {
  return (
    <View
      style={{
        // padding:20,
        width:345,
        height:160,
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: "#ffff",
        marginTop:8,
        marginRight:25,
      
      }}
    >
    <View >
      <Image
        source={{ uri: item.url }}
        style={{ width: 345, height: 160,borderRadius:20 }}
        resizeMode='cover'
      />
      {/* <Text>Hii</Text> */}
      </View>
    </View>
  );
};

const CarouselItem = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <>
    <View style={{ paddingTop: 2, alignItems: "center" }}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        sliderHeight={160}
        itemWidth={ITEM_WIDTH}
        itemHeight={160}
        onSnapToItem={(index) => setIndex(index)}
        loop={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        containerStyle={{paddingVertical:6}}
        carouselRef={isCarousel}
        dotContainerStyle={{marginVertical:0,marginHorizontal:0}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          // marginHorizontal: 1,
          backgroundColor: "#333787",
        }}
        activeDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          // marginHorizontal: 1,
          backgroundColor: "#333787",
        }}
      />
    </View>
      <View style={{ margin: 10 }}>
      <FlatList
        horizontal
        data={datalist}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: item.bgColor,
                borderRadius: 20,
                marginLeft: 10,
                // margin:10,
                // paddingTop: 20,
              }}
            >
              <Image style={styles.ItemList} source={{ uri: item.url }} />
              <Text style={{ fontSize: 14,fontFamily:'Poppins' }}>
                {item.name}
              </Text>
            </View>
          
          );
        }}
      />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  ItemList: {
    backgroundColor: "#f5f520",
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
  },
});


export default CarouselItem;


