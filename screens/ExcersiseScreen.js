import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ExcersiseScreen = () => {
    const message = "Hello World!";


    return(
        <View style={styles.container}>
            <Text style={styles.textStart}>{message}</Text>
            <Text style={styles.textstyle}>{"hello"}</Text>
        </View>
        

    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#5c9d5d',
        alignItems: 'left',
        justifyContent:'center'
     
    },
    textStart : {
        fontSize: 30,
        color: 'blue'
    },
    textstyle: {
        fontSize: 20,
        color: 'yellow'
    }
});

export default ExcersiseScreen;