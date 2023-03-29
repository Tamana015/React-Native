import { View,Text, StyleSheet, Pressable, Image } from "react-native"
import colors from "../../styles/colors";
import { launchCameraAsync, PermissionStatus, useCameraPermissions } from "expo-image-picker";
import { useState } from "react";
import IconTitleButton from "../ui/IconTitleButton";
 
function CameraPicker({cameraDetailsHandler})
{
    const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
    const [pickedImage, SetPickedImage]= useState()
  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant camera permissions to use this app.'
      );
      return false;
    }

    return true;    
  }
async function launchCamera()
{
    const hasPermission = verifyPermissions();
    if(!hasPermission)
    {
        return;
    }
    const responseCamera= await launchCameraAsync({
        allowsEditing:true,
        aspect:[16,9],
        quality:0.5
    });
    SetPickedImage(responseCamera.assets[0].uri)
    cameraDetailsHandler(responseCamera.assets[0].uri)
}
    let setImageContainer = <Text style={styles.warning}>No Image Preview</Text>
    if(pickedImage)
    {
        setImageContainer=<Image source={{uri:pickedImage}} style={styles.image}/>
    }
    return (
        <View>
            <View style={styles.imageContainer}>
                {setImageContainer}
            </View>
            <IconTitleButton icon="camera" color="black" size={24} pressButton={launchCamera}>Take Picture</IconTitleButton>
        </View>)
}
const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:'100%',
        borderRadius:10
    },
    imageContainer:{
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
    warning:{
        color:colors.warning100,
        textAlign:'center'
    }
})
export default CameraPicker;