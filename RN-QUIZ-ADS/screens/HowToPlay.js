import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Appbar } from 'react-native-paper';

const HowToPlay = () => {
  return (
    <View style={styles.container}>
        <Appbar.Header mode='small' style={{ backgroundColor:'#fff' }}>
            <Appbar.BackAction onPress={() => { navigation.goBack() }} color="#D6B702" />
        </Appbar.Header>

        <ScrollView>
            <View style={{ margin: 25, marginTop:0 }}>
                <Text style={{ color:'#2E2E2E', fontSize:35, fontWeight:'800', marginBottom:5 }} >How to play</Text>
                <Text style={{ color:'#747474', fontSize:18 }} >Choose your favorite category and test your ability by solving</Text>
            </View>
            
            <View style={{ margin: 25, marginTop:10 }}>
                <Text style={{ color:'#747474', fontSize:18 }} >
                Here are the general steps for playing a multiple choice quiz game:
                </Text>

                <Text style={{ color:'#747474', fontSize:18 }} >
                1. Choose a topic: Pick a subject or theme for the quiz that you and your players are interested in. This could be anything from history to pop culture to science.
                </Text>

                <Text style={{ color:'#747474', fontSize:18 }} >
                2. Prepare questions and answers: Write out a list of questions and multiple choice answers for the topic. Make sure to include only one correct answer per question.
                </Text>

                <Text style={{ color:'#747474', fontSize:18 }} >
                3. Set a time limit (optional): Decide if you want to set a time limit for the quiz and how long it should be.
                </Text>
                
                <Text style={{ color:'#747474', fontSize:18 }} >
                4. Gather players: Get a group of people together to play the game. You can divide them into teams or have them play individually.
                </Text>

                <Text style={{ color:'#747474', fontSize:18 }} >
                5. Start the quiz: Begin by reading the questions and answer choices out loud to the players.
                </Text>

                <Text style={{ color:'#747474', fontSize:18 }} >
                6. Players or teams will have a set amount of time to discuss and choose an answer.
                </Text>

                <Text style={{ color:'#747474', fontSize:18 }} >
                7. Reveal the correct answer: After a certain time period, reveal the correct answer and award points accordingly.
                </Text>

                <Text style={{ color:'#747474', fontSize:18 }} >
                8. Repeat the process: Continue this process for the remaining questions.
                </Text>

                <Text style={{ color:'#747474', fontSize:18 }} >
                9. At the end of the quiz, the team or player with the most points is the winner.
                </Text>

                <Text style={{ color:'#747474', fontSize:18 }} >
                    You can add rules or change the format of awarding points, or any other feature to make the game more interesting and engaging.
                </Text>
            </View>
        </ScrollView>
    </View>
  )
}

export default HowToPlay

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#fff'
    },
})