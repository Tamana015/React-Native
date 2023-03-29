import { ActivityIndicator, View , StyleSheet} from "react-native";
import { GlobalStyles } from "../../constants/ColorsStyle";

export default function AppLoader()
{
    return (
        <View style={styles.container}>
            <ActivityIndicator color={"white"} size="large"></ActivityIndicator>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:GlobalStyles.colors.primary200,
        opacity:0.5
    }
})