import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const BankImg = require('./../assets/Bank.png')
import { Ionicons } from '@expo/vector-icons'; 


const Bank = () => {
  return (
    <View style={style.bank}>
      <Image source={BankImg} style={style.img} />
      <View style={style.container}>
        <Text style={style.info}>Bank of Amrica - 0182128xxx</Text>
        <Text style={style.user}>Jonas Macroni</Text>
      </View>
      <TouchableOpacity style={style.icon}>
        <Ionicons name="ellipsis-vertical" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}


const style = StyleSheet.create({
  bank: {
    flexDirection: 'row',
    paddingVertical: 23,
    borderBottomWidth: 1,
    borderColor: '#535c68' ,
    gap: 13
  },
  container: {
    flexGrow: 1
  },
  img: {
    width: 70, 
    height: 70,
    flexShrink: 0,
    borderRadius: 20
  },
  info: {
    color: "#555",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600"
  },
  user: {
    color: "#333",
    fontSize: 14, 
    fontStyle: "normal",
    fontWeight: "400"
  },
  icon: {
    width: 24, 
    height: 24,
    flexShrink: 0
  }
})
export default Bank