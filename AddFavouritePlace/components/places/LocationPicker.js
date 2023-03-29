import { View, Text , Alert,StyleSheet,Image} from "react-native";
import colors from "../../styles/colors";
import {getCurrentPositionAsync, useForegroundPermissions} from 'expo-location'
import { useState, useEffect } from "react";
import { useNavigation, useRoute , useIsFocused} from "@react-navigation/native";
import IconTitleButton from "../ui/IconTitleButton";

function LocationPicker({locationDetailsHandler})
{
    const [LocationPicker, setLocationPicker] = useState()
    const isFocused = useIsFocused();
    const route = useRoute();
    const [LocationPermissionInformation, requestPermission] = useForegroundPermissions();
    const navigation = useNavigation();

    useEffect(() => {
        if(isFocused && route.params)
        {
            setLocationPicker(route.params.selectedLocation)
            locationDetailsHandler(route.params.selectedLocation)
        }
    },[route,isFocused])

    async function verifyPermissions() {
        if (LocationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
        const permissionResponse = await requestPermission();

        return permissionResponse.granted;
        }

    if (LocationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant camera permissions to use this app.'
      );
      return false;
    }

    return true;    
  }
    async function LocateUserHandler()
    {
        const hasPermission = await verifyPermissions();
        if(!hasPermission)
        {
            return;
        }
        const locationResponse = await getCurrentPositionAsync();
        setLocationPicker({
            lat : locationResponse.coords.latitude,
            lng : locationResponse.coords.longitude
        })
        locationDetailsHandler({
            lat : locationResponse.coords.latitude,
            lng : locationResponse.coords.longitude
        })
    }
    function PickLocationHandler()
    {
        navigation.navigate('Maps')
    }
    let setLocatePreview = <Text style={styles.warning}>No Location Selected</Text>
    
    if(LocationPicker)
    {
        setLocatePreview =<Image style={styles.image} ></Image>
    }

    return (
        <View>
            <View style={styles.PreviewLocationContainer}>
                {setLocatePreview}
            </View>
            <View style={styles.locateButtonContainer}>
                <IconTitleButton icon="location" color="black" size={24} pressButton={LocateUserHandler}>Locate User</IconTitleButton>
                <IconTitleButton icon="map" color="black" size={24} pressButton={PickLocationHandler}>Pick on Map</IconTitleButton>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    locateButtonContainer:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center'
    },
    PreviewLocationContainer:{
        width:'100%',
        height:200,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:colors.primary100,
        borderColor:colors.primary300,
        borderWidth:1,
        borderRadius:10,
        overflow:'hidden',
        marginVertical:5
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:10
    },
    warning:{
        color:colors.warning100,
        textAlign:'center'
    }
})
export default LocationPicker;