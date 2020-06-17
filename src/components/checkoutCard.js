import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity,Button,ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { addToCart,subFromCart } from '../redux/actionindex';
import {connect} from 'react-redux'

export class checkoutCard extends Component {
    render() {
        let {cartItems} = this.props;
        let proceedCheckout =  null;
        if(Object.keys(cartItems).length){
            proceedCheckout =  <ProceedCheckout /> ;
        }
        let addedItems = Object.keys(cartItems).length ?
        Object.keys(cartItems).map(item=>{
            return(
                <View style={{flexDirection:"row",marginVertical:10}}>
                    <View style={{flexDirection:"row"}}>
                        <View style={{alignContent:"flex-end",justifyContent:"flex-end", flexGrow: 1,width:100}}>
                                <Text style={[styles.cartItems]} >{cartItems[item].item_name} </Text>
                        </View>
                        <View style={{flexDirection:"row",marginLeft:60,alignItems:"center",justifyContent:"flex-start"}}>
                            <Button style={[styles.cartButton]} title="+"  color="#388E3C" onPress={()=>this.addQty(cartItems[item])} />
                            <Text style={[styles.cartItems]} > {cartItems[item].qty} </Text>
                            <Button style={[styles.cartButton]} title="-"  color="#F4511E" onPress={()=>this.subQty(cartItems[item])} />
                            <Text style={{fontSize:20}}> {cartItems[item].price}</Text>
                        </View>
                    </View>
                </View>                
            )
        })
        :
        (
            <View style={{justifyContent:"space-around",alignItems:"center"}} >
                <Text style={{marginVertical:40,fontSize:28}} >Empty Cart</Text>
            </View>
        )
        return (
            <View>
                <View style={{flexDirection:"row-reverse",marginLeft:10}}>
                    <View style={styles.cartTotal}>
                        <Text style={styles.totalText} >Total: ₹ {this.props.totalPrice}</Text>
                    </View>
                </View>
                <View style={styles.checkoutCard}>
                    <View>
                        <Text style={{color:'#23B24B',fontSize:25}}>Items In Your Cart</Text>
                        <ScrollView>
                            {addedItems}
                        </ScrollView>
                        {proceedCheckout}
                    </View>
                </View>
            </View>
        )
    }

    addQty(item){
        this.props.addToCart(item);
    }
    
    subQty(item){
        this.props.subFromCart(item);
    }
}

const ProceedCheckout = ()=> {
    const navigation = useNavigation();
    return(
    <TouchableOpacity activeOpacity={.7}  style={styles.checkoutBtn} onPress={() => navigation.replace('UserDetails')}>
        <Text style={styles.checkoutBtnTxt}> Checkout </Text>
    </TouchableOpacity>  )
}

const mapStateToProps = (state)=>{    
    return{
        cartItems:state.cart.cartData,
        totalQty:state.cart.totalQty,
        totalPrice:state.cart.totalPrice,
    }
}
const mapDispatchToProps  = (dispatch) =>{
    return{
        addToCart:(data) =>{ dispatch(addToCart(data)) },
        subFromCart:(data) =>{ dispatch(subFromCart(data)) },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps) 
(checkoutCard);

const styles = StyleSheet.create({
    checkoutCard:{
        padding:18,
        backgroundColor:"#FFFFFF",
        borderRadius:8,
        alignItems:"center",
    },
    checkoutBtn: {
        alignItems: 'center',
        backgroundColor: '#23B24B',
        padding: 10,
        borderRadius:8,
    },
    checkoutBtnTxt:{
        color:'#FFFFFF',
        fontSize:20
    },
    cartItems:{
        fontSize:22
    },
    cartButton:{
        padding:9,
    },
    cartTotal:{
        paddingHorizontal:10,
        backgroundColor:'#FFFFFF',
        borderTopStartRadius:8,
        borderTopEndRadius:8
    },
    totalText:{
        color: '#23B24B',
        fontSize:24
    }
})
