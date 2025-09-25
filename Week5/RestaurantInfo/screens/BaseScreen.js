import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from '../components/Title.js';
import Colors from '../constants/colors.js';


export default function BaseScreen(props) { 
        const insets = useSafeAreaInsets(); 
    return (
        <View style={[
        styles.rootContainer, 
        {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }
        ]}>
            <View style={styles.titleContainer}>
                <Title>Slim Chickens</Title>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source = {require("../assets/images/slimchickens.jpg")}/>
            </View>

            <View style={styles.infoContainer}>
                <Text 
                style={styles.infoText}
                onPress={() => Linking.openURL("tel:8432136747")}>
                (843) 213-6747</Text>

                <Text 
                style={styles.infoText}
                onPress={() => Linking.openURL("https://maps.app.goo.gl/SA99peucmu6EFvMD7")}>
                135 Sapwood Road{"\n"}
                Myrtle Beach, SC, 29579</Text>

                <Text 
                style={styles.infoText}
                onPress={() => Linking.openURL("https://www.slimchickens.com/")}>
                www.slimchickens.com</Text>

            </View>

            <View style={styles.buttonContainer}>
                <Button title="View Menu" onPress={props.onNext} color={Colors.primary500}/>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 4
  },
  image: {
    resizeMode: "contain",
    height: "100%",
    width: 380  
  },
  infoContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 30,
    textAlign: 'center',
    padding: 7,
    fontFamily: "fjalla-one",
    color: 'white'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    width: 200,
  },
});
