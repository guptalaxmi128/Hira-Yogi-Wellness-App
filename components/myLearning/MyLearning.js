import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Header from '../Header';

const MyLearning = () => {
  return (
    <>
      <Header title={"My Learning"} icon={require("../../assets/back.png")} />
    <View style={styles.container}>
      <Image
        source={require('../../assets/course.jpeg')} 
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>No course purchased</Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  image: {
    width: 150, 
    height: 150, 
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default MyLearning;
