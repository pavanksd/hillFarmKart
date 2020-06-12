import React, { Component } from 'react'
import { Button } from 'react-native'
import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { Provider } from 'react-redux';

import store from './src/redux/store';
import HomeScreen from './src/screens/homeScreen'
import LoginScreen from './src/screens/loginScreen'
import CatalogScreen from './src/screens/catalogScreen'
import CheckoutScreen  from './src/screens/checkoutScreen'
import UserDetailsScreen from './src/screens/userDetailsScreen'
import OrderSuccessScreen from './src/screens/orderStatusScreen'

const Stack = createStackNavigator()

const matchContentwithHeader = {
									title: '',
									headerStyle: {
										backgroundColor: '#23B24B',
										elevation: 0,
										shadowOpacity: 0,
									},
									headerTintColor:'#FFFFFF'
								}
export default class App extends Component {
  render() {
    return (
		<Provider store={store} >
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home" screenOptions={{
					 cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
					<Stack.Screen name="Home" component={HomeScreen}  options={matchContentwithHeader} />
					<Stack.Screen name="Login" component={LoginScreen} options={matchContentwithHeader} />
					<Stack.Screen name="Catalog" component={CatalogScreen}
					
					options={({route, navigation}) => (
						{
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
						headerRight:()=>(<Button
								onPress= {()=>navigation.navigate('Checkout')}
								title="Checkout"
								color="#23B28B"
							  />),
						route: {route}, 
						navigation: {navigation}}
					)
					} 
					/>
					<Stack.Screen name="Checkout" component={CheckoutScreen} options={matchContentwithHeader} />
					<Stack.Screen name="UserDetails" component={UserDetailsScreen} options={matchContentwithHeader} />
					<Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} options={matchContentwithHeader} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
      
    );
  }
}
