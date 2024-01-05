import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 


const ProfileCard = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.card}>
        {icon}
        <Text style={style.title}>{title}</Text>
        <Entypo name="chevron-thin-right" size={24} color="black" />
      </View>
    </TouchableOpacity>
  )
}


const style = StyleSheet.create({
  card: {
    paddingHorizontal: 18,
    paddingVertical: 15,
    height: 60,
    borderRadius: 4, 
    backgroundColor: "#fff",
    shadowColor: 'rgba(0, 0, 0, 0.04)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1, 
    shadowRadius: 10, 
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 36,
    marginBottom: 20
  },
  title: {
    flexGrow: 1,
    color: "#333", 
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600"
  }
});
  

export default ProfileCard