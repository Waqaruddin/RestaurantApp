import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function Welcome({navigation}){
    return(

        <View style = {styles.container}>

            <Text style ={styles.heading}> Welcome </Text>
            <Text style ={styles.description}> To My Restaurant App </Text>
            <Button onPress ={() => navigation.navigate('Restaurants')} title = 'Enter Here'/>

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
        borderRadius: 20,
        fontWeight:'bold'


    }


});