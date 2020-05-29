import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput } from 'react-native'

export default class searchCatalog extends Component {
    render() {
        return (
            <View style={{padding:10,flex:1,marginBottom:15,justifyContent:"flex-end"}}>
                <TextInput style={styles.textSearchitem}  
                    placeholderTextColor="#FFFFFF" 
                    placeholder="Search for items"
                    onChangeText={text => this.searchFilterFunction(text)}
                >
                </TextInput>
            </View>
        )
    }
    searchFilterFunction= (text)=>{
        console.log(text);
    }
}

const styles = StyleSheet.create({
    textSearchitem:{
        marginHorizontal: 10,
        borderColor: '#FFFFFF',
        borderWidth:1,
        paddingHorizontal:20,
        borderRadius:8,
        color:'#FFFFFF'
    }
})
