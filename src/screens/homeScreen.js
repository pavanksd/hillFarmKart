import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

import { globalStyles } from "../styles/styles";

export default class HomeContainer extends Component {
    render() {
        return (
            <View style = { globalStyles.container }>
				<View style={styles.imageArea}>
					<Image source={require('../../assets/images/homeScreenlogo.png')} style={{height:150,width:150,marginRight:40}} />
				</View>
				<View style = {styles.centerBox}>
					<Text style = {styles.mainTitleText}> Hill Fram <Text style = {{fontStyle: 'italic'}}>Kart </Text></Text>
					<Text style = {styles.subTitleText}>Virtual Farmers' Market of Darjeeling</Text>
				</View>
				<View style={styles.browseCatalog}>
					<TouchableOpacity activeOpacity={.7}  style={styles.buttonBrowse} onPress={()=>this.isUseruthenticated()} >
						<Text style={styles.buttonText}> Browse Farm Fresh </Text>
					</TouchableOpacity>
				</View>
			</View>
        )
	}

	isUseruthenticated = async () => {
        try {
		  const value = await AsyncStorage.getItem('isUseruthenticated')
          if(value !== null) {
            if(value){
                this.props.navigation.navigate('Catalog');
			}
			else{
				this.props.navigation.navigate('Login')
			}
		  }
		  else{
			this.props.navigation.navigate('Login')
		}
        } catch(e) {
          // error reading value
        }
      }
}


const styles = StyleSheet.create({
	  imageArea:{
		  justifyContent: 'flex-end',
		  alignItems: 'center',
		  flex:2,
	  },
	  centerBox:{
		  justifyContent: 'center',
		  alignItems: 'center',
		  flex:1,
	  },
	  browseCatalog:{
		  flex:1,
		  alignSelf: 'center',
		  justifyContent:'center',
		  marginBottom:90,
	  },
	  mainTitleText:{
		  backgroundColor:'#ffffff',
		  color: '#23B24B',
		  fontSize: 40,
	  },	
	  subTitleText:{
		  marginTop:8,
		  fontSize: 16,
		  color: '#ffffff',
	  },
	  buttonBrowse: {
		  alignItems: 'center',
		  backgroundColor: '#FFFFFF',
		  padding: 10,
		  borderRadius:8
	  },
	  buttonText:{
		  color:'#23B24B',
		  fontSize:20
	  }
  });
  

