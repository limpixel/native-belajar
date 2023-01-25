import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import AppContext from '../screen/AppContext'

const Belajar = ({ navigation }) => {
  const { konter } = useContext(AppContext);
  return (
    <ScrollView>
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
        <TouchableOpacity onPress={() => navigation.navigate('Alert')} style={[styles.button, styles.marginBottom]} >
          <Text style={styles.title}>Fancy Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginFancy')} style={[styles.button, styles.marginBottom]} >
          <Text style={styles.title}>Ujian Fancy Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Svg')} style={[styles.button, styles.marginBottom]} >
          <Text style={styles.title}>SVG</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RadioButton')} style={[styles.button, styles.marginBottom]} >
          <Text style={styles.title}>Radio Button</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CheckBox')} style={[styles.button, styles.marginBottom]} >
          <Text style={styles.title}>Checkbox Button</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')} style={[styles.button, styles.marginBottom]} >
          <Text style={styles.title}>Ujian SignUp</Text>
        </TouchableOpacity>


      </View>
    </ScrollView>
  )
}

export default Belajar

const styles = StyleSheet.create({
  container: { padding: 32, },
  button: { backgroundColor: '#00A884', paddingVertical: 16, borderRadius: 16 },
  title: { color: '#FFFFFF', textAlign: 'center', fontSize: 18 },
  marginBottom: { marginBottom: 8 },
})