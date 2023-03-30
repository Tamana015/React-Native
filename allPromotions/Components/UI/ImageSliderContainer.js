import { View, StyleSheet } from "react-native";
import Slideshow from "react-native-image-slider-show";

const ImageSliderContainer = ({images}) => {
  console.log(images)
  return (
    <View>
      <Slideshow
        dataSource={images}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer:{
  }
});

export default ImageSliderContainer;