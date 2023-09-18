import React, { useState, useRef,useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { StyleSheet, Text, View, Dimensions, Image,FlatList } from "react-native";
import { useGetBannerQuery, useGetCategoryQuery } from "../services/signUpApi";

export const SLIDER_WIDTH = Dimensions.get("window").width+30 ;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

//  const localHost = "http://192.168.1.5:5000";
const localHost='https://hira-yogi.onrender.com'

const colors = ["#ffffcc", "#defff6", "#ffffcc", "#feeaeb", "#fff6e5"];
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
        source={{ uri: `${localHost}/masterFile/${item.banner_FileName}` }}
        style={{ width: 345, height: 160,borderRadius:20 }}
        resizeMode='cover'
      />
     
      </View>
    </View>
  );
};

const CarouselItem = () => {
  const [index, setIndex] = useState(0);
  const [categoryData,setCategoryData]=useState([]);
  const [banner,setBanner]=useState([]);
  const isCarousel = useRef(null);


  const {data:category,isSuccess:categoryIsSuccess} = useGetCategoryQuery();
  // console.log(category)

  const {data,isSuccess}=useGetBannerQuery();


  useEffect(() => {
    if (data && isSuccess && data.data) {
     setBanner(data.data);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (category && categoryIsSuccess && category.data) {
     setCategoryData(category.data)
    }
  }, [category,categoryIsSuccess]);
  return (
    <>
    <View style={{ paddingTop: 2, alignItems: "center" }}>
      <Carousel
        ref={isCarousel}
        data={banner}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        sliderHeight={160}
        itemWidth={ITEM_WIDTH}
        itemHeight={160}
        onSnapToItem={(index) => setIndex(index)}
        loop={true}
      />
      <Pagination
        dotsLength={banner.length}
        activeDotIndex={index}
        containerStyle={{paddingVertical:6}}
        carouselRef={isCarousel}
        dotContainerStyle={{marginVertical:0,marginHorizontal:0}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: "#333787",
        }}
        activeDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: "#333787",
        }}
      />
    </View>
      <View style={{ margin: 10 }}>
      <FlatList
        horizontal
        data={categoryData}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const bgColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <View
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: bgColor,
                borderRadius: 20,
                marginLeft: 10,
              }}
            >
              <Image style={styles.ItemList} source={{ uri: `${localHost}/masterFile/${item.categoryThumbnail_FileName}` }} />
              <Text style={{ fontSize: 14,fontFamily:'Poppins' }}>
                {item.category}
               
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
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
  },
});


export default CarouselItem;


