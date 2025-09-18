import { StyleSheet, Text, View, Image } from 'react-native';

export default function Movie(props) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemTitleContainer}>
                <Text style={styles.itemTitle}>{props.name}</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.moviePoster} 
                source={props.image}/>
            </View>

            <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{props.rating}/10</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemTitleContainer: {
        backgroundColor: "white",
        paddingHorizontal: 5,
        borderWidth: 3,
        borderRadius: 5
    },
    itemTitle: {
        fontSize: 30,
        textAlign: "center"
    },
    itemContainer: {
        marginBottom: 20
    },
    imageContainer: {
        alignItems: "center",
        borderWidth: 3,
        borderRadius: 5
    },
    moviePoster: {
        width: "100%",
        height: 540,
        resizeMode: "cover"
    },
    ratingContainer: {
        backgroundColor: "white",
        paddingHorizontal: 5,
        borderWidth: 3,
        borderRadius: 5
    },
    rating: {
        fontSize: 30,
        textAlign: "center"
    }
});