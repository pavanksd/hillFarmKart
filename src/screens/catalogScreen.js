import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { globalStyles } from "../styles/styles";
import { StackActions } from '@react-navigation/native';

import SearchCatalog from "../components/searchCatalog";
import CatalogArea from "../components/catalogArea";

export default class catalogContainer extends Component {
    render() {
        this.isUseruthenticated();
        return (
            <View style = { globalStyles.container }>
                <View style = {{flex:1}}>
                    <SearchCatalog />
                    <CatalogArea navigation={this.props.navigation} />
                </View>
            </View>
        )
    }

    isUseruthenticated = async () => {
        try {
          const value = await AsyncStorage.getItem('isUseruthenticated')
          if(value !== null) {
            if(!value){
                this.props.navigation.dispatch(StackActions.replace('Login'));
            }
          }
        } catch(e) {
          this.props.navigation.dispatch(StackActions.replace('Login'));
        }
      }
}

const styles = StyleSheet.create({

})
