import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

const Notification = () => {
  return (
    <TouchableOpacity style={style.notification}>

    </TouchableOpacity>
  )
}


const style = StyleSheet.create({
  notification: {
    flexDirection: 'row',
    
  }
})

export default Notification