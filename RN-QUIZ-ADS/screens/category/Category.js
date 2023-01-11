import { View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Appbar } from 'react-native-paper';
import { firebase } from '../../config'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
];
  

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

            <FlatList
                data={categories}
                numColumns={1}
                renderItem={({ item }) => (
                <TouchableOpacity style={{ flex:1, margin:25 }}>
                    <View style={{ backgroundColor:'red'}}>
                        <Text>{ item.title }</Text>
                        <Text>{ item.description }</Text>
                    </View>
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
    }
})