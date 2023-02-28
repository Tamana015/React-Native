import { View,Text, StyleSheet } from "react-native";

function MealSubList({children})
{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
        borderRadius:5,
        margin:5
    },
    text:{
        color:"black",
        textAlign:"center"
    }
})
export default MealSubList;