import { Ionicons } from "@expo/vector-icons";
import { Pressable, View , StyleSheet} from "react-native";

export default function IconAdd({icon,color,size,onPressAction})
{
    return (
        <Pressable onPress={onPressAction} android_ripple={"white"} style={({pressed}) => pressed && styles.onPressAction}>
            <View style={styles.container}>
                <Ionicons name={icon} color={color} size={size}></Ionicons>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container:{
        margin:10,
        padding:5,
    },
    onPressAction:{
        opacity:0.5
    }
})