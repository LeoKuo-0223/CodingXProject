import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';
 export default function Header(){
    return(
<View style={styles.head}>
    <Text style={styles.title}>Hello</Text>
</View>
    )

 }
 const styles =  StyleSheet.create({
     head: {
         height: 20,
        justifyContent: 'flex-end',
        backgroundColor: 'coral',
     },
     title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
     }
 })