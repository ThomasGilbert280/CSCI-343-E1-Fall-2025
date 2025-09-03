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
            source={require("./assets/images/self_picture.jpg")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text 
          style={styles.name}>Thomas Gilbert</Text>
          <Text style={styles.text}
          onPress={ () => {Linking.openURL("mailto:thomasgilbert280@gmail.com")} }
          >thomasgilbert280@gmail.com</Text>
          <Text style={styles.text}
          onPress={ () => {Linking.openURL("tel:6152415012")} }
          >615-241-5012</Text>
          <Text style={styles.text}
          onPress={ () => {Linking.openURL("https://github.com/ThomasGilbert280/CSCI-343-E1-Fall-2025")} }
          >GitHub Repository</Text>
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
    flex: 4,
    marginTop: 100
  },
  image: {
    height: 300, 
    resizeMode:"contain",
    borderColor: "black",
    borderWidth: 5
  }
});
