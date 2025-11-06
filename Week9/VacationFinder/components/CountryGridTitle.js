import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";

export default function CountryGridTitle(props) {
    return (
        <View style={styles.gridItem}>
            <Pressable
            style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null,
            ]}
            onPress={props.onPress}
            android_ripple={{ color: Colors.accent1o75 }}
            >
                <LinearGradient 
                colors={[
                    props.color,
                    props.color,
                    props.color,
                    props.color,
                    Colors.accent1o75
                ]}
                style={styles.innerContainer}
                >
                    <Text style={styles.title}>
                        {props.name}
                    </Text>
                </LinearGradient>
            </Pressable>
        </View>

    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        borderRadius: 8,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontFamily: "Note",
        fontSize: 18,
        color: "white",
        textAlign: "center",
    },
});


