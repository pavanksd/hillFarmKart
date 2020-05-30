import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { globalStyles } from "../styles/styles";

import DeliveryDetailsBox from "../components/DeliveryDetailsBox"

export default class userDetails extends Component {
    render() {
        return (
            <View style = { globalStyles.container }>
                    <DeliveryDetailsBox />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
