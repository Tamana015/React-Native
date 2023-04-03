import { StyleSheet, Text, View } from "react-native"
import Colors from "../../../Colors/Color"

export default function SaveMrpContainer({margin, mrpContainerStyle})
{
    return (
        <View style={mrpContainerStyle}>
            <Text style={styles.SaveText}>Save <Text style={styles.boldText}>{margin.formattedValue}</Text></Text>
        </View>
    )   
}

const styles= StyleSheet.create({
    SaveText:{
        color:Colors.purple700,
        fontSize: 12,
        backgroundColor: Colors.purple100,
        height:24,
        justifyContent:'center',
        alignContent:'center'
    },
    boldText: {
        fontWeight: 'bold'
    },
})