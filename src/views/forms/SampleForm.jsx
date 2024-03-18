import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import UserInputStyles from '../../styles/UserInputStyles'

const SampleForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [display, setDisplay] = useState(false)

    const ClearInput = () => {
        setName('')
        setEmail('')
        setPassword('')
        setDisplay(false)
    }
    return (
        <View>
            <TextInput
                placeholder='Enter your name'
                onChangeText={(text) => setName(text)}
                value={name}
                style={UserInputStyles.inputField}
            />
            <TextInput
                placeholder='Enter your email'
                onChangeText={(text) => setEmail(text)}
                value={email}
                style={UserInputStyles.inputField}
            />
            <TextInput
                placeholder='Enter your password'
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
                style={UserInputStyles.inputField}
            />
            <View style={{backgroundColor:'blue'}}>
                <Button title='Set Details' onPress={() => setDisplay(true)} />
            </View>
            <View style={{backgroundColor:'red'}}>
                <Button title='Clear Details' onPress={() => ClearInput()} />
            </View>

            <View>
                {display ? 
                <View>
                    <Text>{name}</Text>
                    <Text>{email}</Text>
                    <Text>{password}</Text>
                </View> : null
                }
            </View>
        </View>

    )
}

export default SampleForm

// const styles = StyleSheet.create({})