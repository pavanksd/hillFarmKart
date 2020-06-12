import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { globalStyles } from "../styles/styles";

import DeliveryDetailsBox from "../components/DeliveryDetailsBox"


export default function userDetails (props) {
    const navigation = useNavigation();
    return (
        <View style = { globalStyles.container }>
                <DeliveryDetailsBox {...props} navigation={navigation}  />
        </View>
    )
  }

const styles = StyleSheet.create({})
