import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'

const BelajarCheckBox = () => {

    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.textHead}>BelajarCheckBox</Text>

            <View style={{ marginTop: 20, flexDirection: 'column', }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14 }}>
                    <Checkbox
                        style={{ margin: 10 }}
                        value={checked}
                        onValueChange={setChecked}
                        color={checked ? '#4630EB' : undefined}
                    />
                    <Text style={styles.paragraph}>Toyota</Text>
                </View>
            </View>
        </View>
    )
}

export default BelajarCheckBox

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        alignItems: 'center'
    },
    outputText: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20
    },
    textHead: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    checkBox: {
        padding: 20
    },
})