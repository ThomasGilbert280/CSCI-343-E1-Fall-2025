import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import VacationOverview from "./screens/VacationOverview";
import Colors from "./constants/Colors";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

export default function App() {
  const [loaded] = Font.useFonts({
    Note: require("./assets/fonts/Note.ttf"),
    Papernotes: require("./assets/fonts/Papernotes.ttf"),
    Mountain: require("./assets/fonts/Mountain.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary2 },
            headerTintColor: Colors.accent1,
            headerTitleStyle: { fontFamily: "Mountain", fontSize: 40 },
            contentStyle: { backgroundColor: Colors.primary3 },
            headerBackVisible: true,
            animation: 'slide_from_right'
          }}
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Vacation Finder"
            }}
          />
          <Stack.Screen
            name="VacationOverview"
            component={VacationOverview}
            options={{
              title: "Overview"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
