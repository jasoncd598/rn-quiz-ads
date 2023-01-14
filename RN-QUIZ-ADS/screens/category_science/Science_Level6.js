import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, BackHandler } from 'react-native';
import { Appbar, Modal } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Science_Level6 = ({ navigation }) => {
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
                await AsyncStorage.setItem('@userLevelScience', '6')
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
        <Appbar.Header style={{ backgroundColor:'#FF8B13'}}>
            <Appbar.BackAction onPress={() => { navigation.navigate('CategoryScreen') }} color='#fff'/>
            <Appbar.Content title="Science - Level 6" subtitle={'Subtitle'} color='#fff'/>
        </Appbar.Header>

        <View style={styles.subContainer}>
            <View style={{ margin: 25, alignItems:'center', justifyContent:'center'}}>
                <Text style={{ fontSize:18, fontWeight:'900', color:'#2E2E2E'}}>What is the equation of the circle with center (4, -3) and radius 5?</Text>
            </View>
            <View style={{ margin: 25, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity style={styles.choiceButton} onPress={() => { checkAnwer('A') }}>
                    <Text style={styles.choiceText}>(x - 4)^2 + (y + 3)^2 = 25</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.choiceButton} onPress={() => { checkAnwer('B') }}>
                    <Text style={styles.choiceText}>(x - 4)^2 + (y - 3)^2 = 25</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.choiceButton} onPress={() => { checkAnwer('C') }}>
                    <Text style={styles.choiceText}>(x + 4)^2 + (y - 3)^2 = 25</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.choiceButton} onPress={() => { checkAnwer('D') }}>
                    <Text style={styles.choiceText}>(x + 4)^2 + (y + 3)^2 = 25</Text>
                </TouchableOpacity>
           </View>
        </View>

        {
            visible == true && correct == true? 
            <View style={styles.modalChecker}>
                <TouchableOpacity style={styles.modalChecker} onPress={() => { navigation.push('Science_Level7Screen') }}>
                    <View>
                        <Image style={{ width:150, height:150 }} source={{ uri:'https://cdn-icons-png.flaticon.com/512/2954/2954885.png' }} />
                    </View>

                    <View style={{ margin: 25, justifyContent:'center', alignItems:'center' }}>
                        <Text style={{ color:'#747474', textAlign:'center'}}>The equation of a circle with center (h, k) and radius r is (x - h)^2 + (y - k)^2 = r^2. We are given that the center is (4, -3) and the radius is 5, so we can substitute these values into the equation to get (x - 4)^2 + (y - (-3))^2 = 5^2. Simplifying, we get (x - 4)^2 + (y + 3)^2 = 25</Text>
                    </View>

                    <View style={{ position:'absolute', bottom:25, left:0, right:0, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{ color:'#FF8B13' }}>Tap anywhere to continue</Text>
                    </View>
                </TouchableOpacity>
            </View> : null
        }
        {
            visible == true && wrong == true? 
            <View style={styles.modalChecker}>
                <TouchableOpacity style={styles.modalChecker} onPress={() => { navigation.push('Science_Level7Screen') }}>
                    <View>
                        <Image style={{ width:150, height:150 }} source={{ uri:'https://cdn-icons-png.flaticon.com/512/2190/2190577.png' }} />
                    </View>

                    <View style={{ margin: 25, justifyContent:'center', alignItems:'center' }}>
                        <Text style={{ color:'#747474', textAlign:'center'}}>We know the slope of the line is -2, so we can use the slope-intercept form of a linear equation, y = mx + b, where m is the slope and b is the y-intercept. We also know that the line passes through the point (3, 4), so we can substitute these values into the equation to find the value of b. 4 = -2(3) + b, so b = 4. Thus, the equation of the line is y = -2x + 4</Text>
                    </View>

                    <View style={{ position:'absolute', bottom:25, left:0, right:0, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{ color:'#FF8B13' }}>Tap anywhere to continue</Text>
                    </View>
                </TouchableOpacity>
            </View> : null
        }
      
    </View>
    )
}

export default Science_Level6

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