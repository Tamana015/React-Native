import { Text, View, StyleSheet, Pressable} from "react-native"
import { GlobalStyles } from "../../constants/ColorsStyle"
import { getFormattedDate } from "../../utils/DateUtils"
import { useNavigation } from "@react-navigation/native"

export default function ExpensesItem({id, description, amount, date})
{
    const navigation = useNavigation();
    function onPressItemHandler()
    {
        navigation.navigate('ManageExpensesScreen', {expenseId:id})
    }
    return (
        <Pressable android_ripple={"white"} style={({pressed}) => pressed && styles.onPressAction} 
        onPress={onPressItemHandler}>
                <View style = {styles.container}>
            <View>
                    <Text style={[styles.text,styles.title]}>{description}</Text>
                    <Text style={styles.text}>{getFormattedDate(date)}</Text>
            </View>
                <Text style={[styles.amount,styles.title]}>${amount.toFixed(2)}</Text>
            </View>
        </Pressable>)
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:GlobalStyles.colors.primary700,
        borderWidth:1,
        borderRadius:10,
        padding:12,
        paddingHorizontal:10,
        marginVertical:2
    },
    text:{
        color:GlobalStyles.colors.gray700,
        fontSize:15,
    },
    title:{
        fontWeight:'bold',
        fontSize:15
    },
    amount:{
        color:GlobalStyles.colors.primary700,
        backgroundColor:"white",
        width:70,
        height:40,
        textAlign:'center',
        paddingTop:7,
        borderRadius:10
    },
    onPressAction:{
        opacity:0.5
    }
})
