import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';

import HomeScreen from './screens/HomeScreen';
import RecipeScreen from './screens/RecipeScreen';
import AddRecipeScreen from './screens/AddRecipeScreen';
import Colors from './constants/Colors';
import NavButton from './components/NavButton';   




export default function App() {
  const [fontsLoaded] = useFonts({
    Note: require('./assets/fonts/Note.ttf'),
    PNBold: require('./assets/fonts/Papernotes Bold.ttf'),
    PNSketch: require('./assets/fonts/Papernotes Sketch.ttf'),
    Papernotes: require('./assets/fonts/Papernotes.ttf'),
  });
  
  const [currentScreen, setCurrentScreen] = useState('home');
  const [currentID, setCurrentID] = useState(4);
  const [currentRecipes, setRecipes] = useState([
    {id: 1, title: 'Spaghetti Bolognese', instructions: 'Cook spaghetti.\n Brown beef.\n Mix with sauce.'},
    {id: 2, title: 'Chicken Curry', instructions: 'Cook chicken.\n Add curry powder and coconut milk.\n Simmer.'},
    {id: 3, title: 'Grilled Cheese Sandwich', instructions: 'Butter bread.\n Place cheese between slices.\n Grill until golden brown.'},
  ]);

  function homeScreenHandler() {
    setCurrentScreen('home');
  }

  function recipeScreenHandler() {
    setCurrentScreen('recipe');
  }

  function addRecipeScreenHandler() {
    setCurrentScreen('addRecipe');
  }

  function addRecipeHandler(title, instructions) {
    setRecipes((currentRecipes) => [
      ...currentRecipes,
      {id: currentID, title: enteredTitle, instructions: enteredInstructions},
    ]);
    setCurrentID(currentID + 1);
    setCurrentScreen('recipe');
  }

  function deleteRecipeHandler(id) {
    setRecipes((currentRecipes) => {
      return currentRecipes.filter((recipe) => recipe.id !== id);
    });
  }

  let screen = <HomeScreen onNext={recipeScreenHandler} />;
  
  if (currentScreen === 'recipe') {
    screen = (
    <RecipeScreen 
    onNext={addRecipeScreenHandler} 
    onBack={homeScreenHandler}
    onDelete={deleteRecipeHandler}
    currentRecipes={currentRecipes}
    />
    );
  } 
  
  if (currentScreen === 'addRecipe') {
    screen = (
    <AddRecipeScreen 
    onBack={recipeScreenHandler}
    onAdd={addRecipeHandler}
     />
    );
  }
  
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>
        {screen}
      </SafeAreaProvider>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800 ,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
