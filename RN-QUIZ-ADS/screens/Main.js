import { StyleSheet, Text, TouchableOpacity, View, StatusBar, SafeAreaView, Image } from 'react-native';

const Main = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle='light' />
      <View style={styles.subContainer}>

        <View style={{ flex:1, justifyContent:'center', alignItems:'center', marginRight:25, marginLeft:25 }}>
          <Image style={{ height:150, width:150 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3227/3227053.png'}}/>
          <View style={{ marginTop:25, justifyContent:'center', alignItems:'center'}}>
            <Text style={{ fontSize:40, fontWeight:'800', marginBottom:5, color:'#2E2E2E' }}>QuizMania</Text>
            <Text style={{ fontSize:16, color:'#747474' }}>Let's start the game. Are you ready? Let's go!</Text>
          </View>
        </View>

        <View style={{ position:'absolute', bottom:10, left:25, right:25}}>
          <TouchableOpacity 
            onPress={() => navigation.push('CategoryScreen')}
            style={{ backgroundColor:'#FF8B13', borderRadius:10, height:55, width:'100%', justifyContent:'center', alignItems:'center' }}>
            <Text style={{ color:'#fff', fontSize:16, fontWeight:'800' }}>Play</Text>
          </TouchableOpacity>
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
    backgroundColor:'#ECECEC',
    borderRadius:10
  }
});