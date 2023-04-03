import { ScrollView } from "react-native";
import { View , StyleSheet,Text} from "react-native";
import Colors from "../../../Colors/Color";
import Unorderedlist from 'react-native-unordered-list';

export default function KeyFeatureComponent({keyFeaturesList})
{
    const listItems = keyFeaturesList.map((myList)=>{   
    return <Unorderedlist><Text style={styles.fontSize}>{myList}</Text></Unorderedlist>
});   
    return (
        <View style={styles.keysContainer}>
            <Text style={styles.keyHeaderStyle}>Key features</Text>
            <ScrollView key={(item,index) => {index}}>
                {listItems}
            </ScrollView>
        </View>
    )
}

const styles =  StyleSheet.create({
    keysContainer:{
        marginTop:20,
        marginBottom:8
    },
    keyHeaderStyle:{
        paddingTop:12,
        paddingBottom:16,
        fontSize:16,
        fontWeight:'bold',
        color:Colors.BlackDark
    },
    featureTextStyle:{
        fontSize:14
    }
})