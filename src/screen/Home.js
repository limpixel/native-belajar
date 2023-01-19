import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const Home = ({ navigation }) => {

    const [name, setName] = useState(null)

    const saveData = async () => {
        try {
            await AsyncStorage.setItem('@kodein2022', name)
        } catch (error) {
            console.log(error)
        }
    }

    const handlerChangeName = (val) => {
        setName(val);
        saveData();
        
    }

    

  return (
    <View style={styles.container}>
      <Text style={styles.textName}>Type Input Fullname : </Text>
      <TextInput 
        style={styles.inputName}
        placeholder='Sekolah Developer Indonesia'
        onChangeText={handlerChangeName}
        placeholderTextColor={'#808080'}
      />
    
    <Text style={styles.textStateName}>{name}</Text>
      <View style={styles.buttonContact}>
        <TouchableOpacity style={styles.boxContact} onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.textContact}>Contact Page</Text>
            <FontAwesome5 name="chevron-right" size={20} color="white"  />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
        paddingHorizontal: 32,
    },

    textName : {
        fontWeight: 'bold',
        marginBottom: 8
    },
    
    inputName: {
        borderWidth: 1,
        borderWidth: 1,
        borderColor: '#909090',
        padding: 16, 
        borderRadius: 12,
        marginBottom: 10
    },

    boxContact: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },

    buttonContact: {
        borderWidth: 1,
        borderColor: '#004987',
        backgroundColor: '#004987',
        padding: 16,
        borderRadius: 12,
    },

    textContact: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
    },

    textStateName : {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 22,
        marginBottom: 32,
        textAlign: 'center',
    },
})