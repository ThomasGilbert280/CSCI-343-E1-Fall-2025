import { StyleSheet, Text, View, Image, TextInput,  ScrollView  } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';

import Title from '../components/Title';
import NavButton from '../components/NavButton';
import Colors from '../constants/Colors';


export default function AddRecipeScreen(props) {
    
    const insets = useSafeAreaInsets();

    const [recipeTitle, setRecipeTitle] = useState('');
    const [recipeText, setRecipeText] = useState('');

  function addRecipeHandler() {
    props.onAdd(recipeTitle, recipeText);
    props.onBack();
  }

  return (
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
            <Title>Add New Recipe</Title>
        </View>
        
        <View style={styles.scrollContainer}>
          <ScrollView>
            <View style={styles.recipeTitleContainer}>
              <TextInput 
              style={styles.recipeTitle}
              onChangeText={setRecipeTitle}
              placeholder="Enter Recipe Title"
              />
            </View>

            <View style={styles.noteTextContainer}>            
              <TextInput 
              style={styles.recipeText}
              onChangeText={setRecipeText}
              textAlignVertical='top'
              multiline={true}
              numberOfLines={20}
              placeholder="Enter Recipe Text"
              />
            </View>

            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                  <NavButton onNext={addRecipeHandler}>Add Recipe</NavButton>
              </View>
        <View style={styles.button}>
          <NavButton onNext={props.onBack}>Cancel</NavButton>
        </View>

            </View>
          </ScrollView>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '90%',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  scrollContainer: {
    flex: 8,
  },
  recipeTitleContainer: {
    marginVertical: 10,
  },
  recipeTitle: {
    fontSize: 18,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    padding: 6,
    backgroundColor: Colors.primary100, 
  },
  noteTextContainer: {
    flex: 1,
    marginVertical: 10,
  },
  recipeText: {
    fontSize: 16,
    borderColor: Colors.primary700,
    borderWidth: 2,
    padding: 6,
    backgroundColor: Colors.primary100, 
    height: 250,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    marginHorizontal: 2,
  },
});
