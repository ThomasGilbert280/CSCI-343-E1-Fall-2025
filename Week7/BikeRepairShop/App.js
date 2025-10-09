import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useMemo, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Colors from './constants/Colors';
import HomeScreen from './screens/HomeScreen';
import OrderReviewScreen from './screens/OrderReviewScreen';


SplashScreen.preventAutoHideAsync();




export default function App() {

  const [loaded] = Font.useFonts({
    'Note': require('./assets/fonts/Note.ttf'),
    'PNSketch': require('./assets/fonts/Papernotes Sketch.ttf'),
  })

  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.accent500,
        color: Colors.accent500,       
      },
      {
        id: "1",
        label: "Expedited +$50",
        value: "Expedited",
        price: 50,
        borderColor: Colors.accent500,
        color: Colors.accent500,
      },
      {
        id: "2",
        label: "Next Day +$100",
        value: "Next Day",
        price: 100,
        borderColor: Colors.accent500,
        color: Colors.accent500,
      },
    ],
    []
  );

  const [repairTimeId, setRepairTimeId] = useState(0);
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

function setServicesHandler(id) {
  setServices((currentServices) =>
    currentServices.map((service) =>
      service.id === id ? { ...service, value: !service.value } : service
    )
  );
}

function setNewsletterHandler() {
  setNewsletter((current) => !current);
}

function setRentalMembershipHandler() {
  setRentalMembership((current) => !current);
}

function homeScreenHandler(){
  setCurrentPrice(0);
  setRepairTimeId(0);
  setServices((currentServices) =>
  currentServices.map((service) =>
    true ? { ...service, value: false} : service
    )
  );
  setNewsletter(false);
  setRentalMembership(false);
  setCurrentScreen("");
}

function orderReviewHandler(){
  let price = 0;
  for (let i = 0; i < services.length; i++){
    if (services[i].value){
      price = price + services[i].price
    }
  }
  if (rentalMembership) {
    price = price + 100
  }
  price = price + repairTimeRadioButtons[repairTimeId].price;

  setCurrentPrice(price);
  setCurrentScreen("review")

};


let screen;

if (currentScreen === "review") {
  screen = (
    <OrderReviewScreen
      repairTime={repairTimeRadioButtons[repairTimeId].label}
      services={services}
      newsletter={newsletter}
      rentalMembership={rentalMembership}
      price={currentPrice}
      onNext={homeScreenHandler}
    />
  );
} else {
  screen = (
    <HomeScreen
      repairTimeId={repairTimeId}
      services={services}
      newsletter={newsletter}
      rentalMembership={rentalMembership}
      repairTimeRadioButtons={repairTimeRadioButtons}
      onRepairTimeId={setRepairTimeId}
      onServices={setServicesHandler}
      onNewsletter={setNewsletterHandler}
      onRentalMembership={setRentalMembershipHandler}
      onNext={orderReviewHandler}
    />
  );
}


  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>
        {screen}
      </SafeAreaProvider>
    </>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
