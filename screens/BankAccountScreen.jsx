import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackBtn from '../components/BackBtn';
import Bank from '../components/Bank';
import ButtonComponent from '../components/ButtonComponent';

const BankAccountScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <BackBtn onPress={() => navigation.goBack()} />
        <Text style={style.headerHeroText}>Bank of account info</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={style.scrollContainer}>
        <Bank />
        <Bank />
        <Bank />
        <Bank />
        <Bank />
        <Bank />
        <Bank />
        <Bank />
        <Bank />
        <Bank />
        <Bank />
      </ScrollView>
      <ButtonComponent title="Add Account" extraStyle={{ marginBottom: 20 }} />
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
    marginBottom: 27,
    justifyContent: 'space-between'
  },  
  headerHeroText: {
    color: "#000", 
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
  },
  scrollContainer: {
    paddingTop: 22,
    marginBottom: 22
  }
});

export default BankAccountScreen