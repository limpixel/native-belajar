import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RadioButtonsGroup, { RadioGroup } from 'react-native-radio-buttons-group'

const BelajarRadioButton = () => {

    const [getValueGender, setGetValueGender] = useState(null)

    const [gender, setGender] = useState([
        { id: 1, label: 'Female', value: 'Perempuan', },
        { id: 2, label: 'Male', value: 'Pria', }
    ])

    const onPressRadioButton = (val) => {
        for (let index of val) {
            if (index.selected == true) {
                setGetValueGender(index.value)
                console.log(index.label, ":", index.value)
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.alignCenter}>
                <Text style={styles.textH1}> {getValueGender == null ? 'Pilih Jenis Kelamin' : getValueGender} </Text>

                <View style={{ flexDirection: 'row', marginTop: 25 }}>
                    <RadioGroup
                        radioButtons={gender}
                        onPress={onPressRadioButton}
                        layout={'row'}
                    />
                </View>
            </View>
        </View>
    )
}

export default BelajarRadioButton

const styles = StyleSheet.create({
    container: { padding: 32, },
    alignCenter: { alignItems: 'center' },
    textH1: { fontSize: 24, fontWeight: 'bold' }
})