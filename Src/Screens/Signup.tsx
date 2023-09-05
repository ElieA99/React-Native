import React from 'react'
import { Alert, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

function SignUp({ navigation }) {
    return (
        <>
            <ImageBackground source={require("../Assets/leaves.jpg")} style={styles.img}></ImageBackground>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.text}>Signup</Text>
            </View>

            <View style={styles.bg}>
                <Text style={{ fontSize: 40, color: '#006A42', fontWeight: 'bold' }}>Create an account</Text>

                <TextInput style={styles.input} placeholder="Username"></TextInput>
                <TextInput style={styles.input} placeholder="Email" inputMode='email'></TextInput>
                <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}></TextInput>

                {/* <View style={{ alignItems: 'flex-end', width: '78%', paddingRight: 15, marginBottom: 75 }}>
                  
                </View> */}

                <View style={{ display: 'flex', paddingRight: 16 }}>
                    <Text style={{ color: 'grey', fontSize: 16 }}>
                        By signing in, you agree to our{' '}
                    </Text>
                    <Pressable onPress={()=>{Alert.alert('Terms')}}>
                        <Text style={{ paddingLeft: 45, alignItems: 'center', color: '#006A42', fontWeight: 'bold', fontSize: 16 }}>
                            Terms & Conditions
                        </Text>
                    </Pressable>
                </View>

                <Pressable style={styles.signup} onPress={() => { Alert.alert('Signup!!') }}>
                    <Text style={styles.signuptext}>Signup</Text>
                </Pressable>

                <View style={{ display: 'flex', flexDirection: 'row', width: 'auto', paddingRight: 16 }}>
                    <Text>Already have an account?</Text>
                    <Pressable onPress={() => { navigation.navigate('Login') }}  >
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#006A42', display: 'flex', flexDirection: 'row' }}>Login</Text>
                    </Pressable>
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    signuptext: { color: 'white', fontSize: 25, fontWeight: 'bold' },
    signup: {
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
        alignItems: 'center',

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

export default SignUp;