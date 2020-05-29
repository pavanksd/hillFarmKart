import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { globalStyles } from "../styles/styles";

import SearchCatalog from "../components/searchCatalog";
import CatalogArea from "../components/catalogArea";

export default class catalogContainer extends Component {
    render() {
        return (
            <View style = { globalStyles.container }>
                <View style = {{flex:1}}>
                    <SearchCatalog />
                    <CatalogArea />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
