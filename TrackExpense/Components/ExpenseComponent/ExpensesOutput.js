import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/ColorsStyle";

export default function ExpensesOutput({expenses,PeriodExpense,WaringText})
{
    let ListStyle = <ExpensesList expenses={expenses}></ExpensesList>
    if(expenses.length==0)
    {
        ListStyle = <Text style={styles.warning}>{WaringText}</Text>
    }
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} PeriodExpense={PeriodExpense}></ExpensesSummary>
            {ListStyle}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:'5%',
        flex:1,
        flexDirection:'column',
    },
    warning:{
        color: GlobalStyles.colors.error500,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:15,
        paddingTop:10
    }
})