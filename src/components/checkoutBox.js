import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import CheckOutCard from './checkoutCard'
import CustomerCard from './customerCard'

export default class checkoutBox extends Component {
    render() {
        return (
            <View style={{flex:1}} >
                <View style={styles.CustomerCard}>
                    <CustomerCard />
                </View>
                <View style={styles.CheckOutCard}>
                    <CheckOutCard />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    CustomerCard:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    CheckOutCard:{
        flex:3,
        padding:20,
        marginBottom:40
    }

})
