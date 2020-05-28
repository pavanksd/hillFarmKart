import React, { Component } from 'react'

import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

import HomeScreen from './src/components/homeContainer'
import LoginScreen from './src/components/loginContainer'


const Stack = createStackNavigator()

const matchContentwithHeader = {
									title: '',
									headerLeft: null,
										headerStyle: {
										backgroundColor: '#23B24B',
										elevation: 0,
										shadowOpacity: 0,
									}
								}
export default class App extends Component {
  render() {
    return (
			<NavigationContainer>
				<Stack.Navigator screenOptions={{
					 cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
					<Stack.Screen name="home" component={HomeScreen}  options={matchContentwithHeader} />
					<Stack.Screen name="Login" component={LoginScreen} options={matchContentwithHeader} />
				</Stack.Navigator>
			</NavigationContainer>
      
    );
  }
}
