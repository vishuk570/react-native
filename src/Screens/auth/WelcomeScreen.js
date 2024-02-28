import { Image, SafeAreaView, StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const {width,height} = Dimensions 
const WelcomeScreen = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#32a0a8',justifyContent:'center' }}>
        <View style={{alignItems:'center'}}>
            <Text style={{fontSize:30, color:'white'}}>
                Let's Get Started!
            </Text>
        </View>
        <View style={{alignItems:'center',margin:80}}>
            <Image style={{width:300 ,height:300}} source={require('../../assets/welcome.png')}/>
        </View>
        <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Singup')} style={{height:40,backgroundColor:'#f7e80c',width:"90%",justifyContent:"center",alignItems:'center',borderRadius:12}}>
                <Text style={{fontSize:20,fontWeight:'400',fontStyle:'normal',color:'#000'}}>Signup</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',margin:20,justifyContent:'center'}}>
            <Text style={{fontSize:15,color:'#fff'}}>Already have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text style={{fontSize:15 , color:'#f7e80c'}}> Log In</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
})