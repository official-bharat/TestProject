import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Login extends Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text> Hi This Is Your Main App login </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    }
})

export default Login
