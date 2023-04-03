import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet , Text, View} from "react-native";
import Colors from "../Colors/Color";

function IconTitleButton({icon,color,size, pressButton, children})
{
    return <View>
            <Pressable onPress={pressButton} style={({pressed}) => [styles.iconStyle, pressed && styles.pressed]}>
            <Ionicons name={icon} color={color} size={size} style={styles.icon}></Ionicons>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    </View>
}

const styles= StyleSheet.create({
    pressed : {
        color:Colors.grey200,
        opacity:0.5,
    },
    iconStyle:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:24,
        height:32,
        borderColor: Colors.grey200,
    },
    text:{
        padding:3,
        color:Colors.grey200,
        fontWeight:'bold',
        fontSize:14
    },
})
export default IconTitleButton;