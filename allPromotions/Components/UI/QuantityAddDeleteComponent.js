import { View, StyleSheet,Text, Pressable } from "react-native"
import IconButton from "./IconButton"
import Colors from "../../Colors/Color"

export default function QuantityAddDeleteComponent({pressButton})
{
    return <View style={styles.container}>
        <Pressable onPress={pressButton} style={({pressed}) => [styles.iconStyle, pressed && styles.pressed]}>
            <IconButton icon={'remove'} color={'black'} size={20}></IconButton>
        </Pressable>
            <Text style={styles.countText}>1</Text>
        <Pressable onPress={pressButton} style={({pressed}) => [styles.iconStyle, pressed && styles.pressed]}>
            <IconButton icon={'add'} color={'black'} size={20}></IconButton>
        </Pressable>
    </View>
}

const styles= StyleSheet.create({
    container:{
        marginVertical: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.25,
        borderRadius:18,
        borderColor: Colors.purple700,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:6
    },
    iconStyle:{
        backgroundColor:Colors.grey20,
        color:Colors.grey200,
        borderRadius:12
    },
    countText:{
        color:'black',
        fontWeight:'bold',
        fontFamily:'normal',
        fontSize:16
    },
    pressed : {
        color:Colors.grey200,
        opacity:0.5,
    },
})