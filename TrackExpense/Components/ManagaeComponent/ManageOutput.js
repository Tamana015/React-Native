import { View , Text, StyleSheet, Alert} from "react-native"
import { GlobalStyles } from "../../constants/ColorsStyle"
import InputManage from "./InputManage"
import Buttons from "../ui/Buttons"
import { useEffect, useState } from "react"
import { getFormattedDate } from "../../utils/DateUtils"

export default function ManageOutput({CancelButtonHandler,ConfirmButtonHandler,buttonLabel,ExistingData})
{
    const [inputsData, SetInputData] = useState({
        amount : {
            value: ExistingData ? ExistingData.amount.toString() : '',
            IsValid :true
        },
        date : {
            value:  ExistingData ? getFormattedDate(ExistingData.date) : '',
            IsValid :true
        },
        description:{
            value: ExistingData ? ExistingData.description : '',
            IsValid : true
        }
    })
    function inputChangedHandler(InputTypes,enteredText)
    {
        SetInputData((input) => { return {
           ...input,[InputTypes] : {value:enteredText, IsValid:true}
        }
        })
    }
    function OnSubmitHandler()
    {
        const expenses = {
            amount : +inputsData.amount.value,
            date :  new Date(inputsData.date.value),
            description: inputsData.description.value
        }
        const IsValidAmount = !isNaN(expenses.amount) && expenses.amount>0;
        const IsValidDate = expenses.date.toString() !== 'Invalid Date';
        const IsValidDescriptiom = expenses.description.trim().length > 0;

        if(!IsValidAmount || !IsValidDate || !IsValidDescriptiom)
        {
            // Alert.alert('Invalid input', 'Please check your input values');
            SetInputData((curDate) => {
                return {
                    amount : {value : curDate.amount.value , IsValid:IsValidAmount},
                    date : {value : curDate.date.value , IsValid:IsValidDate},
                    description : {value : curDate.description.value , IsValid:IsValidDescriptiom},
                }
            })
            return ;
        }
        ConfirmButtonHandler(expenses)
    }
    const IsValidForm = !inputsData.amount.IsValid ||
            !inputsData.date.IsValid || 
            !inputsData.description.IsValid
       return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Expenses</Text>
            <View style={styles.innerContainer}>
                    <InputManage Label="Amount" invalid={!inputsData.amount.IsValid} textInputConfig={{
                        maxLength: 5,
                        onChangeText: inputChangedHandler.bind(this,'amount'),
                        keyboardType: 'decimal-pad',
                        value:inputsData.amount.value
                    }} style={styles.rowInput}/>
                    <InputManage Label="Date"  invalid={!inputsData.date.IsValid}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangedHandler.bind(this,'date'),
                        value:inputsData.date.value
                    }} style={styles.rowInput}/>
            </View>
            <InputManage Label="Description" invalid={!inputsData.description.IsValid} textInputConfig={{
                        multiline:true,
                        onChangeText: inputChangedHandler.bind(this,'description'),
                        value:inputsData.description.value
                    }}/>
                    {
                        IsValidForm && (<Text style={styles.alterText}>Invalid input values - please check your entered data!</Text>)
                    }
            <View style={styles.buttonContainer}>
                <Buttons mode="flat" onPressAction={CancelButtonHandler}>Cancel</Buttons>
                <Buttons onPressAction={OnSubmitHandler}>{buttonLabel}</Buttons>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
      marginHorizontal:40,  
    },
    title:{
        textAlign:"center",
        fontSize:25,
        fontWeight:"bold",
        color:GlobalStyles.colors.primary700,
        marginVertical:10
    },
    innerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:13
    },
    rowInput:{
        flex:1
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomWidth:2,
        borderBottomColor:GlobalStyles.colors.gray700,
        padding:20
    },
    alterText:{
        color:GlobalStyles.colors.error500,
        textAlign:'center',
        fontWeight:'bold',
        paddingVertical:5
    }
}
)