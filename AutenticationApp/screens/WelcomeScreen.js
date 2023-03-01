import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthenticationContex } from '../Store/AuthenticationContext';

function WelcomeScreen() {
  const [fetchMessage, SetMessage] = useState();
  const authData = useContext(AuthenticationContex)
  const token = authData.token
  useEffect(() => {
    async function getAuthData()
    {
      const response = await axios.get('https://adidos-4b7b5.firebaseio.com/message.json?auth=' +
      token)
      SetMessage(response.data)
    }
    getAuthData();
  },[])
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
