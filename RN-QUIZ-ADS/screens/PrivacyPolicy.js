import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Appbar } from 'react-native-paper'

const PrivacyPolicy = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor:'#363A66'}}>
        <Appbar.BackAction onPress={() => { navigation.goBack() }} color='#fff'/>
        <Appbar.Content title="Privacy Policy" subtitle={'Subtitle'} color='#fff'/>
      </Appbar.Header>
      <ScrollView style={{ flex:1 }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

      <View style={styles.innerContainer}>

          <View style={{ justifyContent:'center', alignItems:'flex-start' }}>
            <Text style={{ fontSize:20, color:'#363A66', fontWeight:'700'}}>
              TWIST QUIZ Privacy Policy
            </Text>

            <Text style={{ marginTop:10}}>
              At TWIST QUIZ, we respect the privacy of our users and are committed to protecting their personal information. This privacy policy explains how we collect, use, and share personal information when you use our quiz application.
            </Text>

            <Text style={{ fontSize:20, color:'#363A66', fontWeight:'700', marginTop:10}}>
              Collection of Personal Information
            </Text>

            <Text style={{ marginTop:5}}>
              When you use TWIST QUIZ, we may collect certain personal information such as your device type, device ID, and IP address. We may also collect information about your use of the app, including the quizzes you take and level of your game.
            </Text>

            <Text style={{ marginTop:5}}>
              We use Google Admob to serve ads within our app. Admob collects information such as device type, device ID, and IP address for the purpose of delivering targeted ads to you. Admob's privacy policy can be found at https://policies.google.com/privacy.
            </Text>

            <Text style={{ fontSize:20, color:'#363A66', fontWeight:'700', marginTop:10}}>
              Use of Personal Information
            </Text>

            <Text style={{ marginTop:5}}>
              We use the personal information we collect to operate, improve, and personalize TWIST QUIZ. We may also use your personal information to send you notifications or updates about the app, as well as to contact you for customer support or research purposes.
            </Text>

            <Text style={{ fontSize:20, color:'#363A66', fontWeight:'700', marginTop:10}}>
              Sharing of Personal Information
            </Text>

            <Text style={{ marginTop:5}}>
              We will not share your personal information with any third party, except as required by law or with your consent. We may share non-personal information, such as aggregate usage statistics, with third parties for research or marketing purposes.
            </Text>

            <Text style={{ fontSize:20, color:'#363A66', fontWeight:'700', marginTop:10}}>
              Security:
            </Text>

            <Text style={{ marginTop:5}}>
              We use reasonable security measures to protect the personal information we collect. However, please note that no transmission of data over the internet is 100% secure, and we cannot guarantee the security of your personal information.
            </Text>

            <Text style={{ fontSize:20, color:'#363A66', fontWeight:'700', marginTop:10}}>
              Changes to This Policy
            </Text>

            <Text style={{ marginTop:5, color:'#2E2E2E'}}>
              We may update this privacy policy from time to time. If we make any changes.
            </Text>

            <Text style={{ fontSize:20, color:'#363A66', fontWeight:'700', marginTop:10}}>
              Contact Us
            </Text>

            <Text style={{ marginTop:5}}>
              If you have any questions about this privacy policy or our use of your personal information, please contact us at jaycd598@gmail.com.
            </Text>
          </View>
      </View>
        </ScrollView>
    </View>
  )
}

export default PrivacyPolicy

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  innerContainer:{
    margin:25
  }
})