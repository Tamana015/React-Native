import { Ionicons } from '@expo/vector-icons';
import React, { useState, useMemo } from 'react';
import { View, StyleSheet, TextInput, Pressable } from 'react-native';
import Colors from '../../../Colors/Color';

function SearchComponent({onPressSearch}) {
  let [text, setText] = useState();

  const onChangeText = useMemo((value) => {
    setText(value);
  }, [setText]);

  return (
    <View>
      <Pressable style={styles.container} onPress={onPressSearch}>
            <TextInput placeholder='Search for products'
              cursorColor={'black'} 
              placeholderTextColor= {Colors.grey100}
              onChangeText={onChangeText} 
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.TextInput}
              maxLength={20}
              // style={({text}) => text !== '' ? styles.TextInput : styles.TextInput && styles.TextInputAlgin}
              ></TextInput>
            <View>
              <Ionicons name='search' color='black' size={20} style={styles.iconContainer}></Ionicons>
            </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'center',
    height:40,
    marginBottom:8,
    marginTop:4
  },
  TextInput:{
    backgroundColor:'white',
    borderColor:Colors.grey100,
    borderRightWidth:0,
    borderWidth:1,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    width:200,
    height:40,
    padding:10,
    fontSize:14,
  },
  TextInputAlgin:{
    textAlign:'center'
  },
  iconContainer:{
    backgroundColor:Colors.grey20,
    borderColor:Colors.grey100,
    borderWidth:1,
    borderLeftWidth:0,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    padding:7,
    height:40,
  }
});

export default SearchComponent;