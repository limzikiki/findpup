import { StyleSheet } from 'react-native';

import React, { useRef, useState, useEffect } from 'react';
import { Text, View } from '@/components/Themed';
import MyPetsCard from '@/components/MyPetsCard';
import {Image} from 'react-native-ui-lib';

export default function TabOneScreen() {
  // const videoRef = useRef<VideoView>(null);
  // const videoSource = "https://videos.pexels.com/video-files/20600550/20600550-uhd_3840_2160_30fps.mp4"
  // const videoPlayer = useVideoPlayer(videoSource, (player: VideoPlayer)=>{
  //   player.volume=0
  //   player.loop = true
  //   player.play();
  // })

  // const [isPlaying, setIsPlaying] = useState(true);

  // // iDK how and why, but it makes the video play on page enter
  // useEffect(() => {
  //   const subscription = videoPlayer.addListener('playingChange', (isPlaying) => {
  //     setIsPlaying(isPlaying);
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, [videoPlayer]);

  return (
    <View style={styles.container}>
      <Text text20 center>
        My Pets
      </Text>
      <View style={styles.contentContainer}>
        <View padding-10 style={styles.myPets}>
          <MyPetsCard 
            imageSource="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            title="Mr Jeff" 
            specie="Dog" 
            subtitle='Pug' 
            />
          <MyPetsCard 
            imageSource="https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            title="Mrs Jannet" 
            specie="Cat" 
            subtitle='No Breed'
            />
        </View>
        <Image 
          source={{uri: 'https://images.pexels.com/photos/5760878/pexels-photo-5760878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
          style={{width: '100%'}}
          cover
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  contentContainer: {
    paddingTop: 15,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  myPets: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    gap: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
