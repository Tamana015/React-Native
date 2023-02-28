import { TextInput, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/ColorsStyle";

export default function InputManage({Label, style,textInputConfig, invalid})
{
    const styleInput =[styles.input];
    if(textInputConfig && textInputConfig.multiline)
    {
        styleInput.push(styles.inputMultiLine)
    }
    if(invalid)
    {
        styleInput.push(styles.invalidInput)
    }
    return (<View style={[styles.inputContainer,style]}>
        <Text style={[styles.inputLabel, invalid && styles.invalidInputLabel]}>{Label}</Text>
        <TextInput style={styleInput} {...textInputConfig}></TextInput>
    </View>)

}

const styles= StyleSheet.create({
    inputContainer:{
        marginHorizontal:5
    },
    inputLabel:{
        color:"white",
        fontSize:12,
        fontWeight:"bold",
        margin:5,
    },
    input:{
        backgroundColor:GlobalStyles.colors.gray700,
        color:GlobalStyles.colors.primary700,
        borderRadius:10,
        borderColor:GlobalStyles.colors.primary700,
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:4
    },
    inputMultiLine:{
        minHeight: 100,
        textAlignVertical: 'top'
    },
    invalidInput:{
        backgroundColor:GlobalStyles.colors.red500,
        color:GlobalStyles.colors.red700,
        borderRadius:10,
        borderColor:GlobalStyles.colors.red700,
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:4
    },
    invalidInputLabel:{
        color:GlobalStyles.colors.red500,
        fontSize:12,
        fontWeight:"bold",
        margin:5,

    },
})