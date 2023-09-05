import React from "react";
import { StyleSheet, View, Text, ImageBackground, Pressable } from "react-native";

function Home({ navigation }) {

    return (
        < >
            <ImageBackground source={require("../Assets/leaves.jpg")} style={styles.img}></ImageBackground>
            <View style={{ marginHorizontal: 40, marginVertical: 100 }}>

                <Text style={styles.wlc}>Let's Get</Text>
                <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}>Started !!</Text>

                <Pressable
                    onPress={() => { navigation.navigate('Login') }}
                    style={styles.login} >
                    <Text style={styles.logintext}>Login</Text>
                </Pressable>

                <Pressable
                    onPress={() => { navigation.navigate('Signup') }}
                    style={styles.signup} >
                    <Text style={styles.signuptext}>Signup</Text>
                </Pressable>

            </View >
        </ >
    )
}

const styles = StyleSheet.create({
    wlc: {
        color: 'white',
        fontSize: 64
    },
    img: {
        width: '100%',
        height: '100%',
        position: "absolute"
    },
    logintext: { color: 'white', fontSize: 25, fontWeight: 'bold' },
    login: {
        backgroundColor: '#006A42',
        borderRadius: 100,
        alignItems: 'center',
        width: 300,
        paddingVertical: 5,
        marginVertical: 10,

    },
    signuptext: { color: '#006A42', fontSize: 25, fontWeight: 'bold' },
    signup: {
        backgroundColor: 'white',
        borderRadius: 100,
        alignItems: 'center',
        width: 300,
        paddingVertical: 5,
        marginVertical: 10,

    }
});

export default Home;

