import { Text, View, StyleSheet } from "react-native";
import { FavouriteMealContext } from "../Store/Context/FavouriteContex";
import MealsList from "../Components/MealsList";
import { useContext } from "react";
import { MEALS } from "../Data/DataInput";

function FavoriteMeals()
{
    const MealItems = useContext(FavouriteMealContext);
    const selectedMeal = MEALS.filter((mealItem) => MealItems.ids.includes(mealItem.id));
    if(selectedMeal ==0)
    {
        return (<View style={styles.container}><Text style={styles.text}>No Favorite Item in the Cart</Text></View>)
    }
    return (
        <MealsList SelectedMealList={selectedMeal}></MealsList>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    text:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:15
    }
})
export default FavoriteMeals;