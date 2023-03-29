import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlacesScreen from './screens/AllPlacesScreen';
import IconButton from './components/ui/IconButton';
import AddPlacesScreen from './screens/AddPlacesScreen';
import colors from './styles/colors';
import MapsScreen from './screens/MapsScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:colors.primary100},
          headerTintColor:colors.primary300,
          contentStyle:{backgroundColor:colors.primary200},
          headerTitleAlign:'center',
        }}>
          <Stack.Screen name="AllPlaces" component={AllPlacesScreen}
           options={
            ({navigation}) => ({
            headerRight : () => { return <IconButton icon="md-add" color={"white"} size={32} pressButton={() => navigation.navigate("AddPlaces")}/>}
           ,title:'All Places'})}></Stack.Screen>
          <Stack.Screen name="AddPlaces" component={AddPlacesScreen} options={{
            title:'Add a New Place'
          }}></Stack.Screen>
          <Stack.Screen name="Maps" component={MapsScreen} options={{
            title:'Pick a Location'
          }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

