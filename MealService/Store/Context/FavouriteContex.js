import { createContext, useState } from "react";

export const FavouriteMealContext = createContext({
    ids : [],
    addFavorite : (id) => {},
    removeFavorite : (id) => {},  
});
function FavouriteContext({children})
{
    const [FavouriteMeals, setFavouriteMeals] = useState([]);

    function addFavorite(id)
    {
        setFavouriteMeals((currentFavourite) => [...currentFavourite,id])
    }
    function removeFavorite(id)
    {
        setFavouriteMeals((currentFavourite) => currentFavourite.filter((mealId) => mealId !== id))
    }
    
    const value = {
        ids : FavouriteMeals,
        addFavorite :addFavorite,
        removeFavorite : removeFavorite
    }
    return (<FavouriteMealContext.Provider value={value}>{children}</FavouriteMealContext.Provider>)
}

export default FavouriteContext;