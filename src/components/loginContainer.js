import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput,TouchableOpacity,Linking,Alert } from 'react-native'

import { globalStyles } from "../styles/styles";

export default class loginContainer extends Component {
    state = {
        userName:'',
        contactNumber:''
    }

    validateLoginCreds=()=> {
        console.log(this.state)
    }
    render() {
        return (
            <View style={globalStyles.container} >
                <View style={styles.login}>
                    <Text style={{fontSize:30,color:'#23B24B'}}>
                        Login
                    </Text>
                    <View style={{padding:20}}>
                        <Text style={[globalStyles.textColor,styles.textInputHeading]}>
                            User Name
                        </Text>
                        <TextInput style={styles.textInput} onChangeText={(text) => this.setState({userName:text})}></TextInput>
                        <Text style={[globalStyles.textColor,styles.textInputHeading]} >
                            Contact Number
                        </Text>
                        <TextInput style={styles.textInput} keyboardType="number-pad"   maxLength={10} onChangeText={(text) => this.setState({contactNumber:text})} ></TextInput>
                    </View>
                    <View style={{padding:20}}>
                        <TouchableOpacity activeOpacity={.7}  style={styles.buttonLogin} onPress={()=>this.validateLoginCreds()} >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <View style={{alignItems:"center",marginVertical:40,flexDirection:'row',justifyContent:"center"}}>
                            <Text style={styles.newUser}>if you are a new user| 
                            </Text>
                            <TouchableOpacity onPress={()=> Linking.openURL("http://google.com")} >
                            <Text style={{color:'orange'}}> Sign Up</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    login:{
        backgroundColor:'#FFFFFF',
        marginHorizontal:20,
        marginVertical:70,
        padding:10,
        borderRadius:8,
    },
    textInputHeading:{
        fontWeight:"bold",
        marginBottom:4,
        marginTop:15
    },
    textInput:{
        borderColor:'#23B24B',
        borderWidth:1,
        borderRadius:8
    },
    buttonLogin:{
        alignItems: 'center',
        backgroundColor: '#23B24B',
        padding: 10,
        borderRadius:8,
        marginHorizontal:25
    },
    buttonText:{
        color:'#FFFFFF',
        fontSize:20
    },
    newUser:{
        alignItems:"center",
        fontSize:15,
        color:'#23B24B'
    }
})
