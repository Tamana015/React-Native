import { Text, View, StyleSheet, Image, ScrollView, Button } from "react-native";
import { MEALS } from "../Data/DataInput";
import MealSubList from "../Components/MealSubList";
import { useLayoutEffect, useContext, useEffect } from "react";
import Favorite from "../Components/Favorite";
import { FavouriteMealContext } from "../Store/Context/FavouriteContex";

function MealOverView({route, navigation})
{
    const FavouriteMeal =useContext(FavouriteMealContext)
    const mealId = route.params.mealId;
    const mealsDetails = MEALS.find((Meal) => Meal.id === mealId)
    const IsMealFavourite = FavouriteMeal.ids.includes(mealId)
    function addFavoriteHandler()
    {
        if(IsMealFavourite)
        {
            FavouriteMeal.removeFavorite(mealId)
        }
        else{
            FavouriteMeal.addFavorite(mealId)
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight : () => {return <Favorite icon={"heart"} color={IsMealFavourite ? "red" : "white"} onPressItem={addFavoriteHandler}></Favorite>}
        })
    },[navigation,addFavoriteHandler])
    return (
        <>
        <ScrollView style={styles.container} key={mealId}>
            <View style={styles.mealItem}>
            <View>
                <Image source={{uri: mealsDetails.imageUrl}} style={styles.image}></Image>
                <Text style={styles.title}>{mealsDetails.title}</Text>
            </View>
            <View style={styles.mealsDetail}>
                <View><Text style={styles.text}>{mealsDetails.affordability.toUpperCase()}</Text></View>
                <View><Text style={styles.text}>{mealsDetails.complexity.toUpperCase()}</Text></View>
                <View><Text style={styles.text}>{mealsDetails.duration}</Text></View>
            </View>
            <View style={styles.subItem}>
                <Text style={styles.subTitle}>Ingredients</Text>
                <View>{mealsDetails.ingredients.map((ingredient) => {return <MealSubList>{ingredient}</MealSubList>})}</View>
            </View>
            <View style={styles.subItem}>
                <Text style={styles.subTitle}>Steps</Text>
                <View>{mealsDetails.steps.map((step) => {return <MealSubList>{step}</MealSubList>})}</View>
            </View>
        </View>
        </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    mealItem:{
        margin:10,
        justifyContent:"center",
        padding:5,
        backgroundColor:"#0059b3",
        elevation:10,
        borderRadius:10,
    },
    image:{
        width:"90%",
        height:300,
        borderRadius:10,
        marginHorizontal:20,
        borderColor:"white",
        borderWidth:0.5
    },
    title:{
        color:"#ff0000",
        fontWeight:"bold",
        fontSize:20,
        textAlign:"center",
        padding:5
    },
    text:{
        color:"white",
        fontWeight:"bold",
        textAlign:"center",
        fontSize:13
    },
    mealsDetail:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:50,
        padding:5
    },
    subTitle:{
        color:"#ff0000",
        fontWeight:"bold",
        fontSize:20,
        textAlign:"center",
        padding:5,
        borderBottomColor:"white",
        borderBottomWidth:2,
        marginBottom:5
    },
    subItem:{
        justifyContent:"center",
        textAlign:"center",
        width:"80%",
        marginHorizontal:"10%",
        margin:10
    }
})
export default MealOverView;