import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import Colors from "../../Colors/Color";

function IconButton({icon, color, size, iconAddStyle,onPressIcon})
{
    return (
        <Pressable onPress={onPressIcon} style={({pressed}) => [[styles.iconStyle, iconAddStyle], pressed && styles.pressed]}>
            <Ionicons name={icon} color={color} size={size}></Ionicons>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconStyle:{
        backgroundColor:Colors.grey20,
        color:Colors.grey200,
        borderRadius:12
    },
    pressed : {
        color:Colors.grey20,
        opacity:0.5,
    },
})

export default IconButton;