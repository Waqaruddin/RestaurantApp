import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function Welcome({navigation}){
    return(

        <View style = {styles.container}>

            <Text style ={styles.heading}> Welcome </Text>
            <Text style ={styles.description}> To My Restaurant App </Text>
            <TouchableOpacity style ={styles.button} onPress ={() => navigation.navigate('Restaurants')}>
                <Text style ={styles.buttonTextStyle}> Enter here</Text>
            </TouchableOpacity>
        </View>

        
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DC143C',
      alignItems: 'center',
      justifyContent: 'center'

    },
    heading:{
        fontSize: 35,
        color: "#1F1F1F",
        fontWeight: 'bold',
        marginBottom: 5,
        fontStyle:'italic'
    },
    description:{
        fontSize: 25,
        color: "#1F1F1F",
        marginBottom: 20,
        fontStyle:'italic'

    },
    button:{
        
        backgroundColor: "#FF7F50",
        padding: 10,
        width: 150,
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000",


    },

    buttonTextStyle:{
        fontWeight:'bold',
        fontSize:15

    }


});