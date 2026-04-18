import React from 'react';
import { Text, View, StyleSheet, FlatList } from "react-native";


const name = "Liburn";
const surname = "Abazi";
const birthday = "11/07/2010";

const fullName = name + " " + surname;

const Hobbies = [
    {key: 1, name: "playing piano"},
    {key: 2, name: "playing games"},
    {key: 3, name: "walking"}
];

const ChallengeFive = () => {
    return (
        <View style={styles.container}>
            <View style={styles.InfoContainer}>
                <Text style={styles.InfoHeader}>PERSONAL INFORMATION</Text>
                <Text style={styles.InfoTxt}>{fullName}, {birthday}</Text>
            </View>
            <View style={styles.InfoList}>
                <Text style={styles.InfoHeader}>Hobbies</Text>
                <FlatList
                    data={Hobbies}
                    renderItem={({item}) => <Text style={styles.InfoTxt}>{item.name}</Text>}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        flex: 1,
        backgroundColor: '#ffffff',
        display: 'flex'
        
    },
    InfoContainer: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#ea92ec',
    },
    InfoHeader:{
         marginLeft: 20,
        margin: 10,
        fontFamily: 'sans-serif',
        fontSize: 30,
        color: 'white'
    },
    InfoTxt: {
         marginLeft: 20,
        fontSize: 16,
        color: 'white',
        fontFamily: 'Arial',
        marginBottom: 10
    },
    InfoList: {
       
        width: '100%',
        marginTop: 20,
        backgroundColor: '#8ecf84',
    }
});



export default ChallengeFive;