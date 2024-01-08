import { View, Text, Button } from 'react-native'
import React from 'react'


const HomeScreen = ({ navigation }: any) => {
    return (
        <View>
            <Button title='Add User' onPress={() => navigation.navigate('AddUser')}></Button>
            <Button title='User List' onPress={() => navigation.navigate('UserList')}></Button>
        </View >
    )
}

export default HomeScreen