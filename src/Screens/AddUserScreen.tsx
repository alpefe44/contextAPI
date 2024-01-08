import { View, Text, TextInput, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

type Props = {}

const AddUserScreen = () => {

    const [name, setName] = useState("")
    const { addUser: userEkle } = useContext(UserContext)

    function addUser(user: string) {
        userEkle(user)
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput value={name} onChangeText={(text) => setName(text)} style={{ borderWidth: 2, borderRadius: 15 , width:'100%'}}></TextInput>
            <Button title='Add User' onPress={() => addUser(name)}></Button>
        </View>
    )
}

export default AddUserScreen