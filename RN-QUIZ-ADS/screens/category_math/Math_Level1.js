import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import React from 'react'
import { Appbar } from 'react-native-paper';

const Math_Level1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Appbar.Header style={{ backgroundColor:'#FF8B13'}}>
            <Appbar.BackAction onPress={() => { navigation.goBack() }} color='#fff'/>
        </Appbar.Header>

        <View style={styles.subContainer}>

        </View>
    </View>
  )
}

export default Math_Level1

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    subContainer:{
        flex:1,
    },
    buttonParentContainer: {
        position:'absolute',
        bottom:25,
        left:25,
        right:25
    },
    iConParentContainer: {
        position:'absolute',
        top:0,
        left:25,
        right:0
    },
    innerButtonContainer: {
        width:'100%', 
        height:'100%', 
        justifyContent:'center', 
        alignItems:'center' 
    },
    buttonContainerText: {
        color:'#fff'
    },
    categoryContainer: { 
        margin:25, 
        marginTop:0, 
        height:120, 
        backgroundColor:'#FFF',
        borderRadius:10
    }
});