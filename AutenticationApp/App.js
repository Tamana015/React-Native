import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import AuthenticationContexProvider, { AuthenticationContex, } from './Store/AuthenticationContext';
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import IconButton from './components/ui/IconButton';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthenticationContex)
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logOut}
            />
          ),
        }} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const autheticate = useContext(AuthenticationContex)
  return (
    <NavigationContainer>
      {!autheticate.isAuthenticate && <AuthStack/>}
      {autheticate.isAuthenticate && <AuthenticatedStack/>}
    </NavigationContainer>
  );
}

function Root()
{
  const authCtx = useContext(AuthenticationContex)
  const [TokenLoad, SetTokenLoad] = useState(true)
  useEffect(() => {
    async function setAsyncValue()
    {
      const TokenIdAsync = await AsyncStorage.getItem('token');
      if(TokenIdAsync)
      {
         authCtx.authentication(TokenIdAsync);
      }
      SetTokenLoad(false)
    }
    setAsyncValue();
  },[])
  if(TokenLoad)
  {
    return <AppLoading />
  }
    return <Navigation/>
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthenticationContexProvider>
        <Root/>
      </AuthenticationContexProvider>
    </>
  );
}
