import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import Logincard from '../components/logincard'

import { globalStyles } from "../styles/styles";

export default class loginContainer extends Component {

    render() {
        return (
            <View style={globalStyles.container} >
                <Logincard navigation={this.props.navigation} />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
