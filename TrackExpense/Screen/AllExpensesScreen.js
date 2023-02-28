import { useContext } from "react";
import { View, StyleSheet } from "react-native"
import ExpensesOutput from "../Components/ExpenseComponent/ExpensesOutput";
import { GlobalStyles } from "../constants/ColorsStyle";
import { ExpenseContext } from "../Store/Expenses-Context";


export default function AllExpensesScreen()
{
    const expensesData = useContext(ExpenseContext)
    return (
        <View style={styles.container}>
            <ExpensesOutput expenses={expensesData.expenses} PeriodExpense={"Total Expenses"}
            WaringText="There is no Expense"/>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:GlobalStyles.colors.primary200,
    }
})