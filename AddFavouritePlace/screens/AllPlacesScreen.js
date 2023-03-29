import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlaceList from "../components/places/PlacesList";

function AllPlacesScreen({route})
{
    const [placesList, AddPlacesList] = useState([]);
    const IsFocused = useIsFocused();
    useEffect(() => {
        if(IsFocused && route.params)
        {
            AddPlacesList((curPlaces) => [...curPlaces, route.params.submitedDetails]);
            console.log(placesList[0])
          }
        }, [IsFocused, route]);
    return <PlaceList/>
}

export default AllPlacesScreen;