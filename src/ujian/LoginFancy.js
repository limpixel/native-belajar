import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useCallback, useState } from 'react'
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import Ionicons from '@expo/vector-icons/Ionicons';
import { email } from 'react-email-validator'
import RadioButtonsGroup, { RadioGroup } from 'react-native-radio-buttons-group'
import Checkbox from 'expo-checkbox'

const initialState = {
  Renang: false,
  Membaca: false,
  Sepeda: false
}

const BelajarFancyAlert = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  const [getListKota, setGetListKota] = useState(null)
  const [listKota, setListKota] = useState([
    { id: 1, label: 'Kaltim', value: 'Samarinda', },
    { id: 2, label: 'Jakarta', value: 'Sudirman', },
    { id: 3, label: 'Sulsel', value: 'Makassar', },
  ])

  const onPressKota = (val) => {
    for (let index of val) {
      if (index.selected == true) {
        setGetListKota(index.label)
        console.log(index.label, ":", index.value)
      }
    }
  }

  const [hobi, setHobi] = useState(initialState)


  const handleOpen = useCallback(() => {
    setAlertVisible(true);
  })

  const handleClose = useCallback(() => {
    setAlertVisible(false);
  }, []);




  return (
    <View style={styles.container}>

      <View style={{ alignItems: 'center' }}>
        <Text style={styles.headText}>Login</Text>
      </View>

      <View style={{ flexDirection: 'column', marginTop: 48, flex: 1 }}>
        <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20, paddingHorizontal: 20, marginBottom: 15, borderRadius: 20 }}>
          <TextInput style={{ fontWeight: 'medium' }} placeholder='Gmail' placeholderTextColor='#8EA7E9' onChangeText={(text) => { setEmail(text) }} />
          <Ionicons name='checkmark-circle' size={32} style={{ color: '#00337C' }} />
        </View>

        <View style={{ backgroundColor: 'white', paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, borderRadius: 20, marginBottom: 40 }}>
          <TextInput style={{ fontWeight: 'medium' }} placeholder='Password' placeholderTextColor='#8EA7E9' onChange={(text) => { setPassword(text) }} secureTextEntry />
          <Ionicons name='eye' size={32} style={{ color: '#B9F3FC' }} />
        </View>

        <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <Text>Kota</Text>
          <RadioGroup
            radioButtons={listKota}
            onPress={onPressKota}
            layout={'column'}
          />
        </View>

        <View style={styles.section}>
          <View style={{ flexDirection: 'column', marginTop: 20 }}>
            <Text>Hobi</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
              <Checkbox value={hobi.Renang} onValueChange={value => setHobi({ ...hobi, Renang: value, }, console.log("Hobi : ", "Renang",))} />
              <Text style={{ marginHorizontal: 10 }}>
                Renang
              </Text>
            </View>



            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
              <Checkbox value={hobi.Sepeda} onValueChange={value => setHobi({ ...hobi, Sepeda: value, }, console.log("Hobi : ", "Sepeda",))} />
              <Text style={{ marginHorizontal: 10 }}>
                Sepeda
              </Text>
            </View>

          </View>

        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14 }}>

        </View>
      </View>





      <View style={styles.viewButton}>
        <View style={{ height: 75 }}>
          <TouchableOpacity
            onPress={() => {
              if (email == "" || password == "") {
                setError(false);
                handleOpen();
                setMessage("Email or/and Password are wrong!");
              } else {
                setError(true);
                handleOpen();
                setMessage("You are Administrator")
                setEmail("")
                setPassword("")
                setHobi("")
                setKota("")
              }
              // console.log(email, password)
            }}
            style={styles.buttonSuccess}>
            <Text style={styles.title}>Submit</Text>
          </TouchableOpacity>
        </View>

        {/* Alert Success */}

        <FancyAlert
          visible={alertVisible}
          icon={
            <View style={!error ? styles.alertError : styles.alertSuccess}>
              <Text onPress={handleClose} style={{ fontSize: 30 }}>
                🧐
              </Text>
            </View>}
          style={{ backgroundColor: 'white' }}
        >
          <Text style={{ marginTop: -16, marginBottom: 32, fontSize: 18 }}>{message}</Text>
          <TouchableOpacity onPress={handleClose} style={styles.buttonAlertSuccess}>
            <Text style={styles.title}>Ok</Text>
          </TouchableOpacity>
        </FancyAlert>


      </View>

    </View>



  )
}

export default BelajarFancyAlert

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 32, paddingVertical: 30 },
  buttonSuccess: { backgroundColor: '#00A884', paddingVertical: 16, borderRadius: 16, marginBottom: 15, flex: 1, marginRight: 10, },
  buttonError: { backgroundColor: '#FC7300', paddingVertical: 16, borderRadius: 16, marginBottom: 15, flex: 1 },
  buttonAlertSuccess: { backgroundColor: '#00A884', paddingVertical: 15, paddingHorizontal: 50, marginBottom: 10, borderRadius: 16 },
  buttonAlertError: { backgroundColor: '#FC7300', paddingVertical: 15, paddingHorizontal: 50, marginBottom: 15, borderRadius: 16 },
  headText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  title: { color: '#FFFFFF', textAlign: 'center', fontSize: 18 },
  marginBottom: { marginBottom: 8 },
  alertSuccess: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00A884',
    borderRadius: 50,
    width: '100%',
  },

  alertError: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 50,
    width: '100%',
  },

  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
})