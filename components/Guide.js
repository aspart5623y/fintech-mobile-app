import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 


const Guide = ({ title, body}) => {
  return (
    <TouchableOpacity style={style.guide}>
      <View style={style.left}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.body}>{body}</Text>
      </View>

      <View style={style.icon}>
        <Ionicons name="ios-newspaper-outline" size={24} color="black" />
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  guide: {
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#bdc3c7",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10
  },
  title: {
    color: "#4F4F4F", 
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
    marginBottom: 5
  },
  body: {
    color: "#474747", 
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 'normal'
  },
  icon: {
    height: 60,
    width: 60,
    backgroundColor: '#bdc3c7', 
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  left: {
    flexGrow: 1,
    maxWidth: '75%'
  }
})

export default Guide
