import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Favorite({ icon, color, onPressItem }) {
  return (
    <Pressable
      onPress={onPressItem}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
export default Favorite;