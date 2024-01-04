import React, { useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View, Keyboard } from 'react-native' 
import BackBtn from '../components/BackBtn'
import Input from '../components/Input'
import ButtonComponent from '../components/ButtonComponent'
import BtnLinkComponent from '../components/BtnLinkComponent'

const CreateAccountScreen = ({ navigation }) => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>
        <BackBtn onPress={() => navigation.goBack()} />
        <Text style={style.header}>Create an account</Text>
        <Text style={style.body}>Invest and double your income now</Text>
      
        <Input placeholder="Full name" setValue={setFullname} value={fullname} extraStyle={style.inputMb} />
        <Input placeholder="Email Address" setValue={setEmail} value={email} extraStyle={style.inputMb} />
        <Input placeholder="Password" setValue={setPassword} value={password} extraStyle={style.inputMb} />

        <ButtonComponent title="Create Account" extraStyle={{ marginBottom: 44 }} onPress={() => navigation.navigate('Home')} />
        <BtnLinkComponent title="Already have an account?" onPress={() => navigation.navigate('Login')} />
      </View>
    </TouchableWithoutFeedback>
  )
}


const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: "100%",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 71,
  },
  header: {
    color: "#000", 
    textAlign: "center",
    fontSize: 34, 
    fontStyle: "normal",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8
  },
  body: {
    color: "#4F4F4F", 
    textAlign: "center",
    // font-family: SF Pro Text;
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "semibold",
    marginBottom: 87
  },
  inputMb: {
    marginBottom: 18
  }
})


export default CreateAccountScreen
