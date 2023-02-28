import {MEALS, CATEGORIES} from "../Data/DataInput";
import { useLayoutEffect } from "react";
import MealsList from "../Components/MealsList";

function CategoryItems({route,navigation})
{
    const catId = route.params.categoryId;
    const selectedMeal = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    });
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((item) => item.id === catId).title;
        navigation.setOptions({
            title:categoryTitle
        })
    },[catId,navigation])
    console.log(selectedMeal)
    return <MealsList SelectedMealList = {selectedMeal} navigation = {navigation}></MealsList>
}
export default CategoryItems;