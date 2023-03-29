import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet , Text, View} from "react-native";
import Colors from "../Colors/Color";

function TitleButton({pressButton, children})
{
    return <View style={styles.container}>
            <Pressable onPress={pressButton} style={({pressed}) => [styles.iconStyle, pressed && styles.pressed]}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    </View>
}

const styles= StyleSheet.create({
    container:{
        marginVertical: 6,
        paddingVertical:2,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius:18,
        borderColor: Colors.grey200,
    },
    pressed : {
        color:Colors.grey200,
        opacity:0.5,
    },
    text:{
        padding:3,
        color:Colors.grey200,
        fontWeight:'bold',
    },
})
export default TitleButton;