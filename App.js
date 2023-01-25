import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import BelajarUseState from './src/belajar/BelajarUseState';
import Belajar from './src/belajar/Belajar';

import AppContext, { AppProvider } from './src/screen/AppContext';
import BelajarUseContext from './src/belajar/BelajarUseContext';
import Busket from './src/belajar/Busket';
import BelajarFancyAlert from './src/belajar/BelajarFancyAlert';

import Basket from './src/ujian/Basket';
import Product from './src/ujian/Product';
import LoginFancy from './src/ujian/LoginFancy';
import BelajarSVG from './src/belajar/BelajarSVG';
import BelajarRadioButton from './src/belajar/BelajarRadioButton';
import BelajarCheckBox from './src/belajar/BelajarCheckBox';
import SignUp from './src/ujian/SignUp';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Belajar' component={Belajar} options={{ title: "Belajar Mas Bro" }} />
          <Stack.Screen name='BelajarUseContext' component={BelajarUseContext} options={{ title: "Basic UseStates" }} />
          <Stack.Screen name='BelajarUseState' component={BelajarUseState} options={{ title: "Basic UseStates" }} />
          <Stack.Screen
            name="Busket"
            component={Busket}
            options={({ route }) => ({ title: `Total Quantity : ${route.params.qty}` })} />
          <Stack.Screen name='Product' component={Product} options={{ title: 'Product Page' }} />
          <Stack.Screen name='Basket' component={Basket} options={{ headerShown: true }} />
          <Stack.Screen name='Alert' component={BelajarFancyAlert} options={{ headerShown: true }} />
          <Stack.Screen name='LoginFancy' component={LoginFancy} options={{ headerShown: true }} />
          <Stack.Screen name='Svg' component={BelajarSVG} options={{ headerShown: false }} />
          <Stack.Screen name='RadioButton' component={BelajarRadioButton} options={{ headerShown: true }} />
          <Stack.Screen name='CheckBox' component={BelajarCheckBox} options={{ headerShown: true }} />
          <Stack.Screen name='SignUpPage' component={SignUp} />
        </Stack.Navigator>


      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
