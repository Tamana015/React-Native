import { FlatList, StyleSheet, View } from "react-native"
import ExpensesItem from "./ExpensesItem"

function expenseItemRender(itemData)
{
    return <ExpensesItem {...itemData.item}/>
}
export default function ExpensesList({expenses})
{
    return (
        <View style={styles.container}>
            <FlatList data={expenses} keyExtractor={(item) => item.id} renderItem={expenseItemRender}></FlatList>
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        marginTop:15
    }
})