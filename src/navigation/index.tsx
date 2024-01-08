import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen'
import AddUserScreen from '../Screens/AddUserScreen'
import UserListScreen from '../Screens/UserListScreen'
import { NavigationContainer } from '@react-navigation/native'



type RootStackParamList = {
    Home: undefined,
    AddUser: undefined,
    UserList: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
                <Stack.Screen name='AddUser' component={AddUserScreen}></Stack.Screen>
                <Stack.Screen name='UserList' component={UserListScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router