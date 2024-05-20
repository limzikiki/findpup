import { Pressable, StyleSheet } from 'react-native';
import { Picker, PickerValue, Slider, Button } from 'react-native-ui-lib';
import { } from 'react-native-ui-lib';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';
import { Link, router } from 'expo-router';

export default function TabTwoScreen() {
  const [selectedBreed, setSelectedBreed] = useState<string>("");

  const handleBreedChange = (value: PickerValue) => {
    setSelectedBreed(typeof value === 'string' ? value : '');
  };

  const [selectedGender, setSelectedGender] = useState<string>("");

  const handleGenderChange = (value: PickerValue) => {
    setSelectedGender(typeof value === 'string' ? value : '');
  };

  const [selectedAge, setSelectedAge] = useState<string>("");
  const handleAgeChange = (value: PickerValue) => {
    setSelectedAge(typeof value === 'string' ? value : '');
  };

  return (
    <View style={styles.container} padding-10>
      <Text text30 marginB-20 center>
        Search for a pet
      </Text>
      <Text text70 marginB-5>
        Select a breed
      </Text>
      <Picker
        placeholder='Breed'
        value={selectedBreed}
        onChange={handleBreedChange}
        text80
        marginB-5
        blue10
      >
        <Picker.Item label='Bulldog' value='bulldog' />
        <Picker.Item label='Poodle' value='poodle' />
        <Picker.Item label='Labrador' value='labrador' />
        <Picker.Item label='Pitbull' value='pitbull' />
        <Picker.Item label='Pug' value='pug' />
      </Picker>
      <Text text70 marginB-5>
        Select a gender
      </Text>
      <Picker
        placeholder='Gender'
        value={selectedGender}
        onChange={handleGenderChange}
        text80
        marginB-5
        blue10

      >
        <Picker.Item label="Male" value='male' />
        <Picker.Item label='Female' value="female" />
      </Picker>
      <Text text70 marginB-5>
        Select an age
      </Text>
      <Picker
        placeholder='Age'
        value={selectedAge}
        onChange={handleAgeChange}
        text80
        marginB-5
        blue10
      >
        <Picker.Item label='Puppy' value='puppy' />
        <Picker.Item label='Adult' value='adult' />
        <Picker.Item label='Senior' value='senior' />
      </Picker>
      <View style={styles.pricePicker}>
        <Text>
          Price Range
        </Text>
        <View style={styles.pricePickerLabelsContainer}>
          <Text text100>0 EUR</Text>
          <Text text100>100 000 EUR</Text>
        </View>
        <Slider
          style={{ height: 40 }}
          minimumValue={0}
          step={1000}
          maximumValue={100000}
        />
      </View>
      <Button label="Search" onPress={()=>{router.push("./result")}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pricePicker: {
    flex: 1,
    alignItems: "stretch",
  },
  pricePickerLabelsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
