import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, BackHandler } from 'react-native';
import { Appbar, Modal } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-7588961490853489/3026128751';
const Technology_Level7 = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [correct, setCorrect] = useState(true);
    const [wrong, setWrong] = useState(true);

    const checkAnwer = (answer) => {
        if(answer === 'C'){
            setVisible(true)
            setCorrect(true)
            setWrong(false)
        }else{
            setVisible(true)
            setWrong(true)
            setCorrect(false)
        }
    }

    useEffect(() => {
       async function init(){
            try {
                await AsyncStorage.setItem('@userLevelTechnology', '7')
            } catch (e) {
                console.log(`Error ${e}`)
            }

            const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
                () => {
                    navigation.navigate('CategoryScreen')
                    return true;
                },
            );
            return () => backHandler.remove();
       }
       init()
    },[])

    return (
    <View style={styles.container}>
        <Appbar.Header style={{ backgroundColor:'#363A66'}}>
            <Appbar.BackAction onPress={() => { navigation.navigate('CategoryScreen') }} color='#fff'/>
            <Appbar.Content title="Technology - Level 7" subtitle={'Subtitle'} color='#fff'/>
        </Appbar.Header>

        <View style={styles.subContainer}>
            <View style={{ margin: 25, alignItems:'center', justifyContent:'center'}}>
                <Text style={{ fontSize:18, fontWeight:'900', color:'#2E2E2E'}}>What is the most common type of wireless network technology?</Text>
            </View>
            <View style={{ margin: 25, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity style={styles.choiceButton} onPress={() => { checkAnwer('A') }}>
                    <Text style={styles.choiceText}>Zigbee</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.choiceButton} onPress={() => { checkAnwer('B') }}>
                    <Text style={styles.choiceText}>Bluetooth</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.choiceButton} onPress={() => { checkAnwer('C') }}>
                    <Text style={styles.choiceText}>Wi-Fi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.choiceButton} onPress={() => { checkAnwer('D') }}>
                    <Text style={styles.choiceText}>NFC</Text>
                </TouchableOpacity>
           </View>
        </View>

        {
            visible == true && correct == true? 
            <View style={styles.modalChecker}>
                <TouchableOpacity style={styles.modalChecker} onPress={() => { navigation.push('Technology_Level8Screen') }}>
                    <View>
                        <Image style={{ width:150, height:150 }} source={{ uri:'https://cdn-icons-png.flaticon.com/512/2954/2954885.png' }} />
                    </View>

                    <View style={{ margin: 25, justifyContent:'center', alignItems:'center' }}>
                        <Text style={{ color:'#747474', textAlign:'center'}}>Wi-Fi (Wireless Fidelity) is a wireless networking technology that allows devices to connect to the internet or a local network without the need for a physical connection. It is the most widely used wireless technology, and is found in most homes, offices, and public places</Text>
                    </View>

                    <View style={{ position:'absolute', bottom:25, left:0, right:0, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{ color:'#363A66' }}>Tap anywhere to continue</Text>
                    </View>
                </TouchableOpacity>
            </View> : null
        }
        {
            visible == true && wrong == true? 
            <View style={styles.modalChecker}>
                <TouchableOpacity style={styles.modalChecker} onPress={() => { navigation.push('Technology_Level8Screen') }}>
                    <View>
                        <Image style={{ width:150, height:150 }} source={{ uri:'https://cdn-icons-png.flaticon.com/512/2190/2190577.png' }} />
                    </View>

                    <View style={{ margin: 25, justifyContent:'center', alignItems:'center' }}>
                        <Text style={{ color:'#747474', textAlign:'center'}}>Wi-Fi (Wireless Fidelity) is a wireless networking technology that allows devices to connect to the internet or a local network without the need for a physical connection. It is the most widely used wireless technology, and is found in most homes, offices, and public places</Text>
                    </View>

                    <View style={{ position:'absolute', bottom:25, left:0, right:0, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{ color:'#363A66' }}>Tap anywhere to continue</Text>
                    </View>
                </TouchableOpacity>
            </View> : null
        }
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

export default Technology_Level7

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    subContainer:{
        flex:1,
    },
    modalChecker: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFF',
        position:'absolute',
        zIndex:100,
        height:'100%',
        width:'100%'
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
    },
    choiceButton:{ 
        backgroundColor:'#747474',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        borderRadius:30,
        marginTop:10
    },
    choiceText: {
        color:'#fff'
    }
});