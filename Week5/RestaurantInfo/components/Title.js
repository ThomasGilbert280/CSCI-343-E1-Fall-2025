import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Title(props) {
	return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
	title: {
		fontSize: 50,
        textAlign: 'center',
        fontFamily: "fjalla-one",
        color: 'white',
	},
});
