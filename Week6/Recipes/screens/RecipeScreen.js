import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';


import Title from '../components/Title';
import NavButton from '../components/NavButton';
import Colors from '../constants/Colors';
import RecipeItem from '../components/RecipeItem';
import RecipeModal from '../modals/RecipeModal';


export default function HomeScreen(props) {
  const insets = useSafeAreaInsets();

  const [modalRecipeTitle, setModalRecipeTitle] = useState('');
  const [modalRecipeText, setModalRecipeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function recipeModalHandler(title, text) {
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalVisible(true);
  }

  function closeModalHandler() {
    setModalVisible(false);
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
            <Title>Current Recipes</Title>
        </View>

        <View>
          <FlatList
          data={props.currentRecipes}
          keyExtractor={(item, index) => {
            return item.id;
          }} 
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <RecipeItem
                id={itemData.item.id}
                title={itemData.item.title}
                onView={recipeModalHandler.bind(this, itemData.item.title, itemData.item.text)}
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />

            );
          }}
          />
        
        
        </View>

        <RecipeModal
          visible={modalVisible}
          title={modalRecipeTitle}
          text={modalRecipeText}
          onClose={closeModalHandler}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <NavButton onNext={props.onBack}>Home Screen</NavButton>
          </View>
        
          <View style={styles.button}>
            <NavButton onNext={props.onNext}>Add New Recipe</NavButton>
          </View>
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
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 5,
  },  
});
