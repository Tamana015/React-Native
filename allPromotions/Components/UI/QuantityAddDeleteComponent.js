import { View, StyleSheet,Text} from "react-native"
import IconButton from "./IconButton"
import Colors from "../../Colors/Color"
import { useContext, useEffect,useState } from "react"
import { CartContext } from "../../Store/Context"
import AppLoader from "./AppLoader"
import AddCartButton from "./App/AddCartButton"

export default function QuantityAddDeleteComponent({code,buttonStyle})
{
    const [isQuantity, updateQuantity] = useState(false);
    const [addButton,updateAddButton] = useState(false)
    const cartItems = useContext(CartContext);

    const [productQuantity, setProductQuantity] = useState(1);

    useEffect(() => {
        setProductQuantity(cartItems.IsItemsExist(code))
    },[setProductQuantity,cartItems])

    function onAddProductHandler(){
        cartItems.AddItems(code);
        updateAddButton(true)
        setProductQuantity(1)
    }

//     useEffect(() => {
//         minimum=1
//         maximum=100
//    },[])

    // useEffect(() => {
    //     closeActivityIndicator();
    // }, [closeActivityIndicator]);

    // const closeActivityIndicator = () => {
    //     setTimeout(() => {
    //     updateQuantity(false);
    //     }, 5000);
    // };

    async function onChangeQuantityHandler(changeType)
    {
        updateQuantity(true)
        changeType === 'Add' ? cartItems.AddItems(code) : cartItems.DeleteItems(code)
        const fetchProductQuantity =cartItems.IsItemsExist(code)
        setProductQuantity(fetchProductQuantity)
        !fetchProductQuantity && updateAddButton(false)
        updateQuantity(false)
    }

    if(isQuantity)
    {
        return <AppLoader/>
    }

    return (addButton ? <View style={[buttonStyle ? [buttonStyle, styles.container] : styles.container]}>
            <IconButton onPressIcon={onChangeQuantityHandler.bind(this,'Remove')} icon={'remove'} color={'black'} size={20}></IconButton>
                <Text style={styles.countText}>{productQuantity}</Text>
            <IconButton onPressIcon={onChangeQuantityHandler.bind(this,'Add')} icon={'add'} color={'black'} size={20}></IconButton>
        </View> :
        <View style={[buttonStyle ? buttonStyle && styles.addContainerStyle : styles.addContainerStyle]}>
            <AddCartButton onAddProductHandler={onAddProductHandler}></AddCartButton>
        </View>)
}

const styles= StyleSheet.create({
    container:{
        alignItems: 'center',
        borderWidth: 1,
        borderRadius:24,
        flexDirection:'row',
        justifyContent:'space-between',
        height:35,
        padding:4,
        borderColor: Colors.purple700,
    },
    addContainerStyle:{
        alignItems: 'center',
        borderWidth: 1,
        borderRadius:24,
        justifyContent:'center',
        height:35,
        padding:4,
    },
    countText:{
        color:'black',
        fontWeight:'bold',
        fontSize:16
    },
})