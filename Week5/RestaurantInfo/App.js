import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BaseScreen from './screens/BaseScreen.js';
import MenuScreen from './screens/MenuScreen.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Colors from './constants/colors.js';

export default function App() {

  const [fontsLoaded] = useFonts({
    "fjalla-one": require("./assets/fonts/FjallaOne-Regular.ttf"),
  })

  const [currentScreen, setCurrentScreen] = useState('base');

  function menuScreenHandler() {
    setCurrentScreen('menu');
  }

  function baseScreenHandler() {
    setCurrentScreen('base');
  }

  let screen = <BaseScreen onNext={menuScreenHandler}/>;

  if (currentScreen == 'menu') {
    screen = <MenuScreen onNext={baseScreenHandler} />;
  }
  return (
    <>
    <StatusBar style="light" />
    <SafeAreaProvider style={styles.container}>
      {screen}
    </SafeAreaProvider>
    
    
    
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
