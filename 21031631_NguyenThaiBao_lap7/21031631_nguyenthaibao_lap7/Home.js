import React from 'react';
import {Text, View,TouchableOpacity,Image,TextInput} from 'react-native';


const Home = ({navigation}) => {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 30}}>
      <Text style= {{fontWeight: 'bold', fontSize: 20, color: 'red'}}>MANAGE YOUR TASK</Text>
      <TextInput style= {{borderWidth: 2, padding: 10}} placeholder="Enter your mail"/>
      <TouchableOpacity
        style={{borderWidth: 0, borderRadius: 10, backgroundColor: 'cyan', padding: 10, paddingHorizontal: 20}}
        onPress={() => navigation.navigate('TodoList')}
      >
        <Text style= {{color: 'white', fontWeight: 'bold'}}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;