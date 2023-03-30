import { ActivityIndicator, View , StyleSheet} from "react-native";
import Colors from "../../Colors/Color";

export default function AppLoader()
{
    return (
        <View style={styles.container}>
            <ActivityIndicator color={Colors.purple700} size="small"></ActivityIndicator>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})