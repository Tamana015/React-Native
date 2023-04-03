import { useContext , useEffect} from "react";
import { Text ,View, StyleSheet} from "react-native";
import { CartContext } from "../../../Store/Context";
import TitleButton from "../../TitleButton"
import QuantityAddDeleteComponent from "../QuantityAddDeleteComponent"
import Colors from "../../../Colors/Color";
import AddCartButton from "./AddCartButton";
import { useState } from "react";

export default function ProductButtonComponent({code,isStoreOnly,stock,potentialPromotions,viewProductDetailHandler})
{
    const cartItems = useContext(CartContext);

    let AddButtonContainer = <QuantityAddDeleteComponent code={code}/>

    if(isStoreOnly)
    {
        AddButtonContainer = <Text style={styles.WarningTextMessage}>Available In-store only</Text>
    }

    if(stock.stockLevelStatus === "outOfStock")
    {
        AddButtonContainer = <Text style={styles.WarningTextMessage}>Out of stock</Text>
    }

    if(potentialPromotions.at(0))
    {
        AddButtonContainer = <TitleButton onPressAction={viewProductDetailHandler}>View Deals</TitleButton>
    }

    return (
        <View style={styles.AddContainer}>{AddButtonContainer}</View>
    )
}

const styles= StyleSheet.create({
    AddContainer:{
        borderTopWidth:1,
        borderTopColor: Colors.grey15,
        height:60,
        justifyContent:'center'
    },
    WarningTextMessage:{
        color:Colors.Red900,
        "fontFamily": "normal",
        "fontSize": 16,
        fontWeight:'bold',
        textAlign:'center'
    },
    IconStyleContainer:{
        backgroundColor:'white'
    }
})