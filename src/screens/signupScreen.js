import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { globalStyles } from "../styles/styles";
import SignupCard from '../components/signUpCard'

export default class signupScreen extends Component {
    render() {
        return (
            <View style={globalStyles.container}>
                <SignupCard navigation={this.props.navigation} />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
