import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet , Text, View} from "react-native";
import colors from "../../styles/colors";

function IconTitleButton({icon,color,size, pressButton, children})
{
    return <View style={styles.container}>
            <Pressable onPress={pressButton} style={({pressed}) => [styles.iconStyle, pressed && styles.pressed]}>
            <Ionicons name={icon} color={color} size={size} style={styles.icon}></Ionicons>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    </View>
}

const styles= StyleSheet.create({
    pressed : {
        color:colors.primary200,
        opacity:0.5,
    },
    iconStyle:{
        paddingHorizontal: 12,
        paddingVertical: 6,
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.primary500,
        backgroundColor:colors.background100,
    },
    text:{
        padding:3,
        fontWeight:'bold',
    },
})
export default IconTitleButton;