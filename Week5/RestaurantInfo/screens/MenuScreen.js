import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from '../components/Title.js';
import MenuItem from '../components/MenuItem.js';
import Colors from '../constants/colors.js';

export default function MenuScreen({ onNext }) {
    const insets = useSafeAreaInsets(); 
    
    const [menuItems, setMenuItems] = useState([
        {
            name: "Classic Meal (4 tenders)",
            image: require("../assets/images/slimsmeal.jpg"),
            price: "$10.29",
            id: 1 
        },
        {
            name: "Hungry Meal (7 tenders)",
            image: require("../assets/images/hungrymeal.jpg"),
            price: "$13.99",
            id: 2 
        },
        {
            name: "Crispy Chicken Sandwich Meal",
            image: require("../assets/images/chickensandwichmeal.jpg"),
            price: "$8.49",
            id: 3 
        },
        {
            name: "Chicken Club Sandwich Meal",
            image: require("../assets/images/chickenclubmeal.jpg"),
            price: "$11.29",
            id: 4 
        },
        {
            name: "Chicken & Waffles",
            image: require("../assets/images/chickenwaffles.jpg"),
            price: "$9.79",
            id: 5 
        },
    ]);


    return (
        <View style={[
        styles.rootContainer, 
        {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }
        ]}>
            <View style={styles.titleContainer}>
                <Title>Menu</Title>
            </View>

            <View style={styles.menuContainer}>
                <FlatList
                data={menuItems}
                keyExtractor={(item, index) => {return item.id}}
                alwaysBounceVertical={false}
                showsVerticalScrollIndicator={false}
                renderItem={(itemData) => {
                    return (
                        <MenuItem 
                        name={itemData.item.name}
                        image={itemData.item.image}
                        price={itemData.item.price} />
                    );
                }}
            />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Main Menu" onPress={onNext} color={Colors.primary500}/>
            </View>               
        </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  menuContainer: {
    flex: 7,
    width: '90%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 40,
    width: 200,
  },
});
