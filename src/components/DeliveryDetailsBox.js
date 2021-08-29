import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput,TouchableOpacity, Alert,ScrollView } from 'react-native'
import {connect} from 'react-redux'
import { confirmOrder } from '../redux/actionindex'
import AsyncStorage from '@react-native-community/async-storage'

import Loader from '../components/loader'

import { globalStyles } from "../styles/styles";

export class DeliveryDetailsBox extends Component {
    state = {
        userId:'',
        userAddress:'',
        userContact:'',
        userName:''
    }
    componentDidUpdate(prevProps){
        let {isPlacingOrder} = this.props;
        let {placeOrderData} = this.props;
        if(prevProps.isPlacingOrder!=isPlacingOrder){
            if(placeOrderData.status===true){
                this.props.navigation.replace('OrderSuccess');
            }
        }
    }

    render() {
        let {isPlacingOrder} = this.props;
        let loader=null;
        if(isPlacingOrder){
            loader=<Loader />
        }
        let placeOrder =    <TouchableOpacity activeOpacity={.7}  style={styles.placeOrderBtn} onPress={()=>this.confirmCheckout()} >
                                <Text style={styles.buttonText}>Place Order</Text>
                            </TouchableOpacity>
        return (
            <ScrollView ref="myScrollView" keyboardDismissMode='interactive' >
                <View style={{paddingTop:40}}>
                    <View style={styles.deliveryDetailCard} >
                        <Text style={globalStyles.textMainHeading}>Delivery Details</Text>
                        <View style={{padding:35}}>
                            <Text style={[globalStyles.textColor,styles.textInputHeading]} >
                                Contact Number
                            </Text>
                            <TextInput style={styles.textInput} keyboardType="number-pad"   maxLength={10} onChangeText={(text) => this.setState({userContact:text})} ></TextInput>
                            <Text style={[globalStyles.textColor,styles.textInputHeading]}>
                                User Name
                            </Text>
                            <TextInput style={styles.textInput} onChangeText={(text) => this.setState({userName:text})} ></TextInput>
                            <Text style={[globalStyles.textColor,styles.textInputHeading]}>
                                Address
                            </Text>
                            <TextInput multiline numberOfLines={5} style={styles.textInput} onChangeText={(text) => this.setState({userAddress:text})} ></TextInput>
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
                            {placeOrder}
                        </View>
                    </View>
                    {loader}
                </View>
            </ScrollView>
        )
    }

    confirmCheckout = async () => {
        if(this.state.userAddress=='' || this.state.userContact=='' || this.state.userName=='' ){
            Alert.alert('','Please fill all the details to place order');
            return;
        }

        if(this.state.userContact.length<10){
            Alert.alert('Error','Please Enter a valid contact number');
            return;
        }

        try {
            const value = await AsyncStorage.getItem('userDetails')
            if(value !== null) {
              if(!value){
                  this.props.navigation.dispatch(StackActions.replace('Login'));
              }else{
                  let userValue = JSON.parse(value);
                  let userId = userValue.id
                  let userDetails = {
                      userId:userId,
                      userAddress:this.state.userAddress,
                      userContact:this.state.userContact,
                      userName:this.state.userName
                  }
                this.props.confirmOrder(this.props.cartItems,userDetails);
              }
            }
        }
        catch(e) {
            this.props.navigation.dispatch(StackActions.replace('Login'));
          }
    }
}


const mapStateToProps = (state)=>{    
    return{
        cartItems:state.cart.cartData,
        placeOrderData:state.cart.placeOrderData,
        isPlacingOrder:state.cart.isPlacingOrder
    }
}
const mapDispatchToProps  = (dispatch) =>{
    return{
        confirmOrder:(cartItems,userDetails) =>{ dispatch(confirmOrder(cartItems,userDetails)) },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps) 
(DeliveryDetailsBox);

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
