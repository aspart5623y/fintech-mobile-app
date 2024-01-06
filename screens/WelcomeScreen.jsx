import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ButtonComponent from '../components/ButtonComponent'
import BtnLinkComponent from '../components/BtnLinkComponent'
const welcomeImage = require('../assets/welcome.png')

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.imgContainer}>
        <Image source={welcomeImage} style={style.image} />
      </View>
      <Text style={style.header}>Stay on top of your finance with us.</Text>
      <Text style={style.body}>
        We are your new financial Advisors
        to recommed the best investments for you.
      </Text>
      <ButtonComponent title="Create account" extraStyle={style.btnMarginBm} onPress={() => navigation.navigate('CreateAccount')} />
      <BtnLinkComponent title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

const style = StyleSheet.create({
  container: { 
    backgroundColor: '#FAFAFA',
    height: '100%',
    width: '100%',
    paddingHorizontal: 20
  },
  imgContainer: { 
    paddingTop: 154,
    paddingBottom: 38,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 273,
    width: 300
  }, 
  header: {
    color: "#000",
    textAlign: "center",
    // fontFamily: "DM Sans",
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: '700',
    marginBottom: 17
  },
  body: {
    color: "#4F4F4F", 
    textAlign: "center",
    // font-family: SF Pro Text;
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
    marginBottom: 79
  },
  btnMarginBm: {
    marginBottom: 17
  }
})

export default WelcomeScreen