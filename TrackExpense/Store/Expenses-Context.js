import { createContext, useReducer } from "react";

const data = [];
export const ExpenseContext = createContext({
    expenses:[],
    setExpense : (expense) => {},
    addExpense:({description,amount,date}) => {},
    updateExpense :(id, {description,amount,date}) => {},
    deleteExpense : (id) => {}
})

function ExpenseReducerHandler(state,action)
{
    switch(action.type){
        case 'ADD':
            // const expenseId = new Date().toString() + Math.random().toString();
            return [action.payload,...state]
        case 'SET':
          const data = action.payload.reverse();
          return data    
        case 'UPDATE':
            const UpdatableExpenseIndex =  state.findIndex((expense) => expense.id == action.payload.id)
            const UpdatebleExpense= state[UpdatableExpenseIndex]
            const UpdatedItem = {...UpdatebleExpense,...action.payload.expense}
            const UpdatedExpense = [...state]
            UpdatedExpense[UpdatableExpenseIndex] = UpdatedItem;
            return UpdatedExpense
        case 'DELETE':
            return state.filter((expense) => expense.id!=action.payload)
        default:
            return state
    }
}

export default function ExpenseContextProvider({children})
{
    const [expensesState, dispatch]  = useReducer(ExpenseReducerHandler, data);
    function addExpense(expensesData)
    {
        dispatch({type:'ADD' , payload:expensesData})
    }
    function setExpense(expensesData)
    {
      dispatch({type :'SET', payload : expensesData})
    }
    function deleteExpense(id)
    {
        dispatch({type:'DELETE' , payload:id})
    }
    function updateExpense(id,expensesData)
    {
        dispatch({type:'UPDATE' , payload:{id:id,expense:expensesData}})
    }
    const Value = {
        expenses:expensesState,
        setExpense:setExpense,
        addExpense:addExpense,
        updateExpense :updateExpense,
        deleteExpense :  deleteExpense
    }
    return (<ExpenseContext.Provider value ={Value}>{children}</ExpenseContext.Provider>)
}
