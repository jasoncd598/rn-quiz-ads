import React, { useState, useEffect } from 'react'

import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, BackHandler } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Category = ({ navigation }) => {
    const [currentLevelMath, setCurrentLevelMath] = useState('')
    const [currentLevelScience, setCurrentLevelScience] = useState('')
    const [currentLevelTechnology, setCurrentLevelTechnology] = useState('')
    const [currentLevelHistory, setCurrentLevelHistory] = useState('')

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            const userLevelMath = await AsyncStorage.getItem('@userLevelMath')
            const userLevelScience = await AsyncStorage.getItem('@userLevelScience')
            const userLevelTechnology = await AsyncStorage.getItem('@userLevelTechnology')
            const userLevelHistory = await AsyncStorage.getItem('@userLevelHistory')

            if(userLevelMath !== null || userLevelScience !== null || userLevelTechnology !== null || userLevelHistory !== null) {
                setCurrentLevelMath(userLevelMath)
                setCurrentLevelScience(userLevelScience)
                setCurrentLevelTechnology()
                setCurrentLevelHistory()

            }else{
                setCurrentLevelMath('1')
                setCurrentLevelScience('1')
                setCurrentLevelTechnology('1')
                setCurrentLevelHistory('1')
            }
            
        });

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
                navigation.navigate('MainScreen')
                return true;
            },
        );

        return () => {
            unsubscribe
            backHandler.remove();
        }
    },[navigation])

  return (
    <View style={styles.container}>
        <Appbar.Header style={{ backgroundColor:'#FF8B13'}}>
            <Appbar.BackAction onPress={() => { navigation.goBack() }} color='#fff'/>
            <View style={{ alignItems:'center', justifyContent:'flex-end', flexDirection:'row', width:'80%' }}>
                <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Image style={{ width:30, height:30 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3989/3989686.png'}}/>
                    <Text style={{ color:'#fff', marginLeft:8, fontSize:20, fontWeight:'800'}}>100</Text>
                </View>
            </View>
        </Appbar.Header>

        <View style={styles.subContainer}>
            <View style={{ margin:25, marginTop:0 }}>
                <Text style={{ color:'#fff', fontSize:35, fontWeight:'800', marginBottom:5 }}>Category</Text>
                <Text style={{ color:'#fff', fontSize:18 }} >Have a try with your favorite category and answer all the questions. Let's start learning!</Text>
            </View>

            <ScrollView 
                showsHorizontalScrollIndicator={false} 
                showsVerticalScrollIndicator={false}>
                <View style={styles.categoryContainer}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <View>
                            <TouchableOpacity 
                                onPress={() => navigation.push(`Math_Level${currentLevelMath}Screen`)}
                                style={{ margin:15, width:24 }}>
                                <Ionicons name="md-play" size={24} color="#F273E6"/>
                            </TouchableOpacity>
                            <View  style={{ margin:15, marginTop:0 }}>
                                <Text style={{ color:'#747474', fontSize:12 }}>Level {currentLevelMath}</Text>
                                <Text style={{ color:'#FF8B13', fontSize:25 }}>Mathematics</Text>
                            </View>
                        </View>
                        <View style={{ margin:15, marginTop:0, justifyContent:'center', alignItems:'center' }}>
                            <Image style={{ width:100, height:100}} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1375/1375589.png'}}/>
                        </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <View>
                            <TouchableOpacity 
                                onPress={() => navigation.push(`Science_Level${currentLevelScience}Screen`)}
                                style={{ margin:15, width:24 }}>
                                <Ionicons name="md-lock-closed" size={24} color="#F273E6" />
                            </TouchableOpacity>
                            <View  style={{ margin:15, marginTop:0 }}>
                                <Text style={{ color:'#747474', fontSize:12 }}>Level {currentLevelScience}</Text>
                                <Text style={{ color:'#FF8B13', fontSize:25 }}>Science</Text>
                            </View>
                        </View>
                        <View style={{ margin:15, marginTop:0, justifyContent:'center', alignItems:'center' }}>
                            <Image style={{ width:100, height:100}} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8152/8152739.png'}}/>
                        </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <View>
                            <TouchableOpacity 
                                onPress={() => navigation.push(`Technology_Level${currentLevelTechnology}Screen`)}
                                style={{ margin:15, width:24 }}>
                                <Ionicons name="md-lock-closed" size={24} color="#F273E6" />
                            </TouchableOpacity>
                            <View  style={{ margin:15, marginTop:0 }}>
                                <Text style={{ color:'#747474', fontSize:12 }}>Level {currentLevelTechnology}S</Text>
                                <Text style={{ color:'#FF8B13', fontSize:25 }}>Technology</Text>
                            </View>
                        </View>
                        <View style={{ margin:15, marginTop:0, justifyContent:'center', alignItems:'center' }}>
                            <Image style={{ width:100, height:100}} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2712/2712037.png'}}/>
                        </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <View>
                            <TouchableOpacity 
                                onPress={() => navigation.push(`History_Level${currentLevelHistory}Screen`)}
                                style={{ margin:15, width:24 }}>
                                <Ionicons name="md-lock-closed" size={24} color="#F273E6" />
                            </TouchableOpacity>
                            <View  style={{ margin:15, marginTop:0 }}>
                                <Text style={{ color:'#747474', fontSize:12 }}>Level {currentLevelHistory}</Text>
                                <Text style={{ color:'#FF8B13', fontSize:25 }}>History</Text>
                            </View>
                        </View>
                        <View style={{ margin:15, marginTop:0, justifyContent:'center', alignItems:'center' }}>
                            <Image style={{ width:100, height:100}} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1800/1800174.png'}}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#FF8B13'
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