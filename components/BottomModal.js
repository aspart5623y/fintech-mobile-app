import React, { useCallback, useMemo } from 'react'
import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Fontisto } from '@expo/vector-icons'; 
import SeeAll from './SeeAll';
import History from './History';



const BottomModal = ({ bottomSheetModalRef, handlePresentModalClose }) => {
  const snapPoints = useMemo(() => ['25%', '90%'], []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      backgroundStyle={style.modal}
      handleIndicatorStyle={{ backgroundColor: '#fff' }}
      backdropComponent={renderBackdrop}
    >
      <View style={style.contentContainer}>
        <View style={style.header}>
          <View></View>
          <Text style={style.headerTitle}>My Asset</Text>
          <TouchableOpacity onPress={handlePresentModalClose}>
            <FontAwesome name="times-circle" size={32} color="#B3B3B3" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={style.title}>Your total asset portfolio</Text>
          <View style={{ flexDirection: 'row', gap: 39, alignItems: 'center', marginBottom: 43 }}>
            <Text style={style.amount}>N203,935</Text>
            <View style={{ flexDirection: 'row', gap: 3, alignItems: 'center' }}>
              <Entypo name="arrow-bold-up" size={16} color="#00B907" />
              <Text style={style.figure}>+2%</Text>
            </View>
          </View>

          <Text style={style.current}>Current Plans</Text>

          <LinearGradient style={style.card} colors={["#F0C735", "#D98F39"]}>
            <Text style={style.cardTitle}>Gold</Text>
            <Text style={style.cardText}>30% return</Text>
            <View style={style.dollar}>
              <Fontisto name="dollar" size={80} color="#F0C735" />
              <Fontisto name="dollar" size={70} color="#D98F39" />
            </View>
          </LinearGradient>

          <SeeAll text="See All Plans" extraStyle={{ textAlign: "center", marginBottom: 30 }} />

          <Text style={style.history}>History</Text>

          <History />
          <History />
          <History />
          <History />
          <History />
          <History />
        </ScrollView>
      </View>
    </BottomSheetModal>
  )
}


const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 29
  },
  headerTitle: {
    color: "#000", 
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "700"
  },
  modal: {
    borderRadius: 20
  },
  contentContainer: {
    paddingHorizontal: 30,
    marginBottom: 110
  },
  title: {
    color: "#B3B3B3", 
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    marginBottom: 8
  },
  amount: {
    color: "#000", 
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "600"
  },
  figure: {
    color: "#00B907", 
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "400"
  },
  current: {
    color: "#000",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "700",
    marginBottom: 20
  },
  history: {
    color: "#000",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "700",
    marginBottom: 10
  },
  card: {
    height: 170,
    // width: '100%',
    borderRadius: 20,
    padding: 20,
    marginBottom: 25
  },
  cardTitle: {
    color: "#000", 
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: '600'
  },
  cardText: {
    color: "#000", 
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: '600',
    opacity: 0.5
  },
  dollar: { 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    marginTop: 15
  }
})

export default BottomModal