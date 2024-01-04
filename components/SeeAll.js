import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 


const SeeAll = ({ text, extraStyle, onPress }) => {
  return (
    <Text style={[style.seeAll, extraStyle]} onPress={onPress}>
      {text}
      <Ionicons name="arrow-forward" size={24} />
    </Text>
  )
}

const style = StyleSheet.create({
  seeAll: {
    color: "#FE555D", 
    textAlign: "right",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: 'medium',
    flexDirection: 'row',
    alignItems: 'center',
  }
})
export default SeeAll
