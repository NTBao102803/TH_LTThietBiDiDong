import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';


const EditTodo = ({navigation, route}) => {
  const [updatedTodo, setUpdatedTodo] = useState('');

    // lấy todo(id,job) làm param thông qua đường dẫn - route.params
  const { todo } = route.params;

  useEffect(() => {
    if(todo) {
      setUpdatedTodo(todo.job);
    }
  }, [todo]);

  const handleSubmit = () => {
    if (updatedTodo.trim() === '') {
      alert('Vui lòng nhập todo !');
    }
    fetch(`https://6457b6671a4c152cf9887b69.mockapi.io/api/vd1/jobdata/${todo.id}`, {
      method : 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ job: updatedTodo.trim() })
    })
    .then((res) => res.json())
    .then((data) => {
      alert('Cập nhật thành công');
      navigation.navigate('TodoList', { refresh: Math.random()});
    });
  };

  return(
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 20,
      }}>
      <TextInput
        style={{ borderWidth: 2, padding: 10, width: '100%' }}
        placeholder=""
        value={updatedTodo}
        onChangeText={setUpdatedTodo}
      />

      <TouchableOpacity
        onPress={handleSubmit}
        style={{ padding: 16, backgroundColor: 'cyan', borderRadius: 10 }}>
        <Text>UPDATE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditTodo;