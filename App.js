import React, { Component } from 'react'

import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

import HomeScreen from './src/screens/homeScreen'
import LoginScreen from './src/screens/loginScreen'
import CatalogScreen from './src/screens/catalogScreen'


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
					<Stack.Screen name="Catalog" component={CatalogScreen} options={{
						title: 'e-Hatt Items',
						headerTintColor: '#FFFFFF',
						headerLeft: null,
							headerStyle: {
							backgroundColor: '#23B24B',
							elevation: 0,
							shadowOpacity: 0,
						},
						headerTitleStyle: {
							fontSize: 34,
						  },
					}
					} />
				</Stack.Navigator>
			</NavigationContainer>
      
    );
  }
}
