import React, { useState, useEffect } from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  StyleSheet } from 'react-native';


const Todo = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch dữ liệu từ API
  const fetchData = () => {
    setIsLoading(true); // bắt đầu loading
    fetch('https://6457b6671a4c152cf9887b69.mockapi.io/api/vd1/jobdata')
    .then((response) => response.json())
    .then((data) => {
      setData(data); // cập nhật dữ liệu
      setIsLoading(false); //Tắt loading
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false); // Tắt loading nếu có lỗi
    });
  };

  useEffect(() => {
    fetchData(); // fetch khi component mount
  }, []); 

  useEffect(() => {
    if(route.params?.refresh) {
      fetchData();  //  fetch lại dữ liệu khi refresh thay đổi
    }
  }, [route.params?.refresh]);

// Xóa 1 todo 
  const handleDelete = (id) => {
    if(window.confirm("Bạn có chắc chắn muốn xóa không?")) {
      setIsLoading(true); //Bắt đầu loading khi xóa
      fetch(`https://6457b6671a4c152cf9887b69.mockapi.io/api/vd1/jobdata/${id}`, {
        method: 'DELETE',
      })
      .then((response) => {
        if(response.ok) {
          setData((prevData) => prevData.filter((item) => item.id !== id)); // xóa khỏi danh sách
          alert("Xóa thành công!");
        }
        else {
          alert("Xóa không thành công!");
        }
      })
      .catch((err) => {
        console.error("Lỗi: ", err);
        alert('Lỗi: Không thể xóa. Vui lòng thử lại.');
      })
      .finally(() => {
          setIsLoading(false); // Tắt loading sau khi xóa xong
        });
    }
  };

  const renderItem = ({item}) => (
    <View style={{backgroundColor: 'lightgrey', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 10, padding: 10, marginBottom: 10}}>
      <Text style={{fontWeight: 'bold'}}> {item.job} </Text>
      <View style= {{flexDirection: 'row', width: 130}}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditTodo', { todo: item })}
        >
          <Text style={styles.eidtText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.eidtText}>Delete</Text>
        </TouchableOpacity>
      </View>

    </View>

  );

  return(
    <View style= {{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}>
      <TextInput style={{borderWidth: 2, padding: 10, width: '100%', marginBottom: 10}} placeholder="Search..." />
      
      {isLoading ? (
        <Text>Đang tải dữ liệu...</Text>
      ) : (
        <>
          <Text>Show todo list</Text>
          <FlatList 
            data= {data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            style= {{width: '100%', height: 400}}
          />
        </>
      )}
      
      <TouchableOpacity
        style={{borderWidth: 0, borderRadius: 10, backgroundColor: 'cyan', padding: 10, paddingHorizontal: 20}}
        onPress={() => navigation.navigate('AddTodo')}
      >
        <Text style= {{color: 'white', fontWeight: 'bold'}}>+</Text>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  editButton: {
    marginRight: 5, 
    flex: 1, 
    backgroundColor: 'cyan',
    borderWidth: 0, 
    borderRadius: 10, 
    padding: 5,   
  },
  eidtText: {
    color: 'white', 
    fontWeight: 'bold',
    textAlign: 'center'
  }

})

export default Todo;