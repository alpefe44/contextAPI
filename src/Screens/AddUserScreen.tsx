import { View, Text, TextInput, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { User, UserContext } from '../context/UserContext'


const AddUserScreen = () => {

    const [name, setName] = useState("")
    const [soyad, setsoyad] = useState("")
    const { addUser: userEkle } = useContext(UserContext)

    function addUser(user: User) {
        userEkle({
            name: user.name,
            soyad: user.soyad
        })
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput value={name} onChangeText={(text) => setName(text)} style={{ borderWidth: 2, borderRadius: 15, width: '100%' }}></TextInput>
            <TextInput value={soyad} onChangeText={(text) => setsoyad(text)} style={{ borderWidth: 2, borderRadius: 15, width: '100%' }}></TextInput>
            <Button title='Add User' onPress={() => addUser({ name , soyad })}></Button>
        </View>
    )
}



export default AddUserScreen