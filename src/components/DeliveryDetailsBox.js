import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { globalStyles } from "../styles/styles";

const PlaceOrder = ()=> {
    const navigation = useNavigation();
    return (
        <TouchableOpacity activeOpacity={.7}  style={styles.placeOrderBtn} onPress={()=>navigation.navigate('OrderSucess')} >
        <Text style={styles.buttonText}>Place Order</Text>
    </TouchableOpacity>
    );
}
export default class DeliveryDetailsBox extends Component {
    render() {
        return (
            <View style={{paddingTop:40}}>
                <View style={styles.deliveryDetailCard} >
                    <Text style={globalStyles.textMainHeading}>Delivery Details</Text>
                    <View style={{padding:35}}>
                    <Text style={[globalStyles.textColor,styles.textInputHeading]} >
                            Contact Number
                        </Text>
                        <TextInput style={styles.textInput} keyboardType="number-pad"   maxLength={10} onChangeText={(text) => this.setState({contactNumber:text})} ></TextInput>
                        <Text style={[globalStyles.textColor,styles.textInputHeading]}>
                            User Name
                        </Text>
                        <TextInput style={styles.textInput}></TextInput>
                        <Text style={[globalStyles.textColor,styles.textInputHeading]}>
                            Address
                        </Text>
                        <TextInput multiline numberOfLines={5} style={styles.textInput}></TextInput>
                        <View style={{alignItems:"center",paddingHorizontal:30,alignContent:"center"}}>
                            <Text style={{color:'#23B24B',fontSize:16,marginTop:10,fontStyle:"italic"}}>
                                *Delivery Available from Lebong till Jorebunglow
                            </Text>
                            <Text style={{fontStyle:"italic",color:'#23B24B',marginTop:15}}>
                                if your location is not included in the place our customer representative will reach back to you
                            </Text>
                        </View>
                    </View>
                    <View style={{padding:20}}>
                        <PlaceOrder />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deliveryDetailCard:{
        backgroundColor:'#FFFFFF',
        marginHorizontal:20,
        marginVertical:10,
        padding:10,
        borderRadius:8,
    },
    textInput:{
        borderColor:'#23B24B',
        borderWidth:1,
        borderRadius:8
    },
    textInputHeading:{
        fontWeight:"bold",
        marginBottom:4,
        marginTop:10
    },
    placeOrderBtn:{
        alignItems: 'center',
        backgroundColor: '#23B24B',
        padding: 10,
        borderRadius:8,
        marginHorizontal:25
    },
    buttonText:{
        color:'#FFFFFF',
        fontSize:20
    }
})
