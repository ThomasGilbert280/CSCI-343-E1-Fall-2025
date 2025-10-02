import { StyleSheet, Text, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Title from '../components/Title';
import NavButton from '../components/NavButton';
import Colors from '../constants/Colors';

export default function HomeScreen(props) {
    
    const insets = useSafeAreaInsets();

  return (
    <View 
        style={[styles.rootContainer, {
            paddingTop: insets.top, 
            paddingBottom: insets.bottom,
            paddingLeft: insets.left, 
            paddingRight: insets.right,
            },
        ]}
    >
        <View style={styles.titleContainer}>
            <Title>Recipe Book</Title>
        </View>

        <View style={styles.imageContainer}>
            <Image 
                style={styles.image} 
                source={require('../assets/images/kitchen.png')} 
            />
        </View>
    

        <View style={styles.buttonContainer}>
            <NavButton onNext={props.onNext}>Go to Recipes</NavButton>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '90%',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    resizeMode: 'stretch',
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
