import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flatlist = () => {
    const users = [
        {
            name: 'John',
            id: 1,
        },
        {
            name: 'Harry',
            id: 2,
        },
        {
            name: 'Bruce',
            id: 3,
        },
        {
            name: 'Wayne',
            id: 4,
        },

    ]
    return (
        <View>
            <Text>Flatlist</Text>
            <Flatlist 
            data={users}
            renderItem = {(item) => <Text style={{fontSize:30}}>{item.name}</Text>}
            />
        </View>
    )
}

export default Flatlist

const styles = StyleSheet.create({})