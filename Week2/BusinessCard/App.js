import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <SafeAreaView style={styles.root}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("./assets/images/business_image.jpeg")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text 
          style={styles.name}>Worldfire Games</Text>
          <Text style={styles.text}
          onPress={ () => {Linking.openURL("https://worldfiregames.tcgplayerpro.com/")} }
          >worldfiregames.tcgplayerpro.com</Text>
          <Text style={styles.text}
          onPress={ () => {Linking.openURL("tel:8436500083")} }
          >843-650-0083</Text>
          <Text style={styles.text}
          onPress={ () => {Linking.openURL("https://maps.app.goo.gl/QdT8h8oY4AYZXYtS9")} }
          >Open in Google Maps</Text>
        </View>
      </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4f4f4fff"
  },
  textContainer: {
    flex: 5,
    width: "100%",
    alignItems: "center"
  },
  name: {
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
    marginBottom: 80
  },
  text: {
    fontSize: 25,
    color: "white",
    fontStyle: "italic",
    marginBottom: 15
  },
  imageContainer: {
    flex: 3,
    marginTop: 150
  },
  image: {
    height: 250, 
    resizeMode: "cover",
    borderColor: "black",
    borderWidth: 5
  }
});
