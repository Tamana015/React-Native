import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FlatList } from "react-navigation";
import ProductDetailsContainer from "../Components/UI/App/ProductDetailsComponent";
import { PRODUCTS } from "../Data/DataInput";
import BottomContainer from "../Components/UI/App/BottomButtonContainer";
import Colors from "../Colors/Color";
import QuantityAddDeleteComponent from "../Components/UI/QuantityAddDeleteComponent";

function ProductDescriptionScreen({route}) {
    const code = route.params.code;
    const productDetails = PRODUCTS.filter((product) => product.code === code)

    return (
        <>
            <ScrollView key={({item,index}) => {return {item}}}>
                <ProductDetailsContainer productDetails={productDetails}/>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <QuantityAddDeleteComponent code={code} buttonStyle={styles.buttonStyle}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    bottomContainer:{
        borderWidth:1,
        height:64,
        borderColor:Colors.grey20,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'white',
        paddingHorizontal:8
    },
    buttonStyle:{
        // height:48,
        // padding:6
    }
})
export default ProductDescriptionScreen;