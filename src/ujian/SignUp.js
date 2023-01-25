import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import RadioButtonsGroup, { RadioGroup } from 'react-native-radio-buttons-group'
import Checkbox from 'expo-checkbox'
const SignUp = () => {

    return (
        <View style={styles.container}>
            <View style={styles.HeadTextContainer}>
                <Text style={styles.headText}>Sign Up</Text>
            </View>
            <View style={styles.inputContain}>
                <View style={styles.inputContainer}>

                </View>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        paddingTop: 30
    },

    HeadTextContainer: {
        alignItems: 'center'
    },

    headText: {
        fontSize: 24,
        fontWeight: '500',
    }
})