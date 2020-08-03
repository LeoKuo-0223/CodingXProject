import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native'

export default function Home({navigation}){
   

    const pressHandler = () =>{
        navigation.navigate('月曆模式')
    }


    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <View style={styles.button}>
            <Button title = '月曆模式' onPress={pressHandler }
            ></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 32,
        padding: 16,
    },
    text: {
        textAlign: 'center'
    },
    button: {
        padding: 32,
    }
})