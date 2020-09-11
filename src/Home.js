import React, {useState} from'react';
import {View, Image, StyleSheet, SafeAreaView, Text, FlatList} from 'react-native'
import * as DATA from './getRestaurantsAPI';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import SearchableDropDown from 'react-native-searchable-dropdown';




export default function RestaurantList({navigation}){

    var resData = []
    var [searchQuery, setSearchQuery] = React.useState("");
    var [searchData, setSearchData] = useState([])
    var onChangeSearch = query => {
        setSearchQuery (query)
        var temp = []
        for (var i in resData){
            var a = resData[i].name
            if (a.includes(query))
                temp.push(resData[i].detail)
        }
        setSearchData(temp)
    }

    const renderItem = ({ item }) => (                               ///// where data comes from
        <Item
          name={item.name}
          rating={item.rating}
          review={item.review}
          imageUrl={item.imageUrl}
        />
      );

    //   const [searchText, setSearchText] = useState('');

      const Item = ({ name, rating, review, imageUrl }) => {              /// for layout
          return(                    
        <TouchableOpacity style ={styles.item} onPress={() =>
        
        { navigation.navigate('Details', {name:name, rating, review, imageUrl}  ); 
        
        
        }}>

           <Text numberOfLines ={1} style ={styles.resName}> {name} </Text> 
           <Image style = {styles.image} 
           source ={{
               uri: imageUrl
           }}/>
           <Text style ={styles.ratingAndReview}> Rating: {rating} </Text> 
           <Text style = {styles.ratingAndReview}>  Reviews: {review} </Text> 


        </TouchableOpacity>
          );
       }   

   return(
        <SafeAreaView style = {{backgroundColor:'#E0FFFF'}}>

            {/* <Searchbar style ={styles.searchBar}
            placeholder ="Search"
            // onChangeText ={(text) => setSearchText(text)}
            // value ={searchText}
            /> */}
            
            
            <SearchableDropDown
            items = {searchData}
            onTextChange={onChangeSearch}
            placeholder ="Search"
            onItemSelect={item => {
                setSearchData([])
                navigation.navigate("Details", {item:item})}}
                
                itemStyle={{
                    padding: 10,
                    marginTop: 2,
                    borderColor: '#fff',
                    borderWidth: 1,
                    borderRadius: 5,
                }}
                itemTextStyle ={{color: "#A9A9A9", fontSize: 18}}
                resetValue = {true}
                textInputStyle={{
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                  }}/>

        
            <ScrollView>

            <Text style = {styles.categoryName}> {DATA.response[0].category} </Text>

            <FlatList
            horizontal
            data = {DATA.response[0].restaurantList}
            renderItem = {renderItem}
            key= {(item) => item.key}/>

            <Text style = {styles.categoryName}> {DATA.response[1].category} </Text>

            <FlatList
            horizontal
            data = {DATA.response[1].restaurantList}
            renderItem = {renderItem}
            key= {(item) => item.key}/>

            <Text style = {styles.categoryName}> {DATA.response[2].category} </Text>
            <FlatList
            horizontal
            data = {DATA.response[2].restaurantList}
            renderItem = {renderItem}
            key= {(item) => item.key}/>

</ScrollView>
</SafeAreaView>
    );
}


const styles = StyleSheet.create({

    image:{

        height:100,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        marginVertical:10
    },

    categoryName:{
        fontWeight:'bold',
        fontSize:20
    },

    ratingAndReview:{
        fontSize:12,
        color :'grey',

    },
    resName:{
        fontSize:20,
        fontWeight: 'bold'
    },
    
    item:{
        margin:10,
        width: 250,
    },
    searchBar:{
        marginHorizontal:20,
        marginVertical:15
    }





})