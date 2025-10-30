import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "./constants/Colors";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome6
} from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import WorldNewsScreen from "./screens/WorldNewsScreen";
import USNewsScreen from "./screens/USNewsScreen";
import GamingNewsScreen from "./screens/GamingNewsScreen";
import BookmarkScreen from "./screens/BookmarkScreen";

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "PFBold",
          fontSize: 40,
          color: Colors.accent800,
        },
        sceneContainerStyle: { backgroundColor: Colors.primary300 },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={TabNavigator}
        options={{
          title: "Latest News",
          drawerLabel: "All News",
          drawerIcon: ({ color, size }) => (
            <Entypo name="news" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Bookmarks"
        component={BookmarkScreen}
        options={{
          title: "Bookmarks",
          drawerLabel: "Bookmarked Articles",
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmark" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary500o8,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300o5,
        tabBarLabelStyle: { fontFamily: "Playfair", fontSize: 16 },
        tabBarStyle: { backgroundColor: Colors.primary500 },
      }}
    >
      <Tabs.Screen 
      name="World" 
      component={WorldNewsScreen} 
      options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="globe" color={color} size={size} />
          ),
          tabBarLabel: "Global News",
          
        }}
      />
      <Tabs.Screen
        name="US"
        component={USNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="flag-usa" color={color} size={size} />
          ),
          tabBarLabel: "USA News",
          
        }}
      />
      <Tabs.Screen 
      name="Gaming" 
      component={GamingNewsScreen}
      options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="game-controller" color={color} size={size} />
          ),
          tabBarLabel: "Gaming News",
          
        }}
         />
    </Tabs.Navigator>
  );
}

export default function App() {
  const [loaded] = Font.useFonts({
    Playfair: require("./assets/fonts/Playfair.ttf"),
    PFBold: require("./assets/fonts/PlayfairBold.ttf"),
    PFBoldItalic: require("./assets/fonts/PlayfairBoldItalic.ttf"),
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
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="DrawerScreen"
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.primary300,
            contentStyle: { backgroundColor: "black" },
          }}
        >
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="NewsDetail"
            component={NewsDetailScreen}
            options={{ headerBackTitleVisible: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
