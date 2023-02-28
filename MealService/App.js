import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AllCategory from './Screens/AllCategory';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryItems from './Screens/CategoryItems';
import MealOverView from './Screens/MealsOverView';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteMeals from './Screens/FavoriteMeals';
import { Ionicons } from '@expo/vector-icons';
import FavouriteContext from './Store/Context/FavouriteContex';

const Tab = createBottomTabNavigator();
// const drawer = createDrawerNavigator();
// function drawerNavigatorHandler()
// {
//   return (<drawer.Navigator>
//     <drawer.Screen name="MealTypes" component={AllCategory}></drawer.Screen>
//   </drawer.Navigator>)
// }
function BottomNavigatorHandler()
{
  return (<Tab.Navigator screenOptions={{
    headerStyle:{backgroundColor:"#2d5986"},
    headerTintColor:"white",
    contentStyle:{backgroundColor:"#00394d"},
    tabBarStyle:{backgroundColor:"#00394d"},
    tabBarActiveTintColor:"white"
  }}>
    <Tab.Screen name="Options" component={AllCategory} options={
      {
        headerTitle:"Meal Types",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="home"
              size={24}
              color={tabInfo.focused ? "#e60073" : "#8e8e93"}
            />
          );
        }
      }
    }></Tab.Screen>
    <Tab.Screen name="Favorite" component={FavoriteMeals} options={
      {
        headerTintColor:"white",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="heart"
              size={24}
              color={tabInfo.focused ? "#e60073" : "#8e8e93"}
            />
          );
        }
      }
    }></Tab.Screen>
  </Tab.Navigator>)
}
export default function App() {
  const stack= createNativeStackNavigator();
  return (
    <>
       <StatusBar style="light"/>
       <FavouriteContext>
        <NavigationContainer>
          <stack.Navigator screenOptions={{
              headerStyle:{backgroundColor:"#2d5986"},
              headerTintColor:"white",
              contentStyle:{backgroundColor:"#00394d"}
          }}>
            <stack.Screen name='MealTypes' component={BottomNavigatorHandler} options={{title:"All Category", headerShown: false}}/>
            <stack.Screen name='MealsList' component={CategoryItems}/>
            <stack.Screen name="MealOverView" component={MealOverView}></stack.Screen>
          </stack.Navigator>
        </NavigationContainer>
        </FavouriteContext>
    </>
  );
}

const styles = StyleSheet.create({
});
