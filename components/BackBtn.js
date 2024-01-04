import React from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';

const BackBtn = ({ onPress }) => {
  return (
    <TouchableOpacity accessibilityRole="button" onPress={onPress} style={{ width: 35 }}>
      <Entypo name="chevron-left" size={35} color="black" />
    </TouchableOpacity>
  )
}

export default BackBtn
