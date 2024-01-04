import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const InvestNowBtn = () => {
  return (
    <TouchableOpacity accessibilityRole="button" style={style.btn}>
      <View>
        <Text style={style.btnText}>Invest now</Text>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  btn: {
    height: 40,
    float: 'right',
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  btnText: {
    color: "#31A078", 
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "bold"
  }
})

export default InvestNowBtn
