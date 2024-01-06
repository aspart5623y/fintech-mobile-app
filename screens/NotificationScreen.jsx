import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import BackBtn from '../components/BackBtn';
import { SafeAreaView } from 'react-native-safe-area-context';
import Notification from '../components/Notification';

const NotificationScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <BackBtn onPress={() => navigation.goBack()} />
        <Text style={style.headerHeroText}>Notification</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={style.scrollContainer}>
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
        </ScrollView>
      </View>
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
  headerHeroText: {
    color: "#000", 
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: "bold",
    marginVertical: 22
  },
  scrollContainer: {
    paddingTop: 22,
    marginBottom: 22
  }
});

export default NotificationScreen