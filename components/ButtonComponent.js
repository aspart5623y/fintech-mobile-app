import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ButtonComponent = ({ title, onPress, extraStyle }) => {
  return (
    <TouchableOpacity accessibilityRole="button" {...{ onPress }} underlayColor="white">
      <View style={[styles.button, extraStyle]}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    backgroundColor: '#31A062',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center", 
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600"
  }
})

export default ButtonComponent
