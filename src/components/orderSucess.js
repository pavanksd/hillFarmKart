import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { globalStyles } from "../styles/styles";

export default class orderSucess extends Component {
    render() {
        return (
            <View style={{flex:1,paddingTop:40}}>
                <View style={{paddingTop:40,flex:1}}>
                    <View style={styles.orderSucessCard} >
                        <View style={[styles.centerBox,{flex:2}]}>
                            <Text style={globalStyles.textMainHeading}>Horray!!!</Text>
                            <Text style={globalStyles.textMainHeading}>You Have Sucessfully Placed Your Order</Text>
                        </View>
                        <View style = {[styles.centerBox,{flex:1}]}>
                            <Text style={globalStyles.textMainHeading}>Delivery on</Text>
                            <Text style = {styles.mainTitleText} > 6th June </Text>
                        </View>
                        <View style = {[styles.centerBox,{flex:1}]}>
                            <Text style = {styles.mainTitleText}> Hill Fram <Text style = {{fontStyle: 'italic'}}>Kart </Text></Text>
                            <Text style = {styles.subTitleText}>Virtual Farmers' Market of Darjeeling</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    orderSucessCard:{
        backgroundColor:'#FFFFFF',
        marginHorizontal:40,
        marginVertical:20,
        marginBottom:60,
        padding:10,
        borderRadius:8,
        flex:1
    },
    mainTitleText:{
        backgroundColor:'#23B24B',
        color: '#FFFFFF',
        fontSize: 40,
    },
    subTitleText:{
        marginTop:8,
        fontSize: 16,
        color: '#23B24B',
    },
    centerBox:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:20
    }
})
