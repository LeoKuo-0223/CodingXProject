import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

export default function MonthMode(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>YearMode Screen</Text>
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