import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import React, { useContext } from 'react'

import AppContext from '../screen/AppContext'

const Product = ({ navigation }) => {

  const { konter, setKonter } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.textHead}>Product</Text>
        <TouchableOpacity style={{ backgroundColor: 'green', paddingHorizontal: 15,paddingVertical: 10, borderRadius: 10 }} onPress={() => navigation.navigate('Basket')}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }} >Bakset: {konter}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.imageContainer}>
            <Text style={{ color: 'white', fontWeight: 'bold'}}>Image</Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.textHeader}>Bali</Text>
            <Text style={styles.textContain}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
            <Text style={styles.textHeader}>Harga : 50.000</Text>
            <TouchableOpacity style={styles.button} onPress={() => setKonter(konter + 1)} >
              <Text style={{ color: 'white', fontWeight: 'bold' }} >Wishlist</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  Vertical20: {
  },
  container: {
    flex: 1,

    marginHorizontal: 18,
    marginVertical: 20,
  },

  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },


  textHead: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  body: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 25,
  },

  item: {
    backgroundColor: 'yellow',
    height: 180,
    flexDirection: 'row',
    borderRadius: 10
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,

  },
  text: {
    flex: 1.5,
    padding: 10
  },

  textHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  textContain: {
    marginTop: 5,
    fontSize: 14,
  },

  button: { backgroundColor: '#00A884', paddingVertical: 16, borderRadius: 5, marginTop: 15, justifyContent: 'center', alignItems: 'center' },
  tinyLogo: {


  },
})