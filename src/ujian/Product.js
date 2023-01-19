import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Product = () => {
  return (
    <View style={styles.container}>
      <Text>Product</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  Vertical20  : {
    marginVertical: 20,
  },
  container: { 
    marginHorizontal: 18,
    marginVertical: 20,
  }
})