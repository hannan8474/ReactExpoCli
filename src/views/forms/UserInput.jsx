import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import UserInputStyles from '../styles/UserInputStyles'

const UserInput = () => {
    const [name, setName] = useState('')
    const HandleInput = () => {
        setName('');
    }
    return (
        <View>
            <TextInput
                style={UserInputStyles.inputField}
                placeholder='Enter your name'
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Text>Entered name is: {name}</Text>
            <Button title='Clear' onPress={() => HandleInput()} />
        </View>
    )
}

export default UserInput

const styles = StyleSheet.create({
    inputField: {
        borderRadius: 2,
        fontSize: 12,
    }
})