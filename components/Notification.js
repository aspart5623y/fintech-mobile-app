import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
const NotificationImg = require('./../assets/Notification.png')

const Notification = () => {
  return (
    <TouchableOpacity style={style.notification}>
      <Image source={NotificationImg} style={style.img} />
      <Text style={style.info}>Apple stocks just increased Check it out now.</Text>
      <Text style={style.date}>3min ago</Text>
    </TouchableOpacity>
  )
}


const style = StyleSheet.create({
  notification: {
    flexDirection: 'row',
    paddingVertical: 23,
    borderBottomWidth: 1,
    borderColor: '#535c68' ,
    gap: 13
  },
  img: {
    width: 70, 
    height: 70,
    flexShrink: 0,
    borderRadius: 20
  },
  info: {
    color: "#000", 
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
    alignSelf: 'center',
    flexShrink: 1
  },
  date: {
    color: "#535c68",
    fontSize: 13, 
    fontStyle: "normal",
    fontWeight: "400"
  }
})

export default Notification