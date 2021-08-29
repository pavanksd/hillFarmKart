import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import { addToCart,subFromCart } from '../redux/actionindex';

export class catalogCard extends Component {
    render() {
        let {cartItems} = this.props;
        let {id} = this.props.item;
        let itemQty = typeof cartItems[id] !== 'undefined' ? cartItems[id].qty:0;
        return (
            <View style={styles.catalogCard}>
                <Image source={require('../../assets/images/catalogDefault.jpg')} style={styles.catalogImage} />
                <View style={{flex:2}}>
                    <Text style={styles.itemName} >{this.props.item.item_name}</Text>
                    <Text style={styles.itemName} >Rs {parseInt(this.props.item.price)}/- per Kg</Text>
                    <Text>Add to Kart:</Text>
                    <View style={{flexDirection:"row",marginTop:10,marginLeft:20}}>
                        <TouchableOpacity style={styles.addToCartTButton} activeOpacity={.7} onPress={()=>this.subItemfromCart()} >
                            <Text style={styles.addToCartText}>-</Text>
                        </TouchableOpacity>
                            <Text style={[styles.addToCartText,{color:'#000000',backgroundColor:'#DCDCDC',fontSize:20,paddingTop:5,paddingHorizontal:10, }]} >{itemQty}</Text>
                        <TouchableOpacity style={styles.addToCartTButton} activeOpacity={.7} onPress={()=>this.addItemToCart()} >
                            <Text style={styles.addToCartText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1}}>
                </View>
            </View>
        )
    }

    addItemToCart(){
        itemDetails = this.props.item;
        this.props.addToCart(itemDetails);
    }

    subItemfromCart(){
        itemDetails = this.props.item;
        let {cartItems} = this.props;
        if( typeof cartItems[itemDetails.id] ==='undefined') return;
        this.props.subFromCart(itemDetails);
    }
}

const mapStateToProps = (state)=>{
    return{
        cartItems:state.cart.cartData,
        totalQty:state.cart.totalQty,
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
(catalogCard);

const styles = StyleSheet.create({
    catalogCard:{
        padding: 10,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        marginVertical:5
    },
    catalogImage:{
        height: 100,
        width: 100,
        resizeMode: 'stretch',
        borderRadius: 8,
        marginRight: 10
    },
    itemName:{
        fontSize:20
    },
    addToCartTButton:{
        alignItems:"center",
        marginHorizontal:10
    }, 
    addToCartText: {
        alignItems: 'center',
        fontSize:30,
        color: '#23B24B',
    }
})
