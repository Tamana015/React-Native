import { FlatList,Text, View, StyleSheet } from "react-native";
import colors from "../../styles/colors";

function PlaceList({Places})
{
    if(!Places || Places.length==0)
    {
        return <View style={styles.container}>
            <Text style={styles.warning}>You haven't added any place yet - Kindly Add</Text>
            </View>
    }
    return (
            <FlatList data={Places} keyExtractor={(item) => item.id}/>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    warning:{
        textAlign:'center',
        color:colors.primary400,
        fontSize:15,
        fontWeight:'bold'
    }
})
export default PlaceList;