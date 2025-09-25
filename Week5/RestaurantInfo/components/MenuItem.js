import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../constants/colors.js';

export default function MenuItem(props) {
	return (
		<View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.name}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={props.image} />
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>{props.price}</Text>
            </View>
		</View>
	);
}

const styles = StyleSheet.create({
	itemContainer: {
		marginBottom: 30,
	},
    titleContainer: {
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: Colors.primary500
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: "fjalla-one",
    },
    imageContainer: {
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: "black"
    },
    image: {
        width: "100%",
        height: 240,
        resizeMode: "contain"
    },
    priceContainer: {
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: Colors.primary500
    },
    price: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: "fjalla-one",
    },
});
