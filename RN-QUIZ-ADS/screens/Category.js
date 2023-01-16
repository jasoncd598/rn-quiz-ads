import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, BackHandler } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Appbar } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-7588961490853489/3026128751';

const Category = ({ navigation }) => {
    const [currentLevelMath, setCurrentLevelMath] = useState('1')
    const [currentLevelScience, setCurrentLevelScience] = useState('1')
    const [currentLevelTechnology, setCurrentLevelTechnology] = useState('1')

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            const userLevelMath = await AsyncStorage.getItem('@userLevelMath')
            const userLevelScience = await AsyncStorage.getItem('@userLevelScience')
            const userLevelTechnology = await AsyncStorage.getItem('@userLevelTechnology')

            if(userLevelMath !== null) {
                setCurrentLevelMath(userLevelMath)
            }else{
                setCurrentLevelMath('1')
            }
            
            if(userLevelScience !== null){
                setCurrentLevelScience(userLevelScience)
            }else{
                setCurrentLevelScience('1')
            }
            
            if(userLevelTechnology !== null){
                setCurrentLevelTechnology(userLevelTechnology)
            }else{
                setCurrentLevelTechnology('1')
            }

            const backHandler = BackHandler.addEventListener(
                'hardwareBackPress',
                () => {
                    navigation.navigate('MainScreen')
                    return true
                },
            )

            return backHandler
        })
       
        return () => {
            unsubscribe
        }

    },[navigation])

  return (
    <View style={styles.container}>
        <Appbar.Header style={{ backgroundColor:'#363A66'}}>
            <Appbar.BackAction onPress={() => { navigation.goBack() }} color='#fff'/>
        </Appbar.Header>

        <View style={styles.subContainer}>
            <View style={{ margin:25, marginTop:0 }}>
                <Text style={{ color:'#fff', fontSize:35, fontWeight:'800', marginBottom:5 }}>Category</Text>
                <Text style={{ color:'#fff', fontSize:18 }}>Have a try with your favorite category and answer all the questions</Text>
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
                                <Text style={{ color:'#363A66', fontSize:25 }}>Mathematics</Text>
                            </View>
                        </View>
                        <View style={{ margin:15, marginTop:0, justifyContent:'center', alignItems:'center' }}>
                            <Image style={{ width:98, height:93}} source={require('../assets/math_image.png')}/>
                        </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <View>
                            <TouchableOpacity 
                                onPress={() => navigation.push(`Science_Level${currentLevelScience}Screen`)}
                                style={{ margin:15, width:24 }}>
                                <Ionicons name="md-play" size={24} color="#F273E6" />
                            </TouchableOpacity>
                            <View  style={{ margin:15, marginTop:0 }}>
                                <Text style={{ color:'#747474', fontSize:12 }}>Level {currentLevelScience}</Text>
                                <Text style={{ color:'#363A66', fontSize:25 }}>Science</Text>
                            </View>
                        </View>
                        <View style={{ margin:15, marginTop:0, justifyContent:'center', alignItems:'center' }}>
                            <Image style={{ width:110, height:77}} source={require('../assets/science_image.png')}/>
                        </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <View>
                            <TouchableOpacity 
                                onPress={() => navigation.push(`Technology_Level${currentLevelTechnology}Screen`)}
                                style={{ margin:15, width:24 }}>
                                <Ionicons name="md-play" size={24} color="#F273E6" />
                            </TouchableOpacity>
                            <View  style={{ margin:15, marginTop:0 }}>
                                <Text style={{ color:'#747474', fontSize:12 }}>Level {currentLevelTechnology}</Text>
                                <Text style={{ color:'#363A66', fontSize:25 }}>Technology</Text>
                            </View>
                        </View>
                        <View style={{ margin:15, marginTop:0, justifyContent:'center', alignItems:'center' }}>
                            <Image style={{ width:90, height:93}} source={require('../assets/technology_image.png')}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
        <View style={{ position:'absolute', left:0, bottom:0, right:0, justifyContent:'center', alignItems:'center'}}>
            <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
            />
        </View>
    </View>
  )
}

export default Category

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
    backgroundColor:'#FFF',
    borderRadius:10
  }
});