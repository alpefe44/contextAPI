import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

type Props = {}

const UserListScreen = (props: Props) => {

    const { users } = useContext(UserContext)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
                users && users.map((user) => {
                    return (
                        <View>
                            <Text>{user}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default UserListScreen