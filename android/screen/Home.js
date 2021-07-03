// import React from 'react';
// import { StyleSheet, View, Text, Button } from 'react-native'

// export default function Home({ navigation }) {


//     const pressHandler1 = () => {
//         navigation.navigate('月曆模式')
//     }

//     const pressHandler3 = () => {
//         navigation.navigate('日曆模式')
//     }


//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>Home Screen</Text>
//             <View style={styles.button}>
//                 <Button title='月曆模式' onPress={pressHandler1}
//                 ></Button>
//             </View>
//             <View style={styles.button}>
//                 <Button title='日曆模式' onPress={pressHandler3}
//                 ></Button>
//             </View>
//         </View>

//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'pink',
//         paddingVertical: 32,
//         padding: 16,
//     },
//     text: {
//         textAlign: 'center'
//     },
//     button: {
//         padding: 32,
//     }
// })




import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'
import { withNavigation } from 'react-navigation';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Home extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Home Screen</Text>
                <View style={styles.button}>
                    <Button title='月曆模式' 
                    onPress={()=>this.props.navigation.navigate('月曆模式')}
                    ></Button>
                </View>
                <View style={styles.button}>
                    <Button title='日曆模式' 
                    onPress={()=>this.props.navigation.navigate('日曆模式')}
                    />
                </View>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
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