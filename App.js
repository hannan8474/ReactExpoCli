import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState("Hannan");
  const changeName = () => {
    setName("Abdul Hannan");
  }
  return (
    <View>
      <Text style={styles.container}>Here is the data of our user</Text>
      <UserData title={name}/>
      <View>
        <Button title='Update State' onPress={() => changeName()} />
      </View>
    </View>
  );
}



const UserData = (props) => {
  const myFunc = () => {
    console.warn('Function called');
  }

  return (
    <>
      <View style={styles.data}>
        <Text style={{ textAlign: 'center' }}>
        name: {props.title}
        </Text>
        <Text style={{ textAlign: 'center' }}>
          age: 21
        </Text>
      </View>

      <View>
        <Button title='Press Me' color='red' onPress={myFunc} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff5',
    color: 'red',
    fontSize: 24,
    margin: 20,
  },
  data: {
    backgroundColor: 'green',
    height: 500,
    display: 'flex',
    justifyContent: 'center',

  }
});
