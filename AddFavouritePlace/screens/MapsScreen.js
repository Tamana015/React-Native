import MapView,{Marker} from "react-native-maps";
import { Alert, StyleSheet, View } from "react-native";
import { useCallback, useLayoutEffect, useState } from "react";
import IconButton from "../components/ui/IconButton";
import { useNavigation } from "@react-navigation/native";

const region = {
    latitude: 32,
    longitude: 75,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
function MapsScreen({navigation})
{
    const [selectedLocation, SetSelectedLocation] = useState()
    const navigations = useNavigation();
    const saveSelectedLocation = useCallback(() =>
    {
        if(!selectedLocation)
        {
            Alert.alert("Location Not Picked",'Kindly Select the Location from the map');
            return;
        }   
        navigations.navigate('AddPlaces',{selectedLocation});
    },[navigation,selectedLocation])
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight : () => <IconButton icon="save" color="white" size={24} pressButton={saveSelectedLocation}/>
        })
    })
    function selectLocationHandler(event)
    {
        SetSelectedLocation(event.nativeEvent.coordinate)
    }
    return <MapView style={styles.mapsContainer}
                initialRegion={region} onPress={selectLocationHandler}>
             {selectedLocation && (
            <Marker
            title="Picked Location"
            coordinate={{
                latitude: selectedLocation.latitude,
                longitude: selectedLocation.longitude,
            }}
            />
        )}</MapView>
}

const styles= StyleSheet.create({
    mapsContainer:{
        flex:1
    }
})
export default MapsScreen;