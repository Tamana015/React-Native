import { Text, View, StyleSheet} from "react-native"
import { GlobalStyles } from "../../constants/ColorsStyle"

export default function ExpensesSummary({expenses , PeriodExpense})
{
    const TotalExpense = expenses.reduce((sum,expense
    ) => { return sum+expense.amount},0) 
    return (
        <View style = {styles.container}>
            <Text style={[styles.text,styles.subTitle]}>{PeriodExpense}</Text>
            <Text style={styles.text}>${TotalExpense.toFixed(2)}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:GlobalStyles.colors.gray700,
        borderWidth:1,
        borderRadius:10,
        borderColor:GlobalStyles.colors.primary700
    },
    text:{
        color:GlobalStyles.colors.primary700,
        fontSize:18,
        fontWeight:'bold',
        padding:10
    },
    subTitle:{
        fontSize:13,
        textAlign:'center'
    }
})
