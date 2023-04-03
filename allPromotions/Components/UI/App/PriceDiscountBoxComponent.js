import { Text,StyleSheet, View } from "react-native"
import Colors from "../../../Colors/Color"

export default function PriceDiscountContainer({mrp,margin,price})
{
    return (
        <View>
            <Text style={[styles.mrpText,styles.boldText]}>{mrp.formattedValue}</Text>
            <Text style={[styles.priceText, margin.formattedValue ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : [styles.mrpText,styles.boldText]]}>{price.formattedValue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mrpText:{
        color:Colors.purple700,
        "fontFamily": "normal",
        "fontSize": 14,
        paddingVertical:2,
    },
    priceText:{
        color:Colors.grey5,
        "fontFamily": "normal",
        "fontSize": 13
    },
    boldText: {
        fontWeight: 'bold'
    },
})