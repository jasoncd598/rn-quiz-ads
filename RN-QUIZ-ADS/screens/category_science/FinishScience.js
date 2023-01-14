import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const FinishScience = ({ navigation }) => {

  useEffect(() => {
    async function init(){
      try {
        await AsyncStorage.setItem('@userLevelScience', '1')
      } catch (e) {
        console.log(`Error ${e}`)
      }
    }
    init()
  },[])

  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <View style={{ justifyContent:'center', alignItems:'center'}}>
          <Image style={{ width:150, height:150 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5278/5278593.png' }}/>
          <Text style={{ fontSize:18, marginTop:25, textAlign:'center', color:'#2E2E2E'}}>Congratulations! You've Completed the Quiz Mania</Text>
        </View>
        <View style={{ marginTop:25 }}>
          <TouchableOpacity style={style.buttonStyle} onPress={() => { navigation.navigate('Science_Level1Screen')}}>
            <Text style={{ color:'#fff' }}>Reset Quiz</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop:10 }}>
          <TouchableOpacity style={style.buttonStyle} onPress={() => { navigation.navigate('CategoryScreen')}}>
            <Text style={{ color:'#fff' }}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default FinishScience

const style = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  innerContainer:{
    margin:25
  },
  buttonStyle: {
    height:45, 
    backgroundColor:'blue', 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:10
  }
})