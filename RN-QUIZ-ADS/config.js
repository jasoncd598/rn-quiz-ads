import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCgI-Lvy1Xs-uobGMn3fqtbgFhA2TjsfSI",
    authDomain: "rn-quiz-ads.firebaseapp.com",
    projectId: "rn-quiz-ads",
    storageBucket: "rn-quiz-ads.appspot.com",
    messagingSenderId: "524854008758",
    appId: "1:524854008758:web:07601bde6dab73c7037f17",
    measurementId: "G-J60NQH45NF"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {
    firebase
}