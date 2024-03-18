import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import UserData from './src/views/UserData';
import UserInput from './src/forms/UserInput';
import SampleForm from './src/forms/SampleForm';
import Flatlist from './src/components/commons/Flatlist';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function App() {
  const [name, setName] = useState("Hannan");
  const changeName = () => {
    setName("Abdul Hannan");
  }
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='User' component={UserInput}/>
      </Stack.Navigator>
      <Tab.Navigator>
        <Tab.Screen name='User' component={UserInput} />
        <Tab.Screen name='Input' component={SampleForm} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff5',
    color: 'red',
    fontSize: 24,
    margin: 20,
  },

});
