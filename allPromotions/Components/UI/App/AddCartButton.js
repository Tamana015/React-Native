import IconTitleButton from "../../IconTitleButton"
import Colors from "../../../Colors/Color"
import { View , StyleSheet} from "react-native"

export default function AddCartButton({onAddProductHandler, })
{
    return (
            <>
                <IconTitleButton icon={'cart-outline'} color={Colors.grey200} size={22} pressButton={onAddProductHandler}>Add</IconTitleButton>
            </>
    )
}
