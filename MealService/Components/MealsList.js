import { FlatList,View,StyleSheet} from "react-native";
import MealItem from "../Components/MealItem";

function MealsList({SelectedMealList})
{
    function renderMealItems(itemData)
    {
        const item = itemData.item;
        const mealProperties = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,

        }
        return <MealItem {...mealProperties}></MealItem>
    }
    return (
        <View style={styles.container}>
            <FlatList data={SelectedMealList} 
                      keyExtractor={(item) => item.id} renderItem={renderMealItems}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
export default MealsList;