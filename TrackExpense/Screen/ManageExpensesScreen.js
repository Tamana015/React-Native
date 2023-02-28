import { StyleSheet, View } from "react-native"
import IconAdd from "../Components/ui/IconAdd"
import {GlobalStyles} from '../constants/ColorsStyle'
import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect, useContext, useState } from "react"
import { ExpenseContext } from "../Store/Expenses-Context"
import ManageOutput from "../Components/ManagaeComponent/ManageOutput"
import { deleteExpense, storeExpenses, updateExpense } from "../utils/http"
import AppLoader from "../Components/ui/AppLoader"
import ErrorOverLay from "../Components/ui/ErrorOverLay"

export default function ManageExpensesScreen({route})
{
    const [dataLoad, SetDataLoader] =useState(false)
    const [errorLoad, SetErrorLoader] =useState()
    const ExpensesData = useContext(ExpenseContext)
    const expenseId = route.params?.expenseId;
    const isEditable = !!expenseId;
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: isEditable ? "Update Expense" : "Add Expense"
        })
    },[isEditable,navigation])
    function CancelButtonHandler()
    {
        navigation.goBack()
    }
    
     async function ConfirmButtonHandler(enteredExpenses)
    {
        try{
            SetDataLoader(true)
            if(isEditable)
            {
                updateExpense(expenseId,enteredExpenses);
                ExpensesData.updateExpense(expenseId,enteredExpenses)
            }
            else{
                const id = await storeExpenses(enteredExpenses)
                ExpensesData.addExpense({...enteredExpenses,id:id})
            }
            navigation.goBack()
        }
        catch(error)
        {
            SetErrorLoader("Currently we cann't Update the expense. Try Again Later !!!!")
            SetDataLoader(false)
        }
        
    }
     async function DeleteButtonHandler()
    {
        try{
            SetDataLoader(true)
            await deleteExpense(expenseId);
            ExpensesData.deleteExpense(expenseId)
            navigation.goBack()
        }
        catch(error)
        {
            SetErrorLoader("Currently we cann't Delete the Expense. Try Again Later !!!!")
            SetDataLoader(false)
        }
    }

    if(errorLoad &&  !dataLoad)
    {
        return <ErrorOverLay errorMessage={errorLoad}/>
    }
    if(dataLoad)
    {
        return <AppLoader/>
    }
    const ExistingData = isEditable ? ExpensesData.expenses.find((expense) => {return expense.id === expenseId}) : null;
    return (
        <View style={styles.container}>
           <View style={styles.innerContainer}>
            <ManageOutput ExistingData={ExistingData} CancelButtonHandler={CancelButtonHandler} ConfirmButtonHandler={ConfirmButtonHandler} buttonLabel={isEditable ? "Update" : "Add"}/>
            { isEditable && <View style= {styles.deleteContainer}>
                <IconAdd icon={"trash"} color={GlobalStyles.colors.error500} size={36} onPressAction={DeleteButtonHandler}></IconAdd>
            </View>}
           </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:GlobalStyles.colors.primary200,
    },
    innerContainer:{
        margin:20,
        marginVertical:50
    },
    deleteContainer:{
        alignItems:"center"
    }
})