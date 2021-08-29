import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput,TouchableOpacity,Linking,Alert } from 'react-native'
import {connect} from 'react-redux'
import {authUser,resetState} from '../redux/actionindex'
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from '@react-navigation/native';

import Loader from '../components/loader'

import { globalStyles } from "../styles/styles";

export class logincard extends Component {
    state = {
        userName:'',
        password:''
    }

    componentDidUpdate(prevProps){
        let {isAuthenticating} = this.props;  
        let {responseData} = this.props;
        let {requestError} = this.props;
        if(isAuthenticating !== prevProps.isAuthenticating && responseData !== prevProps.responseData ){
            if(responseData.authenticate===true && responseData.code===200){
                this.Useruthenticated();
                this.props.navigation.dispatch(StackActions.replace('Catalog'));
             } else if(responseData.authenticate===false && responseData.code===200){
                Alert.alert('','Invalid credentials/ Account does not exist');
             }else if(requestError && responseData.code===503){
                Alert.alert('Alert','Service currently unavailable');
            }
        }
    }
    render() {
       let {isAuthenticating} = this.props;  
        let loader=null;
        if(isAuthenticating){
            loader=<Loader />
        }
        return (
            <View>
                 <View style={styles.login}>
                    <Text style={globalStyles.textMainHeading}>
                        Login
                    </Text>
                    <View style={{padding:20}}>
                        <Text style={[globalStyles.textColor,styles.textInputHeading]}>
                            Email
                        </Text>
                        <TextInput style={styles.textInput} autoCapitalize={"none"} keyboardType={"email-address"} onChangeText={(text) => this.setState({userName:text})}></TextInput>
                        <Text style={[globalStyles.textColor,styles.textInputHeading]} >
                            Password
                        </Text>
                        <TextInput style={styles.textInput}  autoCapitalize={"none"} onChangeText={(text) => this.setState({password:text})} secureTextEntry={true} ></TextInput>
                    </View>
                    <View style={{padding:20}}>
                        <TouchableOpacity activeOpacity={.7}  style={styles.buttonLogin} onPress={()=>this.validateLoginCreds()} >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <View style={{alignItems:"center",marginVertical:40,flexDirection:'row',justifyContent:"center"}}>
                            <Text style={styles.newUser}>if you are a new user| 
                            </Text>
                            <TouchableOpacity onPress={()=>this.props.navigation.dispatch(StackActions.replace('SignUp'))  } >
                            <Text style={{color:'orange'}}> Sign Up</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {loader}
            </View>
        )
    }

    validateLoginCreds=()=> {
        if(this.state.userName=='' || this.state.password==''){
            Alert.alert('Alert','Enter Username and Password to continue');
            return;
        }else{
            this.props.Login(this.state.userName,this.state.password);
        }
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
        isAuthenticating:state.login.isAuthenticating,
        responseData:state.login.responseData,
        requestError:state.login.requestError
    }
}
const mapDispatchToProps  = (dispatch) =>{
    return{
        Login:(email,password) =>{ dispatch(authUser(email,password)) },
        ResetState:() =>{dispatch(resetState())},
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps) 
(logincard);

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
