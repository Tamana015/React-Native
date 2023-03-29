import { useState } from "react";
import { TextInput, Text, View, StyleSheet, ScrollView } from "react-native";
import colors from "../../styles/colors";
import CameraPicker from "./CameraPicker";
import LocationPicker from "./LocationPicker";
import Button from "../ui/Button";
import Place from "../../Model/Places";
import { useNavigation } from "@react-navigation/native";

function PlacesForm({places})
{
    const [enteredTitle, SetTitle]=useState('');
    const [enteredCamera, SetCamera]=useState();
    const [enteredLocation, SetLocation]=useState();
    const navigation = useNavigation();
    function setTitelOnChange(enteredText)
    {
        SetTitle(enteredText)
    }
    function submitPickedLocationHandler()
    {
        const responseData = new Place(enteredTitle,enteredCamera,'unknown cannot able detact',enteredTitle);
        navigation.navigate('AllPlaces',submitedDetails={responseData})
    }
    function setCameraDetails(cameraDetails)
    {
        SetCamera(cameraDetails)
    }
    function setLocationDetails(locationDetails)
    {
        SetLocation(locationDetails)
    }
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>Title</Text>
                <TextInput style={styles.input} onChangeText={setTitelOnChange} value={enteredTitle}></TextInput>
            </View>
            <CameraPicker cameraDetailsHandler={setCameraDetails}/>
            <LocationPicker locationDetailsHandler={setLocationDetails}/>
            <Button submitButtonHandler={submitPickedLocationHandler}>Submit Location</Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:40
    },
    title:{
        color:colors.primary400,
        fontSize:16,
        fontWeight:'bold',
        fontStyle:'normal',
        padding:5
    },
    input:{
        backgroundColor:colors.background100,
        borderRadius:5,
        borderColor:colors.primary100,
        borderWidth:1,
        padding:3,
        marginVertical:5
    }

})

export default PlacesForm;