import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import InvestNowBtn from '../components/InvestNowBtn';
import SeeAll from '../components/SeeAll';
import PlansCard from '../components/PlansCard';
import Guide from '../components/Guide';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Fontisto name="bell" size={24} color="black" />
      </View>
      <ScrollView style={{ marginBottom: 80 }} showsVerticalScrollIndicator={false}>
        <Text style={style.headerHeroText}>Welcome, Jessie.</Text>

        <LinearGradient 
          colors={['#31A078', '#31A05F']}
          style={style.portfolio}
        >
          <Text style={style.portfolioTitle}>Your total asset portfolio</Text>

          <View style={style.flexStyle}>
            <Text style={style.portfolioAmount}>N203,935</Text>
            <InvestNowBtn />
          </View>
        </LinearGradient>
        
        <View style={style.flexStyle}>
          <Text style={style.title}>Best Plans</Text>
          <SeeAll text="See All" />
        </View>

        <ScrollView style={{ marginBottom: 40 }} horizontal={true} showsHorizontalScrollIndicator={false}>
          <PlansCard
            colors={[ "#F0C735", "#D98F39"]}
            name="Gold"
            desc="30% return"
          />
           <PlansCard
            colors={[ "#CAC9C9", "#979797"]}
            name="Silver"
            desc="60% return"
          />
           <PlansCard
            colors={[ "#BA8DF3", "#615EE2"]}
            name="Platinum"
            desc="90% return"
          />
        </ScrollView>

        <Text style={style.title}>Investment Guide</Text>
        
        <Guide 
          title="Basic type of investments"
          body="This is how you set your foot for 2020 Stock market recession. What’s next..."
        />
        <Guide 
          title="Basic type of investments"
          body="This is how you set your foot for 2020 Stock market recession. What’s next..."
        />
        <Guide 
          title="Basic type of investments"
          body="This is how you set your foot for 2020 Stock market recession. What’s next..."
        />
        <Guide 
          title="Basic type of investments"
          body="This is how you set your foot for 2020 Stock market recession. What’s next..."
        />
        <Guide 
          title="Basic type of investments"
          body="This is how you set your foot for 2020 Stock market recession. What’s next..."
        />
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    paddingTop: 61,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 18
  },
  headerHeroText: {
    color: "#000", 
    // font-family: DM Sans;
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: "bold",
    marginBottom: 34
  },
  portfolio: {
    borderRadius: 20,
    padding: 30,
    marginBottom: 40
  },
  portfolioTitle: {
    color: "#FFF", 
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "medium",
    marginBottom: 11
  },
  portfolioAmount: {
    color: "#FFF", 
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "semibold"
  },
  flexStyle: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  title: {
    color: "#000", 
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "bold",
    marginBottom: 20
  },

})

export default HomeScreen