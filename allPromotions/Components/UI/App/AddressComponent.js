import { View, Text , StyleSheet} from "react-native"
import Colors from "../../../Colors/Color"
import IconButton from "../IconButton"

export default function AddressComponent({Address})
{
    return (<View style={styles.AddressContainer}>
        <IconButton icon={'location-outline'} color={'black'} size={20}></IconButton>
        <Text style={styles.AddressText}>{Address}</Text>
        <IconButton icon={'md-chevron-down'} color={'black'} size={20}></IconButton>
    </View>)
}

const styles= StyleSheet.create({
  AddressContainer:{
    flexDirection:'row',
    backgroundColor:Colors.grey10,
    padding:10
  },
  AddressText : {
    fontSize:15,
    paddingHorizontal:5,
  }  
})