import { View, Text, FlatList } from "react-native";
import CountryGridTile from "../components/CountryGridTitle";
import { COUNTRIES } from "../data/dummy-data";

export default function HomeScreen(props) {
  function renderCountryItem(itemData) {
    function pressHandler() {
      props.navigation.navigate("VacationOverview", {
        countryId: itemData.item.id,
      });
    }
    return (
      <CountryGridTile
        name={itemData.item.name}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <View>
      <FlatList
        data={COUNTRIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCountryItem}
        numColumns={2}
      />
    </View>
  );
}
