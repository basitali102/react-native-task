import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IndexExampleContainer } from '@/Containers'
import Dashboard from '@/Containers/Example/Dashboard'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      labelPosition: "beside-icon",
      activeTintColor: "white",
      style: {
      backgroundColor: "black",
    },
    labelStyle: {
      fontSize: 20,
    },
    tabStyle: {
      fontSize: 10,
    },
    }} >
      <Tab.Screen name="Home" component={IndexExampleContainer} />
      <Tab.Screen name="dashboard" component={Dashboard} /> 
    </Tab.Navigator>
  )
}



export default MainNavigator
