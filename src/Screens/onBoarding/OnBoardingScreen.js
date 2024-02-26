import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../../utils/asyncStorage';
const {width,height} = Dimensions 
const OnBoardingScreen = () => {
    const navigation = useNavigation()
    const handleDone = () => {
        setItem('onBoarding','true')
        navigation.navigate('Login')
    }
    const doneButton = ({...props}) => {
        return(
        <TouchableOpacity onPress={()=>setItem('onBoarding',true)} style={{padding:20,backgroundColor:'white',borderRadius:50, borderWidth:0.5}} {...props}>
            <Text style={{fontWeight:'900'}}>Done</Text>
        </TouchableOpacity>
        )
    }
  return (
    <View style={styles.container}>
      <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
            DoneButtonComponent = {doneButton}
            bottomBarHighlight = {false}
            pages={[
                {
                backgroundColor: '#56c474',
                image: 
                <View style={styles.LottieView}>
                    <LottieView source={require('../../assets/Animation.json')} autoPlay loop />
                </View>,
                title: 'Study Tracker',
                subtitle: 'You Can Track you study and boost you productivity',
                },
                {
                backgroundColor: '#fae55f',
                image: 
                <View style={styles.LottieView}>
                   <Image source={require('../../assets/images.png')}/>
                </View>,
                title: 'Create Time Table',
                subtitle: 'You can create Time Table',
                },
                {
                backgroundColor: '#f0a1a5',
                image: 
                <View style={styles.LottieView}>
                    <LottieView source={require('../../assets/Bnimation.json')} autoPlay loop />
                </View>,
                title: 'Get Badge',
                subtitle: 'Done Your task according time table and get badge and Ranking',
                },                
            ]}
       />
    </View>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    LottieView: {
        width:width,
        height:width
    }
})