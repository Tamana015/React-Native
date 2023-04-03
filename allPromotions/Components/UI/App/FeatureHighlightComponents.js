import { StyleSheet, Text, View } from "react-native"
import IconButton from "../IconButton"
import Colors from "../../../Colors/Color"
import { AntDesign,MaterialIcons } from "@expo/vector-icons"

export default function FeatureHighlightComponent({isReturnable})
{
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.iconBoxConainter}>
                    <AntDesign name="contacts" size={32} color={Colors.Blue100} style={styles.iconStyle}/>
                </View>
                <Text style={styles.textStyle}>No-Contact Delivery</Text>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.iconBoxConainter}>
                    <MaterialIcons name="assignment-return" size={32} color={Colors.Blue100} style={styles.iconStyle}/>
                </View>
                <Text style={styles.textStyle}>Returanable</Text>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.iconBoxConainter}>
                    <MaterialIcons name="loop" size={32} color={Colors.Blue100} style={styles.iconStyle}/>
                </View>
                <Text style={styles.textStyle}>Store exchange</Text>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.iconBoxConainter}>
                    <MaterialIcons name="star-outline" size={32} color={Colors.Blue100} style={styles.iconStyle}/>
                </View>
                <Text style={styles.textStyle}>2 Year Warrantly</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:35,
        flexDirection:'row',
    },
    innerContainer:{
        flex:1,
        flexDirection:'column',
        minWidth:80,
    },
    iconBoxContainer:{
        width:32,
        height:32,
    },
    textStyle:{
        width:80,
        lineHeight:16,
        fontSize:13,
        marginTop:8,
        textAlign:'center',
        alignSelf:'center',
        color:Colors.Blue100
    },
    iconStyle:{
        alignSelf:'center'
    }
})