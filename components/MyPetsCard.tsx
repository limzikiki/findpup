import React from 'react';
import { View, Text, Image, Colors, TouchableOpacity } from 'react-native-ui-lib';
import { Pressable } from 'react-native';

import { StyleSheet } from 'react-native';


interface MyPetsCardProps {
    imageSource: string;
    title: string;
    subtitle?: string;
    specie: string;
    onPress?: () => void;
}

const MyPetsCard: React.FC<MyPetsCardProps> = ({ imageSource, title, subtitle, specie, onPress }) => {
    return (
        <TouchableOpacity  onPress={onPress} disabled={!(!!onPress ?? false)}>
            <View style={Styles.container}>
                <Image
                    source={imageSource}
                    style={{ width: 80, height: 80, marginRight: 10 }}
                />
                <View margin-10>
                    <Text style={{ fontSize: 16, fontWeight:"bold" }}>{title}</Text>
                    <Text style={{ fontSize: 14, color: 'gray' }}>{specie}</Text>
                    {
                    /* If the subtitle is not provided, it will not be rendered */
                    subtitle && <Text style={{ fontSize: 14, color: 'gray' }}>{subtitle}</Text>
                    }
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MyPetsCard;

// Styles of the card
const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'lightgray',
        alignSelf: 'stretch',
        borderWidth: 1,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: 'white',
    },
})