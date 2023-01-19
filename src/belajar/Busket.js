import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useContext} from 'react'
import AppContext from '../screen/AppContext'

const Busket = () => {

    const { konter } = useContext(AppContext);

    return (
      <View style={[styles.container]}>
        <Text style={[styles.title1]}>
         Total Belanja
        </Text>
        <Text style={[styles.bold, styles.title2]}>{konter}</Text>
      </View>
    )
}

export default Busket

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' },
    title1: {fontSize: 20, paddingTop: 0, textAlign: 'center'},
    title2: {fontSize: 80, paddingTop: 10, textAlign: 'center'},
})