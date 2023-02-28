import { Pressable, View, Text , StyleSheet} from "react-native";
import { GlobalStyles } from "../../constants/ColorsStyle";

export default function Buttons({children,mode,onPressAction})
{
    return (
        <View>
            <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPressAction}>
            <View  style={[styles.button, mode == 'flat' && styles.flat]}>
                <Text style={[styles.text, mode == 'flat' && styles.flatext]}>{children}</Text>
            </View>
        </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:GlobalStyles.colors.gray700,
        padding:5,
        borderRadius:12,
        width:100,
    },
    text:{
        fontSize:18,
        color:GlobalStyles.colors.primary700,
        fontWeight:"bold",
        textAlign:"center"
    },
    pressed: {
        opacity: 0.5,
        backgroundColor:GlobalStyles.colors.primary700,
        borderRadius:12,
      },
      flat:{
        backgroundColor:"transparent"
      },
      flatext:{
        color:GlobalStyles.colors.primary700
      }
})