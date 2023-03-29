import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import colors from "../../styles/colors";

function IconButton({icon,color,size, pressButton})
{
    return <Pressable onPress={pressButton} style={({pressed}) => [styles.iconStyle, pressed && styles.pressed]}>
        <Ionicons name={icon} color={color} size={size}></Ionicons>
    </Pressable>
}

const styles= StyleSheet.create({
    pressed : {
        color:colors.primary200,
        opacity:0.5,

    },
    iconStyle:{
        padding:5
    }
})
export default IconButton;