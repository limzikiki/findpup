import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, TextField, Button } from 'react-native-ui-lib';
import { Text } from "react-native-ui-lib";
import {router} from 'expo-router';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        router.replace('/(tabs)');
    };

    return (
        <View style={styles.container} paddingH-30>
            <Text text20BO center>Hello!</Text>
            <Text text60>Please Login to access the app</Text>
            <TextField text70
                placeholder="Email"
                floatingPlaceholder
                value={email}
                onChangeText={setEmail}
                style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }}
            />
            <TextField text70
                placeholder="Password"
                floatingPlaceholder
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }}
            />
            <Button label="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default LoginScreen;