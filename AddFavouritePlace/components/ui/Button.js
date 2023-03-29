import { Pressable, Text, StyleSheet } from "react-native";
import colors from "../../styles/colors";

function Button({children, submitButtonHandler})
{
    return <Pressable onPress={submitButtonHandler} style={({pressed}) => [styles.button, pressed && styles.pressed]}>
        <Text style={styles.text}>{children}</Text>
    </Pressable>
}

const styles= StyleSheet.create({
    pressed:{
        opacity:0.5
    },
    button:{
        padding: 6,
        width:'40%',
        alignItems: 'center',
        alignSelf:'center',
        borderWidth: 1,
        borderColor: colors.Text100,
        backgroundColor:colors.Button100,
        borderRadius:10
    },
    text:{
        fontWeight:'bold',
        color:colors.Text100
    }
})
export default Button;