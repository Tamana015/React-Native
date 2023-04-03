import { Pressable, StyleSheet } from "react-native";
import { View,Text } from "react-native";
import IconButton from "../IconButton";
import Colors from "../../../Colors/Color";
import { useState } from "react";

export default function  ViewFurtherDropDown({headerTtitle,textStyle,details})
{
    const [showMore, setShowMore] = useState(false);
    
    return (
        <><Pressable onPress={() => setShowMore(!showMore)}>
            <View style={styles.container}>
                <Text style={[textStyle, styles.titleText]}>{headerTtitle}</Text>
                <IconButton icon={'md-chevron-down'} color={'black'} size={24} iconAddStyle={styles.iconStyle}></IconButton>
            </View>
      </Pressable>
      {showMore && <Text>{details}</Text>}
      </>
    )
}

const styles = StyleSheet.create({
    container:{
        height:56,
        alignItems:'center',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderColor:Colors.grey20
    },
    titleText:{
        paddingVertical:16,
        fontSize:16,
    },
    iconStyle:{
        backgroundColor:'white'
    }
})