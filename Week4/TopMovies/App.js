import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { SafeAreaView, FlatList, ScrollView } from 'react-native-safe-area-context';
import Movie from "./components/Movie";



export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      name: 'Click (2006)',
      image: require('./assets/images/click2006.jpg'),
      rating: '10.0',
    },
    {
      name: 'The Godfather',
      image: require('./assets/images/thegodfather.jpg'),
      rating: '9.2',
    },
    {
      name: 'The Lord of the Rings: Return of the King',
      image: require('./assets/images/lotrrotk.jpg'),
      rating: '9.0'
    },
    {
      name: 'Pulp Fiction',
      image: require('./assets/images/pulpfiction.jpg'),
      rating: '8.8',
    },
    {
      name: 'Forrest Gump',
      image: require('./assets/images/forrestgump.jpg'),
      rating: '8.8',
    },
    {
      name: 'Star Wars Episode V: The Empire Strikes Back',
      image: require('./assets/images/starwarstesb.jpg'),
      rating: '8.7',
    },
    {
      name: 'The Matrix',
      image: require('./assets/images/thematrix.jpg'),
      rating: '8.7',
    },
    {
      name: 'Interstellar',
      image: require('./assets/images/interstellar.jpg'),
      rating: '8.7',
    },
    {
      name: 'Terminator 2: Judgement Day',
      image: require('./assets/images/terminatortwo.jpg'),
      rating: '8.6',
    },
    {
      name: 'Back to the Future',
      image: require('./assets/images/backtothefuture.jpg'),
      rating: '7',
    },
  ]);
  return (
    <>
      <StatusBar style='dark'/>
      <SafeAreaView style = {styles.rootContainer}>
        <View style = {styles.titleContainer}>
          <Text style= {styles.title}>Top 10 Movies</Text>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            alwaysBounceVertical ={false}
            showVerticalScrollIndicator={false}
            data={movieItems}
            keyExtractor={(item, index) => item.name}
            renderItem={({ item }) => (
              <Movie 
                name={item.name}
                image={item.image}
                rating={item.rating}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#177224ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 50,
    paddingHorizontal: 10,
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: "white"
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 8,
    width: "90%"
  },
});
