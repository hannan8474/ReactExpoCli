import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import UserData from './src/views/UserData';
import UserInput from './src/forms/UserInput';
import SampleForm from './src/forms/SampleForm';
import Flatlist from './src/components/commons/Flatlist';


export default function App() {
  const [name, setName] = useState("Hannan");
  const changeName = () => {
    setName("Abdul Hannan");
  }
  return (
    <View>
      <ScrollView>
        <Text style={styles.container}>Here is the data of our user</Text>

        <UserData title={name} />
        <View>
          <Button title='Update State' onPress={() => changeName()} />
        </View>
        <UserInput />
        <View>
          <SampleForm />
        </View>
        <View>
          <Flatlist />
        </View>
      </ScrollView>
    </View>
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
