import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { globalStyles } from "../styles/styles";

import OrderSucess from '../components/orderSucess'

export default class orderStatusScreen extends Component {
    render() {
        return (
            <View style = { globalStyles.container }>
                <OrderSucess />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
