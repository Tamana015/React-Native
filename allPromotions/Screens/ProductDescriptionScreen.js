import { Text, View } from "react-native";
import AddressComponent from "../Components/UI/App/AddressComponent";
import ImageSliderContainer from "../Components/UI/ImageSliderContainer";
import { PRODUCTS } from "../Data/DataInput";

function ProductDescriptionScreen({route}) {
    const code = route.params.code;
    const productDetails = PRODUCTS.filter((product) => product.code === code)
    console.log(productDetails[0].images)
    return (
        <View>
            <AddressComponent Address={"Erand Gardens Ext 94, 1682"}/>
            <Text>{code}</Text>
            <ImageSliderContainer images={productDetails[0].images}/>
        </View>
    )
}

export default ProductDescriptionScreen;