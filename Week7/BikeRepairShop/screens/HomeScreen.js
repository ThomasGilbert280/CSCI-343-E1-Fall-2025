import { ScrollView, Text, View, Switch, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState, useMemo } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import RadioGroup from 'react-native-radio-buttons-group';

import Colors from '../constants/Colors';
import Title from '../components/Title';
import NavButton from '../components/NavButton';



export default function HomeScreen(props) {

    const insets = useSafeAreaInsets();



  return (
    <ImageBackground
    source = {require("../assets/images/bikebackground.png")}
    resizeMode="cover"
    style={styles.container}
    imageStyle={styles.backgroundImage}
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
            <Title>Bike Repair Shop</Title>
        </View>

        <ScrollView style={styles.scrollContainer}>
            {/* Radio Buttons for Repair Time */}
            <View style={styles.radioContainer}>
                <Text style={styles.Header}>Service Time</Text>
                <RadioGroup
                    radioButtons={props.repairTimeRadioButtons}
                    onPress={props.onRepairTimeId}
                    selectedId={props.repairTimeId}
                    layout="row"
                    containerStyle={styles.radioGroup}
                    labelStyle={styles.radioLabel}
                />
            </View>

            {/* Service Option Buttons */}
            <View style={styles.rowContainer}>
                <View style={styles.checkBoxContainer}>
                    <Text style={styles.Header}>Service Options</Text>
                    <View style={styles.checkBoxGroup}>
                        {props.services.map((service) => {
                            return (
                                <BouncyCheckbox
                                    key={service.id}
                                    text={service.name + " +$" + service.price}
                                    onPress={props.onServices.bind(this, service.id)}
                                    textStyle={{
                                        fontFamily: "Note", 
                                        fontSize: 30, color: 
                                        Colors.accent500
                                    }}
                                    innerIconStyle={{
                                        borderRadius: 0,
                                        borderColor: Colors.accent500,
                                    }}
                                    iconStyle={{borderRadius: 0,}}
                                    fillColor={Colors.accent500}
                                    style={styles.checkBox}
                                />
                            )
                        })}
                        
                    </View>
                </View>
            </View>
            {/* Newsletter and Rental Membership Checkboxes */}
            <View style={styles.rowContainer}>
                <View style={styles.membershipContainer}>
                    <Text style={styles.Header}>Membership Options</Text>
                    <View style={styles.membershipSubContainer}>
                        <Text style={styles.membershipLabel}>Newsletter (Free!)</Text>
                        <Switch
                        onValueChange={props.onNewsletter}
                        value={props.newsletter}
                        thumbColor={
                            props.newsletter ? Colors.primary700 : Colors.primary700
                        }
                        trackColor={{false: "black", true: Colors.accent500}}
                        
                        />
                    </View>
                    <View style={styles.membershipSubContainer}>
                        <Text style={styles.membershipLabel}>Rental Membership +$100</Text>
                        <Switch
                        onValueChange={props.onRentalMembership}
                        value={props.rentalMembership}
                        thumbColor={
                            props.newsletter ? Colors.primary700 : Colors.primary700
                        }
                        trackColor={{false: "black", true: Colors.accent500}}
                        
                        />
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
               <NavButton onNext={props.onNext}>Submit Order</NavButton>      
            </View>
        </ScrollView>


    </View>
    </ImageBackground>
  );
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
    radioContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Header: {
        fontSize: 40,
        fontFamily: "Note",
        color: Colors.primary700,
        textAlign: 'center',
        width: '100%'
    },
    radioGroup: {
        paddingBottom: 20,
    },
    radioLabel: {
        fontSize: 16,
        color: Colors.accent500,
        fontFamily: "Note",
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 20,
    },
    checkBoxContainer: {
        width: '100%',
        justifyContent:'center'
    },
    checkBoxGroup: {
        padding: 2,
    },
    checkBox: {
        padding: 2,
    },
    membershipContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    membershipSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    membershipLabel: {
        fontSize: 20,
        fontFamily: "Note",
        color: Colors.accent500,
        padding: 10,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage:{
        opacity: 0.1
    }
});
