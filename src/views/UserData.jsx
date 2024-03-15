import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

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

export default UserData

const styles = StyleSheet.create({
    data: {
        backgroundColor: 'green',
        height: 500,
        display: 'flex',
        justifyContent: 'center',

    },
})