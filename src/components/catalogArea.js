import React, { Component } from 'react'
import { StyleSheet, View, FlatList, Alert} from 'react-native'
import {getItemsList} from '../redux/actionindex'
import {connect} from 'react-redux'

import CatalogCard from "../components/catalogCard";

import Loader from '../components/loader'

export class catalogArea extends Component {
    state={
            itemList:[],
    };
    
    componentDidMount(){
        this.props.loadCatalog();
    }


    componentDidUpdate(prevProps){
        let {LoadingItem} = this.props;
        let {catalogItems} = this.props;
        let {requestError} = this.props;
        if(LoadingItem!=prevProps.LoadingItem && catalogItems!=prevProps.catalogItems ){
            if(catalogItems.code==200){
                this.setState({itemList:catalogItems.items});
            } else if(requestError===true){
                Alert.alert('Alert','Service currently unavailable');
                this.props.navigation.replace('Home')
            }
        }
    }

    render() {
        let {LoadingItem} = this.props;  
        let loader=null;
        if(LoadingItem){
            loader=<Loader />
        }
        return (
            <View style={{flex:8,backgroundColor:'#90A4AE'}}>
                <View style={{paddingVertical:15,paddingLeft:10}}>
                    <FlatList 
                     data={this.state.itemList}
                     renderItem={({item}) =>(<CatalogCard item={item} /> )}
                     keyExtractor={item => item.id.toString()}
                    />
                </View>
                {loader}
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        LoadingItem:state.catalog.isLoading ,
        catalogItems:state.catalog.catalogItems,
        requestError:state.catalog.requestError
    }
}
const mapDispatchToProps  = (dispatch) =>{
    return{
        loadCatalog:() =>{ dispatch(getItemsList()) },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps) 
(catalogArea);

const styles = StyleSheet.create({})