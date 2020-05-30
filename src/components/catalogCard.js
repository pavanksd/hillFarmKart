import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-community/picker';

export default class catalogCard extends Component {
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
                <View>
                    <Text style={styles.itemName} >{this.props.item.itemName}</Text>
                    <Text style={styles.itemName} >Rs 50/- per Kg</Text>
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
                <TouchableOpacity style={styles.addToCartTButton} activeOpacity={.7}>
						<Text style={styles.addToCartText}>Add</Text>
				</TouchableOpacity>
            </View>
        )
    }
}

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
        marginBottom:20
    }, 
    addToCartText: {
        alignItems: 'center',
        backgroundColor: '#23B24B',
        padding: 10,
        borderRadius:8,
    }
})
