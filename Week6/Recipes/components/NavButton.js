import { Text, View, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function NavButton(props) {
    return (
        <Pressable
        android_ripple={{color: Colors.accent800}}
        onPress={props.onNext}
        style={({pressed}) => pressed && styles.presseditem}
        >
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: 150,
        margin: 10,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: Colors.primary300,
    },
    presseditem: {
        opacity: 0.75,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: "Note",
    }
})