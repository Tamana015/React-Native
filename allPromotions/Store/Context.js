import { createContext, useState} from "react";

const data = [];
export const CartContext = createContext({
    cartItems:[],
    IsItemsExist : (code) => {},
    AddItems : (code) => {},
    DeleteItems:({code}) => {},
})

export default function CartContextHandler({children})
{
    const [cartItem, setCartItems] = useState([]);

    function IsItemsExist(code)
    {
        const IsItemsExist = cartItem.filter((item) => item.code.includes(code));
        if(IsItemsExist && IsItemsExist.length > 0)
        {
            return IsItemsExist[0].quantity
        }
        return 0
    }

    function AddItems(code)
    {
        const IsItemsExist = cartItem.filter((item) => item.code.includes(code));
        if(IsItemsExist && IsItemsExist.length > 0)
        { 
            for(let i = 0 ; i < cartItem.length ; i++) {
                if(cartItem[i].code === code) {
                    cartItem[i].quantity += 1;
                }
            }
            setCartItems(cartItem)
        }
        else{
            setCartItems((items) => [...items,{code:code,quantity: 1 }])
        }
    }

    function DeleteItems(code)
    {
        const IsItemsExist = cartItem.filter((item) => item.code.includes(code));
        if(IsItemsExist && IsItemsExist.length > 0)
        { 
            for(let i = 0 ; i < cartItem.length ; i++) {
                if(cartItem[i].code === code) {
                    cartItem[i].quantity -= 1;
                }
            }
            setCartItems(cartItem)
        }
    }
    const Value = {
        cartItems:cartItem,
        IsItemsExist:IsItemsExist,
        AddItems:AddItems,
        DeleteItems : DeleteItems
    }
    return (<CartContext.Provider value ={Value}>{children}</CartContext.Provider>)
}
