import React from 'react'
import { useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native'
import { Input, Button } from '@ui-kitten/components';
const LoginScreen = ({ navigation }) => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
    });
    const handleLogin = () => {
        navigation.navigate('home');
    };
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 50, }}>
                <Image
                    source={require('../assets/AdminLogo2.png')}
                    style={styles.logoStyle}

                />
                <Text style={styles.Text}>Login</Text>
            </View>
            <Input
                style={styles.inputStyle}
                placeholder="Email"
                size="large"
                value={loginInfo.email}
                onChangeText={val => {
                    setLoginInfo({ ...loginInfo, email: val });
                }}
            />
            <Input
                secureTextEntry={true}
                style={styles.inputStyle}
                placeholder="Password"
                size="large"
                value={loginInfo.password}
                onChangeText={val => {
                    setLoginInfo({ ...loginInfo, password: val });
                }}
            />
            <Button size="large" style={styles.loginBtn} onPress={handleLogin}>
                Sign in
            </Button>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ECF1FE',
        padding: 10,

    },
    loginBtn: {
        width: 200,
        borderRadius: 10,
        backgroundColor: '#0031F8',
        borderColor: '#0031F8',
    },
    inputStyle: {
        marginVertical: 15,
        borderColor: '#0031F8',
    },
    logoStyle: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: -30,
    },
    Text: {
        fontSize: 30,
        fontWeight: '600',
        color: 'black',
        //    alignContent: 'center'
        marginLeft: 50,

    }

});
export default LoginScreen