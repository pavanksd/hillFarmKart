import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { globalStyles } from "../styles/styles";

export default class loginContainer extends Component {
    render() {
        return (
            <View style={globalStyles.container} >
                <Text> Login </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
