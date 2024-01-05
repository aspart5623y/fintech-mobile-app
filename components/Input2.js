import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input2 = ({ title, placeholder, extraStyle }) => {
  const [value, setValue] = useState('')

  return (
    <View style={[style.container, extraStyle]}>
      {title && <Text style={style.label}>{title}</Text>}
      <TextInput
        style={style.input}
        placeholder={placeholder}
        onChangeText={newText => setValue(newText)}
        defaultValue={value}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    height: 47, 
    width: '100%'
  },
  label: {
    color: "#333",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400"
  },
  input: { 
    width: '100%', 
    borderBottomWidth: 1, 
    borderStyle: 'solid', 
    borderColor: '#333333', 
    paddingVertical: 9, 
    color: '#828282', 
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400"
  }
})

export default Input2