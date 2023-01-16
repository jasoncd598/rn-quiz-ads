import React, { useState } from 'react'

import { StyleSheet, Text, TouchableOpacity, View, StatusBar, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const Main = ({ navigation }) => {
  const [visible, setVisible] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle='light' />
      <View style={styles.subContainer}>

        <View style={{ flex:1, justifyContent:'center', alignItems:'center', marginRight:25, marginLeft:25 }}>
          <Image style={{ height:150, width:150 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3227/3227053.png'}}/>
          <View style={{ marginTop:25, justifyContent:'center', alignItems:'center'}}>
            <Text style={{ fontSize:40, fontWeight:'800', marginBottom:5, color:'#FFF' }}>Twist Quiz</Text>
            <Text style={{ fontSize:16, color:'#FFFF', textAlign:'center' }}>Let's start the game!</Text>
          </View>
        </View>

        <View style={{ position:'absolute', bottom:25, left:25, right:25}}>
          <TouchableOpacity 
            onPress={() => navigation.push('CategoryScreen')}
            style={{ backgroundColor:'#FFA500', borderRadius:10, height:55, width:'100%', justifyContent:'center', alignItems:'center' }}>
            <Text style={{ color:'#fff', fontSize:16, fontWeight:'800' }}>START QUIZ</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.push('PrivacyPolicyScreen')}
            style={{ backgroundColor:'#FFF', borderRadius:10, height:55, width:'100%', justifyContent:'center', alignItems:'center', marginTop:25 }}>
            <Text style={{ color:'#363A66', fontSize:16, fontWeight:'800' }}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#363A66'
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
    backgroundColor:'#ECECEC',
    borderRadius:10
  }
});