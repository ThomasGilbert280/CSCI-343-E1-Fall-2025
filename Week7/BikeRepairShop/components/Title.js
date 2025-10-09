import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function Title(props) {
	return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
	title: {
		fontSize: 50,
        color: Colors.primary600,
        textShadowColor: Colors.primary700,
        textShadowRadius: 20,
        textAlign: 'center',
        fontFamily: "PNSketch",
	},
});
