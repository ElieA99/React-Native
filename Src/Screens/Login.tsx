import React from 'react'
import { Alert, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

function Login({ navigation }) {
    return (
        <>
            <ImageBackground source={require("../Assets/leaves.jpg")} style={styles.img}></ImageBackground>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.text}>LOGIN</Text>
            </View>

            <View style={styles.bg}>

                <Text style={{ fontSize: 40, color: '#006A42', fontWeight: 'bold' }}>Welcome Back</Text>
                <Text style={styles.txt2}>Login to your account</Text>

                <TextInput style={styles.input} placeholder="Email" inputMode='email'></TextInput>
                <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}></TextInput>

                <View style={styles.fpv}>
                    <Pressable onPress={() => { Alert.alert("Forgot Password") }}>
                        <Text style={{ fontSize: 15, color: '#006A42', fontWeight: 'bold' }}>Forgot Password ?</Text>
                    </Pressable>
                </View>

                <Pressable style={styles.login} onPress={() => { Alert.alert('Login!!') }}>
                    <Text style={styles.logintext}>Login</Text>
                </Pressable>

                <View style={styles.ac}>
                    <Text>Don't have an account?</Text>
                    <Pressable onPress={() => { navigation.navigate('Signup') }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#006A42' }}>Signup</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    fpv: { alignItems: 'flex-end', width: '78%', paddingRight: 15, marginBottom: 75 },
    ac: { display: 'flex', flexDirection: 'row', width: 'auto', paddingRight: 16 },
    txt2: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
    },
    logintext: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    login: {
        backgroundColor: '#006A42',
        borderRadius: 100,
        alignItems: 'center',
        width: '78%',
        paddingVertical: 5,
        marginVertical: 10,
    },
    img: {
        width: '100%',
        height: '100%',
        position: "absolute"
    },
    text: {
        color: 'white',
        fontSize: 64,
        fontWeight: 'bold',
        marginVertical: 5
    },
    bg: {
        backgroundColor: 'white',
        height: 700,
        width: 'auto',
        borderTopLeftRadius: 100,
        paddingTop: 50,
        alignItems: 'center'

    },
    input: {
        borderRadius: 100,
        color: '#006A42',
        paddingHorizontal: 10,
        width: '78%',
        backgroundColor: 'rgb(220,220, 220)',
        marginVertical: 10
    }
});

export default Login;