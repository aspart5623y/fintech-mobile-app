import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = ({ placeholder, value, setValue, extraStyle }) => {
  return (
    <TextInput
      style={[style.input, extraStyle]}
      placeholder={placeholder}
      onChangeText={newText => setValue(newText)}
      defaultValue={value}
    />
  )
}

const style = StyleSheet.create({
  input: { 
    height: 60, 
    width: '100%', 
    borderWidth: 1, 
    borderStyle: 'solid', 
    borderColor: '#828282', 
    borderRadius: 20,
    paddingVertical: 20, 
    paddingHorizontal: 25,
    color: '#828282', 
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "normal"
  }
})

export default Input
