import MyPetsCard from '@/components/MyPetsCard';
import React from 'react';
import { View, Text } from 'react-native-ui-lib';

import { StyleSheet } from 'react-native';

export default () => {
    return (
        <View style={styles.container} padding-10>
            <MyPetsCard
                imageSource="https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="King Charles"
                specie="Cat"
                subtitle='75 year old'
                onPress={() => {}}/>
            <MyPetsCard
                imageSource="https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="Lolly"
                specie="Bulldog"
                subtitle='2 year old'
                onPress={() => {}}/>
            <MyPetsCard
                imageSource="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="Nemo"
                specie="Labrador"
                subtitle='5 month old'
                onPress={() => {}}/>
            <MyPetsCard
                imageSource="https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="Mitachondria"
                specie="Hasky"
                subtitle='1 year old'
                onPress={() => {}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        gap: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});