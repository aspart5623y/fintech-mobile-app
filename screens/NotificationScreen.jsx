import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BackBtn from '../components/BackBtn';
import { SafeAreaView } from 'react-native-safe-area-context';

const NotificationScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <BackBtn onPress={() => navigation.goBack()} />
        <Text style={style.headerHeroText}>Notification</Text>


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
    marginTop: 22,
    marginBottom: 44
  }
});

export default NotificationScreen