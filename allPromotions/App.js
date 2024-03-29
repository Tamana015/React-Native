import { StatusBar } from 'expo-status-bar';
import ProductsScreen from './Screens/ProductsScreen';
import ProductDescriptionScreen from './Screens/ProductDescriptionScreen';
import SortProductsScreen from './Screens/SortProductsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FilterProductsScreen from './Screens/FilterProductsScreen';
import IconButton from './Components/UI/IconButton';
import SearchComponent from './Components/UI/App/SearchComponent';
import CartContextHandler from './Store/Context';
import CartQuantityComponent from './Components/UI/App/CartQuantityComponent';
import Colors from './Colors/Color';

export default function App() {

  //Create Native Stack and Bottom Tab Navigation
  const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();

  //Fucntion to Handle the ort and Filter Bottom Tabs Navigation
  // function BottomNavigationHandler()
  // {
  //   return (
  //     <Tab.Navigator>
  //       <Tab.Screen name='Sort' component={SortProductsScreen}/>
  //       <Tab.Screen name='Filter' component={FilterProductsScreen}/>
  //     </Tab.Navigator>
  //   )
  // } 

  return (
      <>
        <StatusBar style="auto" />
        <CartContextHandler>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'white'},
            contentStyle:{backgroundColor:Colors.grey2},
              headerRight : () => { return <CartQuantityComponent icon="cart-outline" color={"black"} size={36}/>},
                headerTitle : () => {return <SearchComponent/>},
                headerTitleAlign:'center'
            }}>
            <Stack.Screen  name='Products' component={ProductsScreen}/>
            <Stack.Screen  name='ProductDescription' component={ProductDescriptionScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
        </CartContextHandler>
      </>
  );
}

