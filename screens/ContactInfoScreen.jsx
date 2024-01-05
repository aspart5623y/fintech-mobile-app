import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import BackBtn from '../components/BackBtn';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input2 from '../components/Input2';
const AvatarUrl = require('../assets/avatar.png')

const ContactInfoScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <BackBtn onPress={() => navigation.goBack()} />
        <Text style={style.headerHeroText}>Contact Info</Text>
        <View></View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.avatarContainer}>
          <View style={style.imageContainer}>
            <Image source={AvatarUrl} style={style.image} />
            <View style={style.overlay}>
              <Feather name="edit-2" size={35} color="white" />
            </View>
          </View>

          <Input2 title="Name" extraStyle={{ marginBottom: 37 }} />
          <Input2 title="Birthdate" extraStyle={{ marginBottom: 37 }} />
          <Input2 title="Gender" extraStyle={{ marginBottom: 37 }} />
          <Input2 title="Email" extraStyle={{ marginBottom: 37 }} />
          <Input2 title="Phone Number" extraStyle={{ marginBottom: 37 }} />
          <Input2 title="Address" extraStyle={{ marginBottom: 37 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F6F6F9',
    height: '100%'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 49,
    justifyContent: 'space-between'
  },  
  headerHeroText: {
    color: "#000", 
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  imageContainer: {
    position: 'relative',
    height: 150,
    width: 150, 
    marginBottom: 21
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%', 
    backgroundColor: '#00000042',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: '100%',
    width: '100%', 
    borderRadius: 100,
  }
});

export default ContactInfoScreen;