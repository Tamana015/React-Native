import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox'; 
import Colors from "../../Colors/Color";

export default function CheckBoxComponenent({title})
{
    const [checked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
                <CircleCheckBox
                status={checked ? 'checked' : 'unchecked'}
                onToggle={() => {
                        setChecked(!checked);
                    }}
                checked={checked}
                labelPosition={LABEL_POSITION.RIGHT}
                label={title}
                styleLabel={styles.styleLabel}
                key={title}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderBottomWidth:1,
        paddingVertical:12,
        borderBottomColor:Colors.grey20
    },
    stylelabel:{
        fontSize:14,
        marginLeft:8,
        lineHeight:20
    }
})