import { View,Text, StyleSheet, Pressable } from "react-native";

function CategoryGrid({title,color, onPress}){
    return (
        <View style={styles.container}>
            <Pressable style={({pressed}) =>[ pressed ? styles.onPressButton : null, styles.button]} android_ripple={"#888888"} onPress={onPress}>
                <View style={[styles.innerContainer,{backgroundColor:color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        elevation:4,
        margin:15,
        flex:1,
        justifyContent:"center",
        height:150,
        borderRadius:10,
        overflow:"hidden"
    },
    innerContainer:{
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        flex:1
    },
    onPressButton:{
        opacity:0.5
    },
    title:{
        fontSize:15,
        fontWeight:"bold"
    }
})
export default CategoryGrid;