import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

export default function DateMode(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>DateMode Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 32,
    },
    text: {
        textAlign: 'center'
    },
})