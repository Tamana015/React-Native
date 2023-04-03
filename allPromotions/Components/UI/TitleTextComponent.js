import { Text, View, StyleSheet } from "react-native"
import Colors from "../../Colors/Color"

export default function TitleTextComponent({numberOfLines,name,titleStyle})
{
    return (
        <View>
            <Text style={[titleStyle,styles.titleText]} numberOfLines={numberOfLines}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText:{
        "fontFamily": "normal",
        "fontSize": 14,
        "fontWeight": "400",
        "letterSpacing": 0,
        "lineHeight": 20,
        textAlign:'left',
        height:35,
        color:Colors.greyDark,
        marginVertical:3,
        lineHeight:18
    }
})