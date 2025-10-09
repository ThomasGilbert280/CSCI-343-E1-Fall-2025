import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View, Text } from "react-native";

import Colors from '../constants/Colors';
import Title from '../components/Title';
import NavButton from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";


export default function OrderReviewScreen(props){

    const insets = useSafeAreaInsets();


    return(
        <LinearGradient
            colors={[Colors.primary500, Colors.gradient500, "black"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
        <View 
            style={[styles.container, {
                paddingTop: insets.top, 
                paddingBottom: insets.bottom, 
                paddingLeft: insets.left, 
                paddingRight: insets.right
                },
            ]}    
        >
            <View style={styles.titleContainer}>
                <Title>Order Summary</Title>
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subTitle}>Your order has been placed with your order details below:</Text>
                </View>

                <View style={styles.orderInfoContainer}>
                    <Text style={styles.orderInfo}>Service Time:</Text>
                    <Text style={styles.orderSpecifics}>{props.repairTime}</Text>
                    <Text style={styles.orderInfo}>Services:</Text>
                    {props.services.map((item) => {
                        if (item.value){
                            return(
                                <Text key={item.id} style={styles.orderSpecifics}>
                                    {item.name} + ${item.price}
                                </Text>
                            )
                        }
                        return null;
                    })}
                </View>
                <Text style={styles.orderInfo}>Subscriptions:</Text>
                <Text style={styles.orderSpecifics}>
                    {props.newsletter ? "Newsletter" : ""}
                </Text>
                <Text style={styles.orderSpecifics}>
                    {props.rentalMembership ? "Rental Membership +$150" : ""}
                </Text>

                <View style={styles.subtitleContainer}>
                    <Text style={styles.subTitle}>Subtotal: ${props.price.toFixed(2)} </Text> 
                    <Text style={styles.subTitle}>Sales Tax: ${(props.price*0.06).toFixed(2)} </Text>
                    <Text style={styles.subTitle}>Total: ${(props.price*1.06).toFixed(2)} </Text>   
                </View>        

                <View style={styles.buttonContainer}>
                    <NavButton onNext={props.onNext}>Return to Home</NavButton>      
                </View>
            </ScrollView>            
        </View>
        </LinearGradient>                
    )
}
const styles = StyleSheet.create({
    container: {    
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        color: Colors.accent500,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: Colors.accent500,
        marginTop: 20,
        padding: 12,
    },
    scrollContainer: {
        flex: 1,
        color: Colors.accent500,
        padding: 16,
    },
    subtitleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    subTitle: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.primary700,
    },
    orderInfoContainer:{
        flex: 3
    },
    orderInfo: {
        fontSize: 20,
        color: Colors.primary700,
        fontFamily: "Note",
    },
    orderSpecifics: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15,
        color: Colors.primary700

    },
        buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})