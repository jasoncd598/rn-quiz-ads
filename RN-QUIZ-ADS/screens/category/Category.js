import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Appbar } from 'react-native-paper';
import { firebase } from '../../config'

const Category = ({ navigation }) => {

    const [categories, setCategories] = useState([])
    const category = firebase.firestore().collection('categories')

    useEffect(() => {
        async function init(){
            category.onSnapshot(res => {
                const categories = []
                res.forEach((data) => {

                    const { description, title } = data.data()

                    categories.push({
                        id: data.id,
                        description,
                        title,
                    })
                })  
                setCategories(categories)
            })
        }
        init()
    }, [])

    return (
        <View style={styles.container}>
            <Appbar.Header mode='small' style={{ backgroundColor:'#fff' }}>
                <Appbar.BackAction onPress={() => { navigation.goBack() }} color="#D6B702" />
            </Appbar.Header>

            <View style={{ margin: 25, marginTop:0 }}>
                <Text style={{ color:'#2E2E2E', fontSize:35, fontWeight:'800', marginBottom:5 }} >Category</Text>
                <Text style={{ color:'#747474', fontSize:18 }} >Choose your favorite category and test your ability by solving</Text>
            </View>

            <FlatList
                data={categories}
                numColumns={1}
                renderItem={({ item }) => (
                <TouchableOpacity style={styles.categoryContainer}>
                    <Text style={styles.categoryTitle}>{ item.title }</Text>
                    <Text style={styles.categoryDescription}>{ item.description }</Text>
                </TouchableOpacity>
            )}/>

            {/* banner ad here */}
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#fff'
    },
    subContainer:{
      flex:1,
      justifyContent: 'center',
      alignItems:'center'
    },
    categoryContainer:{ 
        flex:1, 
        margin:25, 
        marginTop:0,
        height:110, 
        backgroundColor:'#D6B702', 
        borderRadius:10, 
        justifyContent:'center', 
        alignItems:'center'  
    },
    categoryTitle: {
        fontSize:25, 
        fontWeight:'800', 
        marginBottom:5,
        color:'#ffff'
    },
    categoryDescription: {
        color:'#ffff', 
        fontSize:15 
    }
})