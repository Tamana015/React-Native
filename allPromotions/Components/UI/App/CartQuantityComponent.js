import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { Pressable, StyleSheet,Text, View} from "react-native";
import Colors from "../../../Colors/Color";
import { CartContext } from "../../../Store/Context";

function CartQuantityComponent({icon, color, size,onPressIcon})
{
    const cartItemContext = useContext(CartContext)
    return (
        <Pressable onPress={onPressIcon} style={({pressed}) => [styles.iconStyle, pressed && styles.pressed]}>
            <Ionicons name={icon} color={color} size={size}></Ionicons>
            {cartItemContext.cartItems.length > 0 ? (
                  <View
                    style={styles.cartQuantity}>
                    <Text
                      style={styles.textStyle}>
                      {cartItemContext.cartItems.length}
                    </Text>
                  </View>
                ) : null}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconStyle:{
        color:Colors.grey200,
        borderRadius:12,
        flexDirection:'column',
    },
    cartQuantity:
        { 
            position: 'absolute',
            backgroundColor: Colors.purple700,
            width: 16,
            height: 16,
            borderRadius: 15 / 2,
            right:-1,
            top: -1,
            alignItems: 'center',
            justifyContent: 'center',
    },
    pressed : {
        color:Colors.grey20,
        opacity:0.5,
    },
    textStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        color: "#FFFFFF",
        fontWeight:'bold',
        fontSize: 10,
      }
})

export default CartQuantityComponent;