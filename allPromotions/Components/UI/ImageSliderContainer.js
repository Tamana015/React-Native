import { StyleSheet, View } from "react-native"
import Slider from "react-native-hook-image-slider"
import Colors from "../../Colors/Color"
import IconButton from "./IconButton"

function ImageSliderContainer() {
  return (
    <View><View style={styles.outerContainer}>
      <View style={styles.imageContainer}>
        <Slider
          images={[
            "./images/you_are_awesome.jpeg",
            "https://yourCDNLink.com/cat.jpeg",
            "home/project/profits/spreadsheet.jpeg",
          ]}
        />
      </View>
        <View style={styles.iconContainer}>
            <IconButton icon={'heart-outline'} color={Colors.grey200} size={20} iconAddStyle={styles.IconStyleContainer}></IconButton>
            <IconButton icon={'share-social-outline'} color={Colors.grey200} size={20} iconAddStyle={styles.IconStyleContainer}></IconButton>
        </View>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  outerContainer:{
    height:277,
    width:'100%',
  },
  imageContainer:{
    width:262,
    borderWidth:2,
    aspectRatio:2,
    alignSelf:'center',
  },
  IconStyleContainer:{
    flexWrap:'wrap',
    borderRadius:0,
    width:24,
    height:24,
    marginTop:3
  },
  iconContainer:{
    top:-100,
    right:-350
  },
})

export default ImageSliderContainer;