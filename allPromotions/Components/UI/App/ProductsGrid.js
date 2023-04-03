import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View,Text, StyleSheet, Pressable } from "react-native";
import { Image } from "react-native-elements";
import Colors from "../../../Colors/Color";
import IconButton from "../IconButton";
import TitleTextComponent from "../TitleTextComponent";
import PriceDiscountContainer from "./PriceDiscountBoxComponent";
import ProductButtonComponent from "./ProductButtonComponent";
import SaveMrpContainer from "./SaveMrpContainer";

function ProductGrid({code,name,image, margin,mrp, price,stock, potentialPromotions,isStoreOnly, offerOnline}){
    const navigation = useNavigation();

    let SaveAndOfferContainer = (margin.formattedValue && <SaveMrpContainer margin={margin}/>);
    let headerStyle = {padding:15}
    if(offerOnline !== '')
    {
        headerStyle = {padding:0, paddingTop:15}
        SaveAndOfferContainer = (<><View style={{height:40}}>
            <Image source ={{uri:offerOnline}} style={styles.image}/></View>
            {margin.formattedValue &&  <SaveMrpContainer margin={margin}/>}</>)
    }

    function viewProductDetailHandler()
    {
        navigation.navigate('ProductDescription',{ code:code,})
    }

    return (
        <View style={[styles.container]}>
            <Pressable style={({pressed}) =>[pressed ? styles.onPressButton : null, styles.button]} android_ripple={"#888888"} onPress={viewProductDetailHandler}>
                <View style={[styles.SaveContainer,headerStyle, !margin.formattedValue && styles.setJustifyContent]}>
                    {SaveAndOfferContainer}
                   <IconButton icon={'heart-outline'} color={Colors.grey200} size={22} iconAddStyle={styles.IconStyleContainer}></IconButton>
                </View>
                <View style={styles.innerContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: image }} style={styles.image}/>
                    </View>
                    <TitleTextComponent numberOfLines={2} name={name}></TitleTextComponent>
                    <View style={styles.subInnerContainer}></View>
                    <View style={styles.PriceDiscountContainer}>
                        <PriceDiscountContainer mrp={mrp} margin={margin} price={price}/>
                        <View style={styles.PromotionContainer}>
                            {potentialPromotions.at(0) && <MaterialCommunityIcons name="brightness-percent" size={20} color={Colors.OliverDarker}/>}
                            {potentialPromotions.at(0) && <Text style={styles.PromotionText} numberOfLines={2}>{potentialPromotions.at(0)}</Text>}
                        </View>
                    </View>
                    <ProductButtonComponent code={code} isStoreOnly={isStoreOnly} stock={stock} potentialPromotions={potentialPromotions} viewProductDetailHandler={viewProductDetailHandler}></ProductButtonComponent>
                </View>
                </Pressable>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        margin:5,
        justifyContent:"center",
        maxHeight:450,
        borderColor: Colors.grey15,
        borderWidth : 0.5,
        backgroundColor:Colors.grey2,
        borderRadius:5,
        paddingTop:5,
        marginTop:10,
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
        fontSize: 10,
        backgroundColor: Colors.purple100,
        height:24,
        justifyContent:'center',
        alignContent:'center'
    },
    subInnerContainer:{
        height:40,
        marginTop:8
    },
    SaveContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    setJustifyContent:{
        justifyContent:'flex-end'
    },
    imageContainer:{
        height:128,
        width:128,
        justifyContent:'center',
        margin:8,
    },
    image:{
        width:'100%',
        height:'100%',
        aspectRatio: 1.5, 
        resizeMode: 'contain',
    },
    boldText: {
        fontWeight: 'bold'
    },
    PriceDiscountContainer:{
        height:'25%',
        justifyContent:'center'
    },
    AddContainer:{
        borderTopWidth:1,
        borderTopColor: Colors.grey15,
        height:50,
        justifyContent:'center'
    },
    PromotionContainer:{
        flexDirection:'row',
    },
    PromotionText:{
        color:Colors.OliverDarker,
        "fontFamily": "normal",
        fontSize: 12,
        fontWeight:'bold',
        lineHeight:12
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
export default ProductGrid;