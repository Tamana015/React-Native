import { FlatList, View } from "react-native";
import ProductGrid from "../Components/UI/App/ProductsGrid";
import AddressComponent from "../Components/UI/App/AddressComponent";
import { PRODUCTS } from "../Data/DataInput";

function ProductsScreen() {
    function ProductsRenderItem(itemData)
    {
        function onCategoryHandler()
        {
        //     navigation.navigate('MealsList',{categoryId: itemData.item.id,})
        }
        return <ProductGrid code ={itemData.item.code}
                name={itemData.item.name} 
                image={itemData.item.image}
                margin = {itemData.item.margin} 
                mrp = {itemData.item.mrp}
                price = {itemData.item.price}
                offerOnline = {itemData.item.offerOnline}
                potentialPromotions = {itemData.item.potentialPromotions}
                isStoreOnly={itemData.item.isStoreOnly}
                stock = {itemData.item.stock}
                onPress={onCategoryHandler}/>
    }
    return (
        <View>
            <AddressComponent Address={"Erand Gardens Ext 94, 1682"}/>
            <FlatList data={PRODUCTS} 
                keyExtractor={(product) => product.code}
                renderItem={ProductsRenderItem}
                numColumns={2}>
            </FlatList>
        </View>
    )
}

export default ProductsScreen;