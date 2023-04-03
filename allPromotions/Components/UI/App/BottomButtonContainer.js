import FilterProductsScreen from "../../../Screens/FilterProductsScreen";
import Colors from "../../../Colors/Color";
import TitleButton from "../../TitleButton";
import SortProductsScreen from "../../../Screens/SortProductsScreen";
import { StyleSheet,Modal,View } from "react-native";
import {useState } from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BottomContainer()
{
    const [modalVisible, setModalVisible] = useState(false);
    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const navigation = useNavigation();

    // useLayoutEffect(() => 
    // {
    //   navigation.setOptions('Products',{contentStyle:{backgroundColor:'red'}})
    // },[])

    return (
        <>
                  <View style={styles.buttonContainerStyle}>
                        <Modal
                          animationType="slide"
                          transparent={true}
                          // backdropOpacity={0.70}
                          // hasBackdrop={true}
                          // backdropOpacity={0.5}
                          // backdropColor={'rgba(230, 230, 240, 1.9)'}
                          // style={{backgroundColor:'black'}}
                          visible={modalVisible}
                          onRequestClose={() => {
                            setModalVisible(!modalVisible);
                          }}>
                            <SortProductsScreen onPressAction={() => setModalVisible(!modalVisible)}/>
                          </Modal>
                        <Pressable
                          style={styles.buttonStyle}
                          onPress={() => setModalVisible(true)}>
                          <TitleButton buttonStyle={styles.buttonStyle}>Sort</TitleButton>
                        </Pressable>
                      </View>

                      <View style={styles.buttonContainerStyle}>
                        <Modal
                          animationType="slide"
                          transparent={true}
                          visible={filterModalVisible}
                          onRequestClose={() => {
                            setFilterModalVisible(!filterModalVisible);
                          }}>
                             </Modal>
                          <TitleButton buttonStyle={styles.buttonStyle} onPressAction={() => setFilterModalVisible(true)}>Filter</TitleButton>
                      </View>
        </>
    )
}


const styles = StyleSheet.create({
    buttonStyle:{
        borderWidth:0,
        borderRightWidth:1,
        borderRightColor:Colors.grey10,
        flex:1,
    },

    buttonContainerStyle:{
      flex:1,
      paddingTop:10
  }

    ,
    centeredView: {
        flex: 1,
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})