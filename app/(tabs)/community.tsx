import { StyleSheet, ImageBackground } from 'react-native';

import {router} from 'expo-router';
import { Text, View } from '@/components/Themed';
import { Button } from 'react-native-ui-lib';
import { FontAwesome } from '@expo/vector-icons';
import MyPetsCard from '@/components/MyPetsCard';

export default function TabTwoScreen() {
  return (
    <View style={styles.container} padding-10>
      <View style={{...styles.bordered,...styles.videoContainer}}>
        <ImageBackground
          source={{uri: 'https://images.pexels.com/photos/1633522/pexels-photo-1633522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
          style={styles.imageBackground}
        >
          <FontAwesome name="play-circle" size={40} color="white" style={styles.playButton} />
        </ImageBackground>
        <Text marginH-5 marginT-5 text60 numberOfLines={1}>How to teach dog to bring a stick</Text>
        <Text marginH-5 marginB-5>7 min 10 sec</Text>
      </View>
      <View style={{...styles.bordered}} padding-5>
        <Text text70BL>Best food for elderly dogs</Text>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti eaque deleniti autem vel unde saepe eligendi inventore illo, odit quibusdam doloribus ipsa consequuntur, minima accusantium! Officiis assumenda soluta illo.</Text>
      </View>
      <MyPetsCard 
        imageSource={"https://images.pexels.com/photos/5731842/pexels-photo-5731842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
        title={'Dog Competition'}
        specie={'May 30, 2024'}
        onPress={() => {router.push("dog-comptetion")}}
      /> 
      <Button label="Load More" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    gap: 10,
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
  videoContainer:{
    flex: 1,
    alignItems: "stretch",
    
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  playButton: {
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
    transform: [{ translateY: -20 }],
  },
  bordered:{
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  }
});
