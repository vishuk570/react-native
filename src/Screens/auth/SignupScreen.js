import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';


const SignupScreen = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#32a0a8', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', flex: 2, marginTop: 20 }}>
                {/* download png https://www.pngwing.com/ */}
                <Image style={{ width: 150, height: 150 }} source={require('../../assets/login.png')} />
            </View>
            <View style={{ flex: 8, backgroundColor: '#fff', borderTopEndRadius: 50, borderTopStartRadius: 50 }}>
                <View style={{ margin: 20 }}>
                    <View style={{ margin: 5 }}>
                        <Text style={{ marginHorizontal: 10, marginVertical: 8 }}>
                            Full Name
                        </Text>
                        <TextInput
                            style={{
                                borderRadius: 10,
                                backgroundColor: '#ededed'
                            }}
                            value={name}
                            onChangeText={(val)=>setName(val)}
                        />
                    </View>
                    <View style={{ margin: 5 }}>
                        <Text style={{ marginHorizontal: 10, marginVertical: 8 }}>
                            Email
                        </Text>
                        <TextInput
                            style={{
                                borderRadius: 10,
                                backgroundColor: '#ededed'
                            }}
                            value={email}
                            onChangeText={(val)=>setEmail(val)}
                        />
                    </View>
                    <View style={{ margin: 5 }}>
                        <Text style={{ marginHorizontal: 10, marginVertical: 8 }}>
                            Password
                        </Text>
                        <TextInput
                            style={{
                                borderRadius: 10,
                                backgroundColor: '#ededed'
                            }}
                            value={password}
                            onChangeText={(val)=>setPassword(val)}
                        />
                    </View>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('ForgetPass')} style={{ alignItems: 'flex-end', marginEnd: 10 }}>
                        <Text>Forget Password?</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={{ height: 40, backgroundColor: '#f7e80c', width: "90%", justifyContent: "center", alignItems: 'center', borderRadius: 12, marginVertical:20, marginHorizontal:15 }}>
                        <Text style={{ fontSize: 20, fontWeight: '500', fontStyle: 'normal', color: '#000' }}>Signup</Text>
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: '500', color: '#000', marginRight: 10 }}>or</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity style={{ backgroundColor: '#ededed', borderRadius: 20 }}>
                        <Image style={{ width: 50, height: 50 }} source={require('../../assets/google.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#ededed', borderRadius: 20 }}>
                        <Image style={{ width: 50, height: 50 }} source={require('../../assets/apple.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#ededed', borderRadius: 20 }}>
                        <Image style={{ width: 50, height: 50, borderRadius: 200 }} source={require('../../assets/facebook.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 15, color: '#000' }}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ fontSize: 15, color: '#f7e80c' }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignupScreen

const styles = StyleSheet.create({})
