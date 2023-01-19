import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useContext} from 'react'
import AppContext from '../screen/AppContext'

const Belajar = ({ navigation }) => {
  const { konter } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('BelajarUseState', {
        getTitle: 'useState page'
      })} style={[styles.button, styles.marginBottom]} >
        <Text style={styles.title}>Use State</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('BelajarUseContext')} style={[styles.button, styles.marginBottom]} >
        <Text style={styles.title}>Use Context</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Busket', { qty: konter })} style={[styles.button, styles.marginBottom]}  >
        <Text style={styles.title}>Busket</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Product')} style={[styles.button, styles.marginBottom]} >
        <Text style={styles.title}>Product</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Belajar

const styles = StyleSheet.create({
  container: { padding: 32, },
  button: { backgroundColor: '#00A884', paddingVertical: 16, borderRadius: 16 },
  title: { color: '#FFFFFF', textAlign: 'center', fontSize: 18 },
  marginBottom: { marginBottom: 8 },
})