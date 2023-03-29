import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

function IconButton({icon, color, size, onPressIcon})
{
    return (
        <Pressable onPress={onPressIcon}>
            <Ionicons name={icon} color={color} size={size}></Ionicons>
        </Pressable>
    )
}

export default IconButton;