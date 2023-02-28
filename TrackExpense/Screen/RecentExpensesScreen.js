import { useContext, useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import ExpensesOutput from "../Components/ExpenseComponent/ExpensesOutput"
import { GlobalStyles } from "../constants/ColorsStyle"
import { ExpenseContext } from "../Store/Expenses-Context"
import { getDateMinusDays } from "../utils/DateUtils"
import { getExpenses } from "../utils/http"
import AppLoader from "../Components/ui/AppLoader"
import ErrorOverLay from "../Components/ui/ErrorOverLay"

export default function RecentExpensesScreen()
{
    const [dataLoad, SetDataLoader] =useState(true)
    const [errorLoad, SetErrorLoader] =useState()
    const expensesData = useContext(ExpenseContext)
  
    useEffect(() => {
        async function getExpense(){
            try{
                SetDataLoader(true);
                const expense= await getExpenses();
                expensesData.setExpense(expense)
            }
            catch(error)
            {
                SetErrorLoader("Currently we cann't Fetch the expense data. Try Again Later !!!!")
            }
            SetDataLoader(false)
        }
        getExpense();
    },[])
    if(errorLoad && !dataLoad)
    {
        return <ErrorOverLay errorMessage={errorLoad}/>
        SetDataLoader(false);
    }
    if(dataLoad)
    {
        return <AppLoader/>
    }
    const recentExpenses = expensesData.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
    
        return (expense.date >= date7DaysAgo) && (expense.date <= today);
      });
    return (
        <View style={styles.container}>
            <ExpensesOutput expenses={recentExpenses} PeriodExpense={"Last 7 Days Expenses"}
            WaringText="There is no Expense from last 7 days"/>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:GlobalStyles.colors.primary200
    }
})