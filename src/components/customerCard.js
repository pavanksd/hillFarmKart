import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default class customerCard extends Component {

    state={
        userName:''
    }

    componentDidMount(){
        this.getUserName();
    }

    render() {
        return (
            <View style={{alignItems:"center"}}>
                <Image source={require('../../assets/images/user.png')} />
                <Text style={styles.userName} >{this.state.userName}</Text>
            </View>
        )
    }

    getUserName = async () => {
        try {
            const value = await AsyncStorage.getItem('userDetails')
            if(value !== null) {
                let userValue = JSON.parse(value);
                this.setState({userName:userValue.name});
            }
        } catch (e) {  
            this.setState({userName:'User'});
      }
    }
}

const styles = StyleSheet.create({
    userName:{
        fontSize:28,
        color:"#FFFFFF"
    }
})
