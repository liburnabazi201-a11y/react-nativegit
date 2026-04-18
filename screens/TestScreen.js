import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const TestScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.textStart}>this is the test screen</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#dd3838',
        alignItems: 'center',
        justifyContent:'center'
    },
    textStart : {
        fontSize: 30,
        color: 'white'
    }
});

export default TestScreen;