import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Fontisto } from '@expo/vector-icons'; 


const PlansCard = ({ name, colors, desc, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient style={style.card} colors={colors} >
        <Text style={style.cardTitle}>{name}</Text>
        <Text style={style.cardText}>{desc}</Text>
        <View style={style.dollar}>
          <Fontisto name="dollar" size={60} color={colors[0]} />
          <Fontisto name="dollar" size={50} color={colors[1]} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  card: {
    width: 134,
    height: 170,
    borderRadius: 20,
    padding: 20,
    marginRight: 20
  },
  cardTitle: {
    color: "#FFF", 
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: '600'
  },
  cardText: {
    color: "#FFF", 
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: '600',
    opacity: 0.5
  },
  dollar: { 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    marginTop: 30
  }
})

export default PlansCard
