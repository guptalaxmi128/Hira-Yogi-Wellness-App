import React, { useState, useCallback, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import YoutubePlayer from 'react-native-youtube-iframe';

const YouTubePlayer = ( ) => {
    const param =useRoute().params;
   const [playing,setPlaying]=useState(false);
     
   useEffect(()=>{
  console.log("....",param)
   },[])

   const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    //   Alert.alert("video has finished playing!");
    }
  }, []);

  return (
    <YoutubePlayer
     height={160}
    play={playing}
     videoId={'8Nh9Oi1qQiY'}
     onChangeState={onStateChange}
      />
  );
};

export default YouTubePlayer;