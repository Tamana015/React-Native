import { FlatList, View, StyleSheet, Text } from "react-native";
import ProductGrid from "../Components/UI/App/ProductsGrid";
import AddressComponent from "../Components/UI/App/AddressComponent";
import { PRODUCTS } from "../Data/DataInput";
import BottomContainer from "../Components/UI/App/BottomButtonContainer";
import Colors from "../Colors/Color";

function ProductsScreen() {
    function ProductsRenderItem(itemData)
    {
        return <ProductGrid code ={itemData.item.code}
                name={itemData.item.name} 
                image={itemData.item.image}
                margin = {itemData.item.margin} 
                mrp = {itemData.item.mrp}
                price = {itemData.item.price}
                offerOnline = {itemData.item.offerOnline}
                potentialPromotions = {itemData.item.potentialPromotions}
                isStoreOnly={itemData.item.isStoreOnly}
                stock = {itemData.item.stock}/>
    }

    return (
        <View style={styles.container}>
            <AddressComponent Address={"Erand Gardens Ext 94, 1682"}/>
            <Text style={styles.itemCountStyle}>{PRODUCTS.length} items</Text>
            <View style={styles.innerContainer}>
                <FlatList data={PRODUCTS} 
                    keyExtractor={(product) => product.code}
                    renderItem={ProductsRenderItem}
                    numColumns={2}>
                </FlatList>
            </View>
            
            <View style={styles.bottomContainer}>
                <BottomContainer/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    innerContainer:{
        flex:1,
        
    },
    bottomContainer:{
        borderWidth:1,
        height:56,
        flexDirection:'row',
        borderColor:Colors.grey20,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'white'
    },
    itemCountStyle:{
        margin:8,
        fontSize:12
    }
})

export default ProductsScreen;