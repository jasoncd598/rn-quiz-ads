import { StyleSheet, Text, TouchableOpacity, View, StatusBar, SafeAreaView, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Main = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle='light' />
      <View style={styles.subContainer}>

        <View style={{ margin:25, alignItems:'flex-end', justifyContent:'space-between', flexDirection:'row' }}>
          <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Image style={{ width:30, height:30 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4108/4108233.png'}}/>
            <Text style={{ color:'#fff', marginLeft:8, fontSize:20}}>100</Text>
          </View>
          <TouchableOpacity style={{ justifyContent:'center', alignItems:'center'}}>
            <Ionicons name="person-circle-outline" size={30} color="#8BD8BD" />
          </TouchableOpacity>
        </View>
          
        <View style={{ margin:25, marginTop:0 }}>
          <Text style={{ color:'#fff', fontSize:35, fontWeight:'800', marginBottom:5 }} >Quiz Game</Text>
          <Text style={{ color:'#fff', fontSize:18 }} >Have a try with your favorite category and answer all the questions. Start learning!</Text>
        </View>

        <ScrollView 
          showsHorizontalScrollIndicator={false} 
          showsVerticalScrollIndicator={false}>
          <View style={styles.categoryContainer}>
            <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
              <View>
                <TouchableOpacity style={{ margin:15, width:24 }}>
                  <Ionicons name="md-play" size={24} color="#fff"/>
                </TouchableOpacity>
                <View  style={{ margin:15, marginTop:0 }}>
                  <Text style={{ color:'#ffffff90', fontSize:12 }} >Level 5</Text>
                  <Text style={{ color:'#fff', fontSize:25 }} >Mathematics</Text>
                </View>
              </View>
              <View style={{ margin:15, marginTop:0, justifyContent:'center', alignItems:'center' }}>
                <Image style={{ width:100, height:100}} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1375/1375589.png'}}/>
              </View>
            </View>
          </View>

          <View style={styles.categoryContainer}>
            <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
              <View>
                <TouchableOpacity style={{ margin:15, width:24 }}>
                  <Ionicons name="md-lock-closed" size={24} color="#fff" />
                </TouchableOpacity>
                <View  style={{ margin:15, marginTop:0 }}>
                  <Text style={{ color:'#ffffff90', fontSize:12 }} >Level 1</Text>
                  <Text style={{ color:'#fff', fontSize:25 }} >Science</Text>
                </View>
              </View>
              <View style={{ margin:15, marginTop:0, justifyContent:'center', alignItems:'center' }}>
                <Image style={{ width:100, height:100}} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8152/8152739.png'}}/>
              </View>
            </View>
          </View>

          <View style={styles.categoryContainer}>
            <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
              <View>
                <TouchableOpacity style={{ margin:15, width:24 }}>
                  <Ionicons name="md-lock-closed" size={24} color="#fff" />
                </TouchableOpacity>
                <View  style={{ margin:15, marginTop:0 }}>
                  <Text style={{ color:'#ffffff90', fontSize:12 }} >Level 1</Text>
                  <Text style={{ color:'#fff', fontSize:25 }}>Technology</Text>
                </View>
              </View>
              <View style={{ margin:15, marginTop:0, justifyContent:'center', alignItems:'center' }}>
                <Image style={{ width:100, height:100}} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2712/2712037.png'}}/>
              </View>
            </View>
          </View>

          <View style={styles.categoryContainer}>
            <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
              <View>
                <TouchableOpacity style={{ margin:15, width:24 }}>
                  <Ionicons name="md-lock-closed" size={24} color="#fff" />
                </TouchableOpacity>
                <View  style={{ margin:15, marginTop:0 }}>
                  <Text style={{ color:'#ffffff90', fontSize:12 }} >Level 1</Text>
                  <Text style={{ color:'#fff', fontSize:25 }}>History</Text>
                </View>
              </View>
              <View style={{ margin:15, marginTop:0, justifyContent:'center', alignItems:'center' }}>
                <Image style={{ width:100, height:100}} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1800/1800174.png'}}/>
              </View>
            </View>
          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}

export default Main

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#243665'
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
    buttonContainer: {
      height:55,
      backgroundColor:'#8BD8BD',
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
    },
    categoryContainer: { 
      margin:25, 
      marginTop:0, 
      height:120, 
      backgroundColor:'#8BD8BD',
      borderRadius:10
    }
  });