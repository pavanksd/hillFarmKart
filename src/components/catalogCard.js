import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-community/picker';
import {connect} from 'react-redux'
import { addToCart } from '../redux/actionindex';

export class catalogCard extends Component {
    state = {
        qty: 1,
        value:["1","2","3","4","5"]
      };
    render() {
        let pickerItem = this.state.value.map( (s, i) => {
            return <Picker.Item key={i} value={s} label={s} />
        });
        return (
            <View style={styles.catalogCard}>
                <Image source={require('../../assets/images/catalogDefault.jpg')} style={styles.catalogImage} />
                <View style={{flex:2}}>
                    <Text style={styles.itemName} >{this.props.item.item_name}</Text>
                    <Text style={styles.itemName} >Rs {parseInt(this.props.item.price)}/- per Kg</Text>
                    <Text>Add to Kart:</Text>
                    <View style={{flexDirection:"row",backgroundColor:'#EEEEEE',width: 92}}>
                        <Text style={{marginLeft:5,marginTop:10,color:'#23B24B'}}>Qty: </Text>
                        <Picker
                            selectedValue={this.state.qty}
                            style={{ height: 35, width: 70,color:'#23B24B'}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({qty: itemValue}) }>
                            {pickerItem}
                        </Picker>
                    </View>
                </View>
                <View style={{flex:1}}>
                <TouchableOpacity style={styles.addToCartTButton} activeOpacity={.7} onPress={()=>this.addItemToCart()} >
						<Text style={styles.addToCartText}>+</Text>
				</TouchableOpacity>
                </View>
            </View>
        )
    }

    addItemToCart(){
        itemDetails = this.props.item;
        this.props.addToCart(itemDetails);
    }
}

const mapStateToProps = (state)=>{
    return{
        cartItems:state.cart.cartData,
    }
}
const mapDispatchToProps  = (dispatch) =>{
    return{
        addToCart:(data) =>{ dispatch(addToCart(data)) },
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
        height: 90,
        width: 100,
        resizeMode: 'stretch',
        borderRadius: 8,
        marginRight: 10
    },
    itemName:{
        fontSize:20
    },
    addToCartTButton:{
        justifyContent:"flex-end",
        alignItems:"flex-end",
        flex: 1,
        marginRight:20,
        marginBottom:20,
    }, 
    addToCartText: {
        alignItems: 'center',
        backgroundColor: '#23B24B',
        paddingHorizontal: 12,
        fontSize:30,
        borderRadius:25,
    }
})
