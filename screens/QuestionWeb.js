import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview'

export default function QuestionWeb({ route }) {
    const url = route.params.url
    return (
        <View style={styles.screen}>
            <StatusBar backgroundColor="black" />
            <View style={{ width: '100%', height: '100%' }}>
                <WebView
                    source={{ uri: url }}
                    onLoad={() => {
                        console.log("web load")
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
