import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, BackHandler } from 'react-native';
import { Appbar, Modal } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-7588961490853489/3026128751';

const Math_Level3 = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [correct, setCorrect] = useState(true);
    const [wrong, setWrong] = useState(true);

    const checkAnwer = (answer) => {
        if(answer === 'B'){
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
                await AsyncStorage.setItem('@userLevelMath', '3')
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
            <Appbar.Content title="Math - Level 3" subtitle={'Subtitle'} color='#fff'/>
        </Appbar.Header>

        <View style={styles.subContainer}>
            <View style={{ margin: 25, alignItems:'center', justifyContent:'center'}}>
                <Text style={{ fontSize:18, fontWeight:'900', color:'#2E2E2E'}}>What is the value of x if 2x + 3 = 7?</Text>
            </View>
            <View style={{ margin: 25, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity style={styles.choiceButton} onPress={() => { checkAnwer('A') }}>
                    <Text style={styles.choiceText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.choiceButton} onPress={() => { checkAnwer('B') }}>
                    <Text style={styles.choiceText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.choiceButton} onPress={() => { checkAnwer('C') }}>
                    <Text style={styles.choiceText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.choiceButton} onPress={() => { checkAnwer('D') }}>
                    <Text style={styles.choiceText}>4</Text>
                </TouchableOpacity>
           </View>
        </View>

        {
            visible == true && correct == true? 
            <View style={styles.modalChecker}>
                <TouchableOpacity style={styles.modalChecker} onPress={() => { navigation.push('Math_Level4Screen') }}>
                    <View>
                        <Image style={{ width:150, height:150 }} source={{ uri:'https://cdn-icons-png.flaticon.com/512/2954/2954885.png' }} />
                    </View>

                    <View style={{ margin: 25, justifyContent:'center', alignItems:'center' }}>
                        <Text style={{ color:'#747474', textAlign:'center'}}>To solve for x, we can subtract 3 from both sides of the equation, giving us 2x = 4. Then, we can divide both sides by 2, resulting in x = 2</Text>
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
                <TouchableOpacity style={styles.modalChecker} onPress={() => { navigation.push('Math_Level4Screen') }}>
                    <View>
                        <Image style={{ width:150, height:150 }} source={{ uri:'https://cdn-icons-png.flaticon.com/512/2190/2190577.png' }} />
                    </View>

                    <View style={{ margin: 25, justifyContent:'center', alignItems:'center' }}>
                        <Text style={{ color:'#747474', textAlign:'center'}}>To solve for x, we can subtract 3 from both sides of the equation, giving us 2x = 4. Then, we can divide both sides by 2, resulting in x = 2</Text>
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

export default Math_Level3

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