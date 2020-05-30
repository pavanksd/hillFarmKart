import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ProceedCheckout = ()=> {
    const navigation = useNavigation();
    return (
        <TouchableOpacity activeOpacity={.7}  style={styles.checkoutBtn} onPress={() => navigation.navigate('UserDetails')}>
            <Text style={styles.checkoutBtnTxt}> Checkout </Text>
        </TouchableOpacity>
    );
}
export default class checkoutCard extends Component {
    render() {
        console.log(this.props);
        return (
            <View style={styles.checkoutCard}>
                <View>
                    <Text style={{color:'#23B24B',fontSize:25}}>Items In Your Cart</Text>
                </View>
                <View>
                    <ProceedCheckout />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    checkoutCard:{
        padding:20,
        backgroundColor:"#FFFFFF",
        borderRadius:8,
        alignItems:"center",
    },
    checkoutBtn: {
        alignItems: 'center',
        backgroundColor: '#23B24B',
        padding: 10,
        borderRadius:8,
        marginTop:250
    },
    checkoutBtnTxt:{
        color:'#FFFFFF',
        fontSize:20
    }
})
