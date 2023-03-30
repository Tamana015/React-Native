import IconTitleButton from "../../IconTitleButton"
import Colors from "../../../Colors/Color"

export default function AddCartButton({onAddProductHandler, })
{
    return (
        <IconTitleButton icon={'cart-outline'} color={Colors.grey200} size={22} pressButton={onAddProductHandler}>Add</IconTitleButton>
    )
}