import axios from "axios"

const BACK_SERVER_URL = "https://adidos-4b7b5.firebaseio.com"
export async function storeExpenses(expenses)
{
    const response = await axios.post(BACK_SERVER_URL+'/expense.json',expenses)
    return response.data.name;
}

export async function getExpenses()
{
    const response = await axios.get(BACK_SERVER_URL+'/expense.json');
    const expenses = [];
    for(const key in response.data)
    {
        const expenseObj = {
            id : key,
            amount : response.data[key].amount,
            date : new Date(response.data[key].date),
            description : response.data[key].description
        }
        expenses.push(expenseObj)
    }
    return expenses
}

export function updateExpense(id,expense)
{
    return axios.put(BACK_SERVER_URL+`/expense/${id}.json`,expense);
}
export function deleteExpense(id)
{
    return axios.delete(BACK_SERVER_URL+`/expense/${id}.json`);
}