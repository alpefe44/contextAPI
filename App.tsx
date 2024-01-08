import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { UserContext, UserProvider } from './src/context/UserContext'
import Router from './src/navigation'

type Props = {}

const App = () => {

  return (
    <UserProvider>
      <Router></Router>
    </UserProvider>
  )
}

export default App