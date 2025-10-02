import { StyleSheet, Text, View, Button } from 'react-native';
import Colors from '../constants/Colors';


export default function RecipeItem(props) {
    return (
        <View style={styles.item}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="View" onPress={props.onView} />
                </View>

                <View style={styles.button}>
                    <Button title="Delete" onPress={props.onDelete} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        margin: 8,
        borderRadius: 6,
        backgroundColor: Colors.accent500,
    },
    titleContainer: {
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontFamily: "PNBold",
        padding: 8,
    },
    buttonContainer: {
        flexDirection: 'row',

    },
    button: {
        marginHorizontal: 3,
        marginVertical: 5,
    },
});