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
    container:{
        flex:1,
        margin:10,
        justifyContent:"center",
        height:450,
        borderColor: Colors.grey20,
        borderWidth:1,
        backgroundColor:'white',
        borderRadius:5,
        paddingTop:5
    },
    innerContainer:{      
        padding:15,
    },
    offerOnlineImage:{
        height:50,
        width:'100%',
    },
    SaveText:{
        color:Colors.purple700,
        "fontFamily": "normal",
        "fontSize": 12,
        backgroundColor: Colors.purple100,
        height:22,
        justifyContent:'center',
        textAlign:'center'
    },
    SaveContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    setJustifyContent:{
        justifyContent:'flex-end'
    },
    imageContainer:{
        height:'40%',
        justifyContent:'center',
        margin:15
    },
    image:{
        width:'100%',
        height:'100%',
        aspectRatio: 1.5, 
        resizeMode: 'contain',
    },
    titleText:{
        "fontFamily": "normal",
        "fontSize": 14,
        "fontWeight": "400",
        "letterSpacing": 0,
        "lineHeight": 20,
        textAlign:'left',
        height:38,
        color:Colors.grey200,
        marginVertical:3
    },
    boldText: {
        fontWeight: 'bold'
    },
    PriceDiscountContainer:{
        height:'25%',
        justifyContent:'center'
    },
    mrpText:{
        color:Colors.purple700,
        "fontFamily": "normal",
        "fontSize": 14,
        paddingVertical:2,
    },
    priceText:{
        color:Colors.grey100,
        "fontFamily": "normal",
        "fontSize": 13
    },
    AddContainer:{
        borderTopWidth:1,
        borderTopColor: Colors.grey20,
        height:50,
        justifyContent:'center'
    },
    PromotionContainer:{
        height:30,
        flexDirection:'row',
    },
    PromotionText:{
        color:Colors.OliverDarker,
        "fontFamily": "normal",
        "fontSize": 12,
        fontWeight:'bold'
    },
    WarningTextMessage:{
        color:Colors.Red900,
        "fontFamily": "normal",
        "fontSize": 15,
        fontWeight:'bold',
        textAlign:'center'
    },
    IconStyleContainer:{
        backgroundColor:'white'
    }
})