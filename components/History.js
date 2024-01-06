import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const History = () => {
  return (
    <View style={styles.history}>
      <View>
        <Text style={styles.amount}>Rp 200.000</Text>
        <Text style={styles.stock}>Buy “APPL” Stock</Text>
      </View>
      <Text style={[styles.stock, { textAlign: 'right' }]}>TUE 22 Jun 2020</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  history: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#B3B3B3'
  },
  amount: {
    color: "#00B907", 
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 28
  },
  stock: {
    color: "#B3B3B3", 
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 22
  },
})

export default History