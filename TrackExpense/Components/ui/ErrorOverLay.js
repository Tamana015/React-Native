import { View ,Text, StyleSheet} from "react-native";
import { GlobalStyles } from "../../constants/ColorsStyle";

export default function ErrorOverLay({errorMessage})
{
    return (
        <View style={styles.container}>
             <Text style={styles.title}>Error Warning</Text>
            <Text style={styles.error}>{errorMessage}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:GlobalStyles.colors.primary200,
        opacity:0.5,
    },
    error:{
        color:GlobalStyles.colors.error700,
        fontsize:16,
        marginHorizontal:50,
        textAlign:'center'
    },
    title:{
        paddingVertical:5,
        fontWeight:'bold',
        fontSize:20,
        color: GlobalStyles.colors.error700,
        textAlign:'center'
    }
})