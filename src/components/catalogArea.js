import React, { Component } from 'react'
import { StyleSheet, View,FlatList } from 'react-native'

import CatalogCard from "../components/catalogCard";

export default class catalogArea extends Component {
    state={
            itemList:[  {id:1,itemName:'item 1'},
                        {id:2,itemName:'item 2'},
                        {id:3,itemName:'item 3'},
                        {id:4,itemName:'item 4'},
                        {id:5,itemName:'item 5'},
                        {id:6,itemName:'item 6'},
                    ],
    };
    
    render() {
        return (
            <View style={{flex:8,backgroundColor:'#90A4AE'}}>
                <View style={{paddingVertical:15,paddingLeft:10}}>
                    <FlatList 
                     data={this.state.itemList}
                     renderItem={({item}) =>(<CatalogCard item={item} /> )}
                     keyExtractor={item => item.id.toString()}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
