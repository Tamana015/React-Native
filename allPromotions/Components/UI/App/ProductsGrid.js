import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, useContext, useEffect } from "react";
import { View,Text, StyleSheet, Pressable } from "react-native";
import { Image } from "react-native-elements";
import Colors from "../../../Colors/Color";
import { CartContext } from "../../../Store/Context";
import IconTitleButton from "../../IconTitleButton";
import TitleButton from "../../TitleButton";
import IconButton from "../IconButton";
import QuantityAddDeleteComponent from "../QuantityAddDeleteComponent";

function ProductGrid({code,name,image, margin,mrp, price,stock, potentialPromotions,isStoreOnly, offerOnline, onPress}){
    const cartItems = useContext(CartContext);

    let SaveAndOfferContainer = (margin.formattedValue && <Text style={styles.SaveText}>Save <Text style={styles.boldText}>{margin.formattedValue}</Text></Text>);
    let headerStyle = {padding:15}
    if(offerOnline !== '')
    {
        headerStyle = {padding:0, paddingTop:15}
        SaveAndOfferContainer = (<><View style={{height:40}}>
            <Image source ={{uri:offerOnline}} style={styles.image}/></View>
            {margin.formattedValue &&  <Text style={styles.SaveText}>Save <Text style={styles.boldText}>{margin.formattedValue}</Text></Text>}</>);
    }

    let AddButtonContainer = <IconTitleButton icon={'cart-outline'} color={Colors.grey200} size={22} pressButton={onAddProductHandler}>Add</IconTitleButton>

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
        AddButtonContainer = <TitleButton>View Deals</TitleButton>
    }

    // if(cartItems.IsItemsExist.bind(this,code))
    // {
    //     AddButtonContainer = <QuantityAddDeleteComponent/>
    // }
    function onAddProductHandler(){
        cartItems.AddItems(code);
        AddButtonContainer = <QuantityAddDeleteComponent/>
    }
    return (
        <View style={[styles.container]}>
            <Pressable style={({pressed}) =>[pressed ? styles.onPressButton : null, styles.button]} android_ripple={"#888888"} onPress={onPress}>
                <View style={[styles.SaveContainer,headerStyle, !margin.formattedValue && styles.setJustifyContent]}>
                    {SaveAndOfferContainer}
                   <IconButton icon={'heart-outline'} color={Colors.grey200} size={22}></IconButton>
                </View>
                <View style={styles.innerContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: image }} style={styles.image}/>
                    </View>
                    <Text style={styles.titleText} numberOfLines={2}>{name}</Text>
                    <View style={styles.PriceDiscountContainer}>
                        <Text style={[styles.mrpText,styles.boldText]}>{mrp.formattedValue}</Text>
                        <Text style={[styles.priceText, margin.formattedValue ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : [styles.mrpText,styles.boldText]]}>{price.formattedValue}</Text>
                        <View style={styles.PromotionContainer}>
                            {potentialPromotions.at(0) && <MaterialCommunityIcons name="brightness-percent" size={20} color={Colors.OliverDarker}/>}
                            {potentialPromotions.at(0) && <Text style={styles.PromotionText} numberOfLines={2}>{potentialPromotions.at(0)}</Text>}
                        </View>
                    </View>
                    <View style={styles.AddContainer}>
                        {AddButtonContainer}
                    </View>
                </View>
                </Pressable>
        </View>
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
        paddingTop:2
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
        height:25,
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
        height:40,
        color:Colors.grey200,
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
    }
})
export default ProductGrid;