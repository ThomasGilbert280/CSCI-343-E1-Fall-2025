import { StyleSheet, Text, View } from 'react-native';
import NavButton from '../components/NavButton';
import Colors from '../constants/Colors';



export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>add recipe screen</Text>

      <View>
        <NavButton onNext={props.onBack}>Cancel</NavButton>
      </View>
      
      <View>
        <NavButton onNext={props.onNext}>Add Recipe</NavButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
