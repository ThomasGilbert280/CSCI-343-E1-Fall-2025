import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Colors from '../constants/Colors';

export default function Title(props) {
	return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
	title: {
		fontSize: 50,
        color: Colors.primary500,
        textShadowColor: Colors.accent500,
        textShadowRadius: 20,
        textAlign: 'center',
        fontFamily: "PNSketch",
	},
});
