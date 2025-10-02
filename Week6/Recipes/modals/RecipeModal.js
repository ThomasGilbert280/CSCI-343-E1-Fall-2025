import { StyleSheet, Text, View, Modal } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import NavButton from '../components/NavButton';
import Colors from '../constants/Colors';

export default function RecipeModal(props) {
    
    const insets = useSafeAreaInsets();

  return (
    <Modal visible={props.visible} animationType="slide">
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
                <Text style={styles.title}>{props.title}</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        

            <View style={styles.buttonContainer}>
                <NavButton onNext={props.onClose}>Close Recipe</NavButton>
            </View>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.primary800,
        alignItems: 'center',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontFamily: "PNSketch",
        textAlign: 'center',
        color: Colors.primary500,
    },
    textContainer: {
        flex: 4,
        width: '90%',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: Colors.primary500,
        padding: 10,
    },
    text: {
        fontSize: 24,
        fontFamily: "Papernotes",
        color: Colors.accent500,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 10,
    },




});
