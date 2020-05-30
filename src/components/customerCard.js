import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class customerCard extends Component {
    render() {
        return (
            <View style={{alignItems:"center"}}>
                <Image source={require('../../assets/images/user.png')} />
                <Text style={styles.userName} >User Name</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    userName:{
        fontSize:28,
        color:"#FFFFFF"
    }
})
