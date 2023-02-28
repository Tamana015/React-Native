import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllExpensesScreen from './Screen/AllExpensesScreen';
import ManageExpensesScreen from './Screen/ManageExpensesScreen';
import RecentExpensesScreen from './Screen/RecentExpensesScreen';
import {Ionicons} from'@expo/vector-icons';
import { GlobalStyles } from './constants/ColorsStyle';
import IconAdd from './Components/ui/IconAdd';
import ExpenseContextProvider from './Store/Expenses-Context';

const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()
function AllRecentTabHandler()
{
  return (
    <Tabs.Navigator screenOptions={({navigation}) => ({
              headerStyle:{backgroundColor:GlobalStyles.colors.primary50},
              headerTintColor:"white",
              headerTitleAlign:"center",
              tabBarStyle:{backgroundColor:GlobalStyles.colors.primary50},
              tabBarActiveTintColor:"white",
              headerRight:() => {return <IconAdd icon={"add"} color={"white"} size={30} 
              onPressAction={() => {navigation.navigate('ManageExpensesScreen')}}/>}
    })}>
       <Tabs.Screen name='RecentExpensesScreen' component={RecentExpensesScreen} options={{
        headerTitle:"Recent Expenses",
        tabBarIcon: ({color,size}) => {return (<Ionicons name='calendar' color={color} size={size}></Ionicons>)},
        title:'Recent'
      }}/>
      <Tabs.Screen name='AllExpensesScreen' component={AllExpensesScreen} options={{
        headerTitle:"All Expenses",
        tabBarIcon: ({color,size}) => {return (<Ionicons name='timer-outline' color={color} size={size}></Ionicons>)},
        title:'All Expense'
      }}/>
    </Tabs.Navigator> 
  )
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
        <ExpenseContextProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerStyle:{backgroundColor:GlobalStyles.colors.primary50},
              headerTintColor:"white",
              headerTitleAlign:"center"

            }}>
              <Stack.Screen name='ExpensesScreen' component={AllRecentTabHandler} options={{
                headerShown:false
              }}/>
              <Stack.Screen name='ManageExpensesScreen' component={ManageExpensesScreen} options={{
                headerTitle:"Manage Expense",
                presentation:'containedModal'}}/>
            </Stack.Navigator>
          </NavigationContainer>
        </ExpenseContextProvider>
      </>
  );
}
