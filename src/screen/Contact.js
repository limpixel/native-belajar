import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Contact = () => {

    const [data, setData] = useState(null);

    const readData = async () => {
        try {
            const value = await AsyncStorage.getItem('@kodein2022');

            if (value === null) {
                setData('Tidak Ada Nilai di AsyncStorage');
                console.log('Tidak Ada Nilai');
            } else {
                setData(value);
                console.log('Ada Nilai');
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
      readData();
    }, [])
    

  return (
    <View style={styles.container}>
      <Text style={styles.textGetData}>{data}</Text>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({

    container: {
        paddingTop: 32,
        paddingHorizontal: 32,
    },
    textGetData : {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#353535',
    },
})