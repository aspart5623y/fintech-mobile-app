import React from 'react'
import { StyleSheet, Text } from 'react-native'

const BtnLinkComponent = ({ onPress, title, extraStyle }) => {
  return (
    <Text {...{ onPress }} style={[styles.buttonText, extraStyle]}>{title}</Text>
  )
}


const styles = StyleSheet.create({
  buttonText: {
    padding: 5,
    color: "#31A062",
    textAlign: "center", 
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600"
  }
})
export default BtnLinkComponent
