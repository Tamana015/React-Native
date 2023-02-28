import { Text, View, useLayoutEffect, Image, StyleSheet, Pressable } from "react-native"
import { useNavigation } from '@react-navigation/native';

function MealItem({title,imageUrl,affordability, complexity,duration, id})
{
    const navigation = useNavigation();
    function onPressItem()
        {
            navigation.navigate('MealOverView',{ mealId:id,});            
        }
    return (
        <View style={styles.MealItems}>
            <Pressable android_ripple={{color:"black"}}
            style={({pressed}) => pressed ? styles.buttonPressed : null} onPress={onPressItem}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.mealsDetails}>
                        <View><Text style={styles.text}>{affordability.toUpperCase()}</Text></View>
                        <View><Text style={styles.text}>{complexity.toUpperCase()}</Text></View>
                        <View><Text style={styles.text}>{duration}</Text></View>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    MealItems:{
        margin:20,
        padding:5,
        borderRadius:5,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    innerContainer:{
        borderRadius:10
    },
    image:{
        width:"100%",
        height:200,
        borderRadius:5
    },
    title:{
        color:"black",
        fontWeight:"bold",
        textAlign:"center",
        fontSize:15
    },
    text:{
        color:"black",
        fontWeight:"bold",
        textAlign:"center",
        fontSize:13
    },
    mealsDetails:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:50,
        padding:10
    },
    buttonPressed:{
        opacity:0.5
    }
})
export default MealItem;