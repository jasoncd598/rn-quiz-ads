import { StyleSheet, Text, TouchableOpacity, View, StatusBar, SafeAreaView } from 'react-native';

const Main = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle='dark-content' />
      <View style={styles.subContainer}>
        <View>
          <Text>QUIZ</Text>
        </View>
        <View style={styles.buttonParentContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.innerButtonContainer} onPress={()=> navigation.navigate('CategoryScreen')}>
              <Text style={styles.buttonContainerText}>Play</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.buttonContainer, { marginTop:10 }]}>
            <TouchableOpacity style={styles.innerButtonContainer} onPress={()=> navigation.navigate('HowToPlayScreen')}>
              <Text style={styles.buttonContainerText}>How to Play</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Main

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#fff'
    },
    subContainer:{
      flex:1,
      justifyContent: 'center',
      alignItems:'center'
    },
    buttonParentContainer: {
      position:'absolute',
      bottom:25,
      left:25,
      right:25
    },
    buttonContainer: {
      height:55,
      backgroundColor:'#D6B702',
      justifyContent: 'center',
      alignItems:'center',
      borderRadius:10
    },
    innerButtonContainer: {
      width:'100%', 
      height:'100%', 
      justifyContent:'center', 
      alignItems:'center' 
    },
    buttonContainerText: {
      color:'#fff'
    }
  });