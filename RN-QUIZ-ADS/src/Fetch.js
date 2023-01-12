import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../config'

const Fetch = ( questionNumber ) => {
    const round = questionNumber.questionNumber
    const [users, setUsers] = useState([])
    const todoRef = firebase.firestore().collection('questions')

    useEffect(() => {
        async function init(){
            todoRef.onSnapshot(querySnapShot => {
                const users = []
                querySnapShot.forEach((doc) => {
                    const { question, choiceA, choiceB, choiceC, questionNumber } = doc.data()
                    if(round == questionNumber){
                        users.push({
                            id: doc.id,
                            question,
                            choiceA,
                            choiceB,
                            choiceC
                        })
                    }
                })
                setUsers(users)
            })
        }
        init()
    }, [])

    return (
        <View style={{ flex:1 }}>
            <FlatList
                data={users}
                numColumns={1}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View>
                            <Text>{ item.question }</Text>
                            <Text>A. { item.choiceA }</Text>
                            <Text>B. { item.choiceB }</Text>
                            <Text>C. { item.choiceC }</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Fetch
