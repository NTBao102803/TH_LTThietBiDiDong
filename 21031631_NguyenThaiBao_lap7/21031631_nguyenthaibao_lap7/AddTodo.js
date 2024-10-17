import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  View,
  FlatList,
  StyleSheet } from 'react-native';

const AddTodo = ({navigation}) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = () => {
    const newTodo = {
      id: (Math.random()*1000).toString(),
      job: todo,
    };

    if(todo.trim() === "") {
      alert("Vui lòng nhập todo !");
      return;  
    }
    fetch('https://6457b6671a4c152cf9887b69.mockapi.io/api/vd1/jobdata', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
    .then((res) => res.json())
    .then((data) => {
      alert('Thêm thành công')
      setTodo("")
      navigation.navigate('TodoList', {refresh: Math.random()});
    });
  };


  return(
    <View style= {{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 30, padding: 10}}>
      <Text style= {{fontSize: 20, fontWeight: 'bold'}}>ADD YOUR JOB</Text>
      <TextInput style={{borderWidth: 2, padding: 10, width: '100%', marginBottom: 10}}
        placeholder="input your job" 
        value={todo}
        onChangeText={setTodo}
      />
      <TouchableOpacity
        style={{borderWidth: 0, borderRadius: 10, backgroundColor: 'cyan', padding: 10, paddingHorizontal: 20}}
        onPress={handleSubmit}
      >
        <Text style= {{color: 'white', fontWeight: 'bold'}}>FINISH</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;