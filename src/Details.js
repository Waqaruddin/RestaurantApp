import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import * as DATA from './getRestaurantsAPI';

import {useNavigation} from '@react-navigation/native';




export default function Details({route}){
    const{name} = route.params;
    const{rating} = route.params;
    const{review} = route.params;
    const{imageUrl} = route.params;


    return(
        <View style ={styles.container}>
            
            <Text style ={styles.title}>{route.params.name}</Text>
                   <Image style ={styles.image}
                   source ={{uri:imageUrl,}}/>

       <Text style ={styles.description}>Rating: {route.params.rating}</Text>
       <Text style ={styles.description} >Reviews:{route.params.review}</Text>
       </View>
    );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#ffe5e5',
   

  },

    image: {
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginVertical: 10,
      },

      title:{
          fontWeight:'bold',
          fontSize: 32,
          textAlign:'center',
          marginVertical: 30,
          fontStyle:'italic'
        },

      description:{
          fontSize: 25,
          padding: 10,
          justifyContent:'center',
          alignItems:'center',
          alignContent:'center'
      }
})
