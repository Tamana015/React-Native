import { FlatList, View, StyleSheet, Text } from "react-native";
import ProductGrid from "../Components/UI/App/ProductsGrid";
import AddressComponent from "../Components/UI/App/AddressComponent";
import { PRODUCTS } from "../Data/DataInput";
import Colors from "../Colors/Color";
import TitleButton from "../Components/TitleButton";
import { useNavigation } from "@react-navigation/native";

function ProductsScreen() {
    
    const navigation = useNavigation();
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

    function clickNavigationHandler(clickedButton)
    {
        const navigationName = clickedButton === 'Sort' ? 'SortProductsScreen': 'FilterProductsScreen'
        navigation.navigate(navigationName)
    }

    return (
        <View style={styles.container}>
            <AddressComponent Address={"Erand Gardens Ext 94, 1682"}/>
            <View style={styles.innerContainer}>
                <FlatList data={PRODUCTS} 
                    keyExtractor={(product) => product.code}
                    renderItem={ProductsRenderItem}
                    numColumns={2}>
                </FlatList>
            </View>
            <View style={styles.bottomContainer}>
                <TitleButton buttonStyle={styles.buttonStyle} onPressAction={clickNavigationHandler.bind(this,'Sort')}>Sort</TitleButton>
                <TitleButton buttonStyle={styles.buttonStyle} onPressAction={clickNavigationHandler.bind(this,'Filter')}>Filter</TitleButton>
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
        height:50,
        flexDirection:'row',
        borderColor:Colors.grey20,
        justifyContent:'space-between',
        alignItems:'center',
    },
    buttonStyle:{
        borderWidth:0,
        borderRightWidth:1,
        borderRightColor:Colors.grey10,
        flex:1,
    }
})

export default ProductsScreen;