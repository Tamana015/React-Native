import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { SORTS } from "../Data/DataInput";
import CheckBoxComponenent from "../Components/UI/CheckBoxComponent";

function SortProductsScreen({onPressAction})
{
  function SortRenderItem(itemData)
    {
        return <CheckBoxComponenent title ={itemData.item.title}/>
    }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>Sort by</Text>
          <Entypo name="cross" size={24} color="black" onPress={onPressAction} style={styles.iconContainer}/>
        </View>
        <View style={styles.sortListContainer}><FlatList
              data={SORTS} 
              keyExtractor={(sort) => sort.id}
              renderItem={SortRenderItem}>
          </FlatList>
        </View>
      </View></>
  )
}

const styles =StyleSheet.create({
  container:{
    height:'50%',
    borderTopStartRadius:20,
    borderTopEndRadius:20,
    marginTop: 'auto',
    backgroundColor:'white'
  },
  headerContainer:{
    paddingVertical:16,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  titleText:{
    fontSize:16,
    // fontFamily:'Bogle-Regular',
    textAlign:'center'
  },
  iconContainer:{
    left:140,
    height:24,
    width:24
  },
  sortListContainer:{
    paddingLeft:16,
    paddingRight:16,
    paddingBottom:32
  }
})
export default SortProductsScreen;