import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { FancyAlert } from 'react-native-expo-fancy-alerts';

const BelajarFancyAlert = () => {

  const [alertVisibleSuccess, setAlertVisibleSuccess] = useState(false);
  const [alertVisibleError, setAlertVisibleError] = useState(false);

  const handlePressSuccess = useCallback(() => {
    setAlertVisibleSuccess(true);
  }, []);

  const handleCloseSuccess = useCallback(() => {
    setAlertVisibleSuccess(false);
  }, []);

  const handlePressError = useCallback(() => {
    setAlertVisibleError(true);
  }, []);

  const handleCloseError = useCallback(() => {
    setAlertVisibleError(false)
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePressSuccess} style={styles.buttonSuccess}>
        <Text style={styles.title}>Success</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePressError} style={styles.buttonError}>
        <Text style={styles.title}>Error</Text>
      </TouchableOpacity>

      {/* Alert Success */}

      <FancyAlert
        visible={alertVisibleSuccess}
        icon={<View style={styles.alertSuccess}><Text onPress={handleCloseSuccess} style={{ fontSize: 30 }}>🤓</Text></View>}
        style={{ backgroundColor: 'white' }}
      >
        <Text style={{ marginTop: -16, marginBottom: 32, fontSize: 18 }}>Akun Kamu sudah dibikin</Text>
        <TouchableOpacity onPress={handleCloseSuccess} style={styles.buttonAlertSuccess}>
          <Text style={styles.title}>Ok</Text>
        </TouchableOpacity>
      </FancyAlert>

      {/* Alert Error */}

      <FancyAlert
        visible={alertVisibleError}
        icon={<View style={styles.alertError}><Text onPress={handleCloseError} style={{ fontSize: 30 }}>🤓</Text></View>}
        style={{ backgroundColor: 'white' }}
      >
        <Text style={{ marginTop: -16, marginBottom: 32, fontSize: 18, textAlign: 'center' }}>Akun Tidak ada, Silahkan Login Terlebih Dahulu</Text>
        <TouchableOpacity onPress={handleCloseError} style={styles.buttonAlertError}>
          <Text style={styles.title}>Ok</Text>
        </TouchableOpacity>
      </FancyAlert>
    </View>
  )
}

export default BelajarFancyAlert

const styles = StyleSheet.create({
  container: { padding: 32, flexDirection: 'row' },
  buttonSuccess: { backgroundColor: '#00A884', paddingVertical: 16, borderRadius: 16, marginBottom: 15, flex: 1, marginRight: 10, },
  buttonError: { backgroundColor: '#FC7300', paddingVertical: 16, borderRadius: 16, marginBottom: 15, flex: 1 },
  buttonAlertSuccess: { backgroundColor: '#00A884', paddingVertical: 15, paddingHorizontal: 50, marginBottom: 10, borderRadius: 16 },
  buttonAlertError: { backgroundColor: '#FC7300', paddingVertical: 15, paddingHorizontal: 50, marginBottom: 15, borderRadius: 16 },

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
    backgroundColor: '#FC7300',
    borderRadius: 50,
    width: '100%',
  },
})