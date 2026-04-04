import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const MainScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.textStart}>this is the main screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#b93737',
        alignItems: 'center',
        justifyContent:'center'
    },
    textStyle : {
        fontSize: 30
    }
}) 

export default MainScreen;