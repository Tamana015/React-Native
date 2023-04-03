import { Text, View, StyleSheet } from "react-native";
import AddressComponent from "./AddressComponent";
import SaveMrpContainer from "./SaveMrpContainer";
import ImageSliderContainer from "../ImageSliderContainer";
import TitleTextComponent from "../TitleTextComponent";
import Colors from "../../../Colors/Color";
import IconButton from "../IconButton";
import KeyFeatureComponent from "./KeyFeaturesComponent";
import FeatureHighlightComponents from "./FeatureHighlightComponents";
import {MaterialIcons,MaterialCommunityIcons } from "@expo/vector-icons"
import ViewFurtherDropDown from "./ViewFurtherDropDown";

function ProductDetailsContainer({productDetails}) {
    return (<View>
                <AddressComponent Address={"Erand Gardens Ext 94, 1682"}/>
                <SaveMrpContainer margin={productDetails[0].margin} mrpContainerStyle={styles.SaveMrpStyle}/>
                <ImageSliderContainer images={productDetails[0].images}/>
                <View style={styles.detailsContainer}>
                    <TitleTextComponent numberOfLines={2} name={productDetails[0].name} titleStyle={styles.titleStyle}/>
                    <Text style={styles.itemTextStyle}>Item no: {productDetails[0].itemNumber}</Text>
                    <View style={styles.subContainer}>
                        <View style={styles.dateContainer}>
                            <IconButton iconAddStyle={styles.iconAddStyle} icon={'time-outline'} color={'black'} size={20}></IconButton>
                            <Text style={styles.dateTitleStyle}>Valid till April 02, 2023</Text>
                        </View>
                        <Text style={styles.mrpText}>{productDetails[0].mrp.formattedValue}</Text>
                        <View style={styles.subInnerContainer}>
                            <Text style={[styles.priceText, productDetails[0].margin.formattedValue ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : styles.mrpText]}>{productDetails[0].price.formattedValue}</Text>
                            <Text style={[styles.marginText, !productDetails[0].margin.formattedValue && styles.mrpText]}>Save {productDetails[0].margin.formattedValue}</Text>
                        </View>
                        <KeyFeatureComponent keyFeaturesList={productDetails[0].keyFeatures}/>
                        <FeatureHighlightComponents isReturnable={productDetails[0].isReturnable}/>
                        <View style={styles.deliveryWarningContainer}>
                            <View style={styles.deliveryWarningInnerContainer}>
                                <View style={styles.deliveryWarningInnerContainer}>
                                    <MaterialCommunityIcons name="truck-outline" size={24} color={'black'}/>
                                    <Text style={styles.deliveryTextMessage}>Get this product delivered to your doorstep within 2 – 5 days</Text>
                                </View>
                                <MaterialIcons name="error-outline" size={16} color={'black'}/>
                            </View>
                        </View>
                        <ViewFurtherDropDown headerTtitle={"Product description"} textStyle={{fontWeight:'bold'}} details={productDetails[0].description}/>
                        <ViewFurtherDropDown headerTtitle={"Specification"} textStyle={{fontWeight:'bold'}}/>
                        <ViewFurtherDropDown headerTtitle={"Important links"}/>
                    </View>
                </View>
           </View>
    )
}

const styles = StyleSheet.create({
    SaveMrpStyle:{
        marginTop:8,
        marginLeft:8,
        flexWrap:'wrap'
    },
    detailsContainer:{
        margin:16,
    },
    titleStyle:{
        fontSize:18,
        marginBottom:16,
        color:Colors.BlackDark,
        fontWeight:'bold'
    },
    itemTextStyle:{
        color:Colors.grey5,
        fontSize:14,
        marginBottom:16
    },
    subContainer:{
        borderTopWidth:1,
        borderTopColor:Colors.grey20
    },
    dateContainer:{
        marginTop:16,
        flexDirection:'row',
    },
    iconAddStyle:{
        width:20,
        height:20,
        backgroundColor:'white'
    },
    dateTitleStyle:{
        lineHeight:20,
        marginLeft:4,
        fontSize:16,
    },
    mrpText:{
        color:Colors.purple700,
        "fontFamily": "normal",
        "fontSize": 24,
        paddingTop:12,
        fontWeight:'bold'
    },
    subInnerContainer:{
        flexDirection:'row'
    },
    priceText:{
        color:Colors.grey5,
        "fontFamily": "normal",
        "fontSize": 14
    },
    marginText:{
        color:'black',
        "fontFamily": "normal",
        "fontSize": 14,
        paddingLeft:4
    },
    deliveryWarningContainer:{
        marginVertical:24,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:Colors.grey20,
        paddingVertical:16
    },
    deliveryWarningInnerContainer:{
        flexDirection:'row',
        flex:1,
    },
    deliveryTextMessage:{
        marginHorizontal:8,
        fontSize:14,
        maxWidth:'80%',
        color:'black',
        alignItems:'center',
    }
})

export default ProductDetailsContainer;