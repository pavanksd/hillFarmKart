import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import CheckoutBox from '../components/checkoutBox'

import { globalStyles } from "../styles/styles";

export default class checkoutScreen extends Component {
    render() {
        return (
            <View style = { globalStyles.container }>
                <CheckoutBox />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
