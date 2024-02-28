import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';


const ForgetPassScreen = () => {
  const [email , setEmail] = useState('');

  const navigation = useNavigation()
  return (
     <SafeAreaView style={{flex:1,backgroundColor:'#32a0a8',justifyContent:'center' }}>
        <View style={{alignItems:'center',flex:2,marginTop:20}}>
            {/* download png https://www.pngwing.com/ */}
            <Image style={{width:150 ,height:150}} source={require('../../assets/login.png')}/>
        </View>
        <View style={{flex:5, backgroundColor:'#fff',borderTopEndRadius:50,borderTopStartRadius:50}}>
            <View style={{margin:30}}>
              <View style={{margin:10}}>
                <Text style={{marginHorizontal:10,marginVertical:8}}>
                  Email
                </Text>
                <TextInput 
                  style={{
                    borderRadius:10,
                    backgroundColor:'#ededed'
                  }}
                  value={email}
                />
              </View>
              <TouchableOpacity 
                  onPress={()=>navigation.navigate('Home')} 
                  style={{height:40,backgroundColor:'#f7e80c',width:"90%",justifyContent:"center",alignItems:'center',borderRadius:12,margin:13}}>
                    <Text style={{fontSize:20,fontWeight:'500',fontStyle:'normal',color:'#000'}}>Reset password</Text>
              </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default ForgetPassScreen

const styles = StyleSheet.create({})

