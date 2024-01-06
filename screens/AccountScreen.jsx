import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import BackBtn from '../components/BackBtn';
import { MaterialIcons } from '@expo/vector-icons'; 
import ProfileCard from '../components/ProfileCard';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';

const AvatarUrl = require('../assets/avatar.png')

const AccountScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={style.container}>
      <BackBtn onPress={() => navigation.goBack()} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={style.headerHeroText}>Profile</Text>
      
        <View style={style.avatarContainer}>
          <Image source={AvatarUrl} style={style.image} />
          <Text style={style.username}>Jonas Macroni</Text>
          <Text style={style.occupation}>Expert</Text>
        </View>
      
        <ProfileCard 
          icon={<MaterialIcons name="contacts" size={24} color="black" />}
          title="Contact Info"
          onPress={() => navigation.navigate('ContactInfo')}
        />
      
        <ProfileCard 
          icon={<Ionicons name="cash" size={24} color="black" />}
          title="Source of Funding Info"
        />
      
        <ProfileCard 
          icon={<FontAwesome name="bank" size={24} color="black" />}
          title="Bank Account Info"
          onPress={() => navigation.navigate('BankAccount')}
        />
      
        <ProfileCard 
          icon={<Ionicons name="document-text" size={24} color="black" />}
          title="Document Info"
        />
      
        <ProfileCard 
          icon={<Ionicons name="ios-settings-sharp" size={24} color="black" />}
          title="Settings"
        />
      </ScrollView>
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F6F6F9',
    // height: '100%'
  },
  headerHeroText: {
    color: "#000", 
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: "bold",
    marginTop: 23,
    marginBottom: 29
  },
  avatarContainer: {
    alignItems: 'center'
  },
  image: {
    height: 150,
    width: 150, 
    borderRadius: 100,
    marginBottom: 21
  }, 
  username: {
    color: "#000",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "600",
    marginBottom: 7
  },
  occupation: {
    color: "#000",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
    marginBottom: 29
  }
});

export default AccountScreen