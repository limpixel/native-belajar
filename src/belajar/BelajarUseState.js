import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import AppContext from '../screen/AppContext'

const BelajarUseState = ({ route }) => {
    const { getTitle } = route.params;
    const { konter, setKonter } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View><Text style={[styles.bold, styles.title]}>{getTitle}</Text></View>
      <View style={styles.box}>
        <View style={[styles.boxItem]}><Button title="Kurang" onPress={() => setKonter(konter-1)} /></View>
        <View><Text style={[styles.bold, styles.title]}>{konter}</Text></View>
        <View style={[styles.boxItem]}><Button title="Tambah" onPress={() => setKonter(konter+1)} /></View>
      </View>
    </View>
  )
}

export default BelajarUseState

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' },
    bold: {fontWeight: 'bold'},
    title: {fontSize: 30},
    box :{ marginTop: 32, alignItems: 'center', flexDirection:'row',},
    boxItem: {marginHorizontal: 16,},
})