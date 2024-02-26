import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect,useState} from 'react'
import { API_TOKEN, API_URL } from '@env'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screens/auth/LoginScreen';
import OnBoardingScreen from './src/Screens/onBoarding/OnBoardingScreen';
import { getItem } from './src/utils/asyncStorage';

const Stack = createNativeStackNavigator();
const App = () => {
  const [showOnBoarding, setShowOnBoarding] = useState(null)

  useEffect(() => {
    console.log(API_TOKEN, API_URL);
    checkIfAlreadyOnBoarding();
  }, [])

  const checkIfAlreadyOnBoarding = async() => {
    let onBoarding = await getItem('onBoarding')
    console.log("onBoarding",onBoarding);
    if(onBoarding){
      // hideOnBoarding
      setShowOnBoarding(false)
    } else {
      // showOnBoarding
      setShowOnBoarding(true)
    }
  }

  if(showOnBoarding == null){
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= {showOnBoarding ? 'OnBoarding' : 'Login'}>
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})