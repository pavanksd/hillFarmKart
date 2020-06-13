import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import {signUpUser} from '../redux/actionindex'

import Loader from '../components/loader'

import { globalStyles } from "../styles/styles"

export class signUpCard extends Component {

    state={
        userName:"",
        email:"",
        password:"",
        confirmPassword:""
    }

    componentDidUpdate(prevProps){
        let {isRegistering} = this.props;  
        let {responseData} = this.props;
        let {requestError} = this.props;
        if(isRegistering !== prevProps.isRegistering && responseData !== prevProps.responseData ){
            if(responseData.status===true && responseData.code===201){
                this.Useruthenticated();
                this.props.navigation.replace('Catalog');
             } else if(responseData.status===false && responseData.code===200){
                Alert.alert('Alert','The email has already been taken.');
             }else if(requestError && responseData.code===503){
                Alert.alert('Alert','Service currently unavailable');
            }
        }
    }

    render() {
        let {isRegistering} = this.props;  
        let loader=null;
        if(isRegistering){
            loader=<Loader />
        }
        return (
            <View  style={styles.mainBox}>
                <View>
                    <Text style={globalStyles.textMainHeading}>
                        Sign Up
                    </Text>
                    <ScrollView ref="myScrollView" keyboardDismissMode='interactive' >
                    <View style={{padding:20}}>
                        <Text style={[globalStyles.textColor,styles.textInputHeading]}>
                            User Name
                        </Text>
                        <TextInput style={styles.textInput}  onChangeText={(text) => this.setState({userName:text})}></TextInput>

                        <Text style={[globalStyles.textColor,styles.textInputHeading]} >
                            Email
                        </Text>
                        <TextInput style={styles.textInput} autoCapitalize={"none"} keyboardType={"email-address"} onChangeText={(text) => this.setState({email:text})} ></TextInput>

                        <Text style={[globalStyles.textColor,styles.textInputHeading]} >
                            Password
                        </Text>
                        <TextInput style={styles.textInput}  placeholder="Min 8 character" onChangeText={(text) => this.setState({password:text})}  secureTextEntry={true} ></TextInput>

                        <Text style={[globalStyles.textColor,styles.textInputHeading]} >
                            Confirm Password
                        </Text>
                        <TextInput style={styles.textInput}  placeholder="Min 8 character" onChangeText={(text) => this.setState({confirmPassword:text})} ></TextInput>
                        
                        <View style={{padding:20}}>
                        <TouchableOpacity activeOpacity={.7}  style={styles.buttonSignUp} onPress={()=>this.validateSignupCreds()} >
                            <Text style={styles.buttonText}>signUp</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    </ScrollView>
                </View>
                {loader}
            </View>
        )
    }
    
    validateSignupCreds = () =>{
        let {userName}          = this.state;
        let {password}          = this.state;
        let {confirmPassword}   = this.state;
        let {email}             = this.state;

        
        if(userName=='' || password=='' || confirmPassword=='' || email=='' ){
            Alert.alert('Alert','Enter all the fields to continue');
            return;
        }

        const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!reg.test(email)){
            Alert.alert('Error','Please Enter a valid email')
            return;
        }
        
        if(password.length<8){
            Alert.alert('Error','Password must contain minimum 8 character')
            return;
        }

        if(password!==confirmPassword){
            Alert.alert('Error','Password do not match')
            return;
        }
        
        this.props.signUp(this.state)
    }

    Useruthenticated = async () => {
        try {
          await AsyncStorage.setItem('isUseruthenticated', '1');
          await AsyncStorage.setItem('userDetails', JSON.stringify(this.props.responseData.userData));
        } catch (e) {
          Alert.alert('','Something happend!!! Please try logging in again')
        }
      }
}   



const mapStateToProps = (state)=>{
    return{
        isRegistering:state.signUp.isRegistering,
        responseData:state.signUp.responseData,
        requestError:state.signUp.requestError
    }
}
const mapDispatchToProps  = (dispatch) =>{
    return{
        signUp:(userData) =>{ dispatch(signUpUser(userData)) },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps) 
(signUpCard);

const styles = StyleSheet.create({
    mainBox:{
        flex:1,
        backgroundColor:'#FFFFFF',
        marginHorizontal:20,
        marginVertical:70,
        padding:20,
        borderRadius:8
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
    buttonSignUp:{
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
