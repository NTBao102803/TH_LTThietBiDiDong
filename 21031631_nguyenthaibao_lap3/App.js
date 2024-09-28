import * as React from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

// Trang chủ
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
      <Image source = {require('/img/smart1.png')} style={{width: 300, height: 360,top: 20, left: 55}} />
      <Text style={{width: 300, height: 18,top: 30, left: 25, fontWeight: 'bold',fontSize: 15}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style= {{width: 300, flexDirection: 'row', top: 40, justifyContent: 'space-between', left: 25}}>
        <View style={{flexDirection: 'row'}}>
          <Image source = {require('/img/star.png')}/>
          <Image source = {require('/img/star.png')}/>
          <Image source = {require('/img/star.png')}/>
          <Image source = {require('/img/star.png')}/>
          <Image source = {require('/img/star.png')}/>
        </View>
        <Text>(Xem 828 đánh giá)</Text>
      </View>
      <View style= {{width:300, flexDirection: 'row', top: 60, left: 25, justifyContent: 'space-between'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>1.790.000 đ</Text>
        <Text style= {{textDecorationLine: 'line-through', fontWeight: '100', fontSize: 20}}>1.790.000 đ</Text>
      </View>
      <View style= {{flexDirection: 'row', top: 80, left: 25}}>
        <Text style={{color: 'red', fontWeight: 'bold'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source = {require('/img/icon.png')} style= {{width: 20, height: 20, left: 15}} />
      </View>
      <TouchableOpacity style={{width: 360, height:35, top: 95, left: 25, borderWidth: 1, borderColor: 'black', padding: 5, borderRadius: 5, flexDirection: 'row', justifyContent: 'center'}} onPress={() => navigation.navigate('Details')}>
        <Text style= {{fontSize: 18, textAlign: 'center'}}>4 MÀU-CHỌN MÀU</Text>
        <Image source = {require('/img/vector.png')} style={{width: 14, height: 14, top: 5, left: 70}} />
      </TouchableOpacity>
      
      <TouchableOpacity style={{width: 360, height:35, top: 200, left: 25, backgroundColor: 'red', padding: 5, borderRadius: 5 }} >
        <Text style= {{fontSize: 18, textAlign: 'center'}}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}
// Trang điện thoại màu đỏ
function RedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
      <Image source = {require('/img/smart2.png')} style={{width: 300, height: 360,top: 20, left: 55}} />
      <Text style={{width: 300, height: 18,top: 30, left: 25, fontWeight: 'bold',fontSize: 15}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style= {{width: 300, flexDirection: 'row', top: 40, justifyContent: 'space-between', left: 25}}>
        <View style={{flexDirection: 'row'}}>
          <Image source = {require('/img/star.png')}/>
          <Image source = {require('/img/star.png')}/>
          <Image source = {require('/img/star.png')}/>
          <Image source = {require('/img/star.png')}/>
          <Image source = {require('/img/star.png')}/>
        </View>
        <Text>(Xem 828 đánh giá)</Text>
      </View>
      <View style= {{width:300, flexDirection: 'row', top: 60, left: 25, justifyContent: 'space-between'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>1.790.000 đ</Text>
        <Text style= {{textDecorationLine: 'line-through', fontWeight: '100', fontSize: 20}}>1.790.000 đ</Text>
      </View>
      <View style= {{flexDirection: 'row', top: 80, left: 25}}>
        <Text style={{color: 'red', fontWeight: 'bold'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source = {require('/img/icon.png')} style= {{width: 20, height: 20, left: 15}} />
      </View>
      <TouchableOpacity style={{width: 360, height:35, top: 95, left: 25, borderWidth: 1, borderColor: 'black', padding: 5, borderRadius: 5, flexDirection: 'row', justifyContent: 'center'}} onPress={() => navigation.navigate('Details')}>
        <Text style= {{fontSize: 18, textAlign: 'center'}}>4 MÀU-CHỌN MÀU</Text>
        <Image source = {require('/img/vector.png')} style={{width: 14, height: 14, top: 5, left: 70}} />
      </TouchableOpacity>
      
      <TouchableOpacity style={{width: 360, height:35, top: 200, left: 25, backgroundColor: 'red', padding: 5, borderRadius: 5 }} >
        <Text style= {{fontSize: 18, textAlign: 'center'}}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}
// Trang điện thoại màu xanh dương
function BlueScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
      <Image source = {require('/img/smart5.png')} style={{width: 300, height: 360,top: 20, left: 55}} />
      <Text style={{width: 300, height: 18,top: 30, left: 25, fontWeight: 'bold',fontSize: 15}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style= {{width: 300, flexDirection: 'row', top: 40, justifyContent: 'space-between', left: 25}}>
        <View style={{flexDirection: 'row'}}>
          <Image source = {require('/img/star.png')}/>
          <Image source = {require('/img/star.png')}/>
          <Image source = {require('/img/star.png')}/>
          <Image source = {require('/img/star.png')}/>
          <Image source = {require('/img/star.png')}/>
        </View>
        <Text>(Xem 828 đánh giá)</Text>
      </View>
      <View style= {{width:300, flexDirection: 'row', top: 60, left: 25, justifyContent: 'space-between'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>1.790.000 đ</Text>
        <Text style= {{textDecorationLine: 'line-through', fontWeight: '100', fontSize: 20}}>1.790.000 đ</Text>
      </View>
      <View style= {{flexDirection: 'row', top: 80, left: 25}}>
        <Text style={{color: 'red', fontWeight: 'bold'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source = {require('/img/icon.png')} style= {{width: 20, height: 20, left: 15}} />
      </View>
      <TouchableOpacity style={{width: 360, height:35, top: 95, left: 25, borderWidth: 1, borderColor: 'black', padding: 5, borderRadius: 5, flexDirection: 'row', justifyContent: 'center'}} onPress={() => navigation.navigate('Details')}>
        <Text style= {{fontSize: 18, textAlign: 'center'}}>4 MÀU-CHỌN MÀU</Text>
        <Image source = {require('/img/vector.png')} style={{width: 14, height: 14, top: 5, left: 70}} />
      </TouchableOpacity>
      
      <TouchableOpacity style={{width: 360, height:35, top: 200, left: 25, backgroundColor: 'red', padding: 5, borderRadius: 5 }} >
        <Text style= {{fontSize: 18, textAlign: 'center'}}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}
// Trang điện thoại màu trắng
function LightBlueScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
      <Image source = {require('/img/smart3.png')} style={{width: 300, height: 360,top: 20, left: 55}} />
      <Text style={{width: 300, height: 18,top: 30, left: 25, fontWeight: 'bold',fontSize: 15}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style= {{width: 300, flexDirection: 'row', top: 40, justifyContent: 'space-between', left: 25}}>
        <View style={{flexDirection: 'row'}}>
          <Image source = {require('/img/star.png')}/>
          <Image source = {require('/img/star.png')}/>
          <Image source = {require('/img/star.png')}/>
          <Image source = {require('/img/star.png')}/>
          <Image source = {require('/img/star.png')}/>
        </View>
        <Text>(Xem 828 đánh giá)</Text>
      </View>
      <View style= {{width:300, flexDirection: 'row', top: 60, left: 25, justifyContent: 'space-between'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>1.790.000 đ</Text>
        <Text style= {{textDecorationLine: 'line-through', fontWeight: '100', fontSize: 20}}>1.790.000 đ</Text>
      </View>
      <View style= {{flexDirection: 'row', top: 80, left: 25}}>
        <Text style={{color: 'red', fontWeight: 'bold'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source = {require('/img/icon.png')} style= {{width: 20, height: 20, left: 15}} />
      </View>
      <TouchableOpacity style={{width: 360, height:35, top: 95, left: 25, borderWidth: 1, borderColor: 'black', padding: 5, borderRadius: 5, flexDirection: 'row', justifyContent: 'center'}} onPress={() => navigation.navigate('Details')}>
        <Text style= {{fontSize: 18, textAlign: 'center'}}>4 MÀU-CHỌN MÀU</Text>
        <Image source = {require('/img/vector.png')} style={{width: 14, height: 14, top: 5, left: 70}} />
      </TouchableOpacity>
      
      <TouchableOpacity style={{width: 360, height:35, top: 200, left: 25, backgroundColor: 'red', padding: 5, borderRadius: 5 }} >
        <Text style= {{fontSize: 18, textAlign: 'center'}}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}
function DetailsScreen( {navigation} ) {
  const colors = ['lightblue', 'red', 'black', 'blue'];

  const handleColorPress = (color) => {
    setSelectedColor(color);
  };
  const [selectedColor, setSelectedColor] = useState(null);

  const handlePress = () => {
    if (selectedColor == 'red') {
      navigation.navigate('RedScreen');
    } else if (selectedColor == 'blue') {
      navigation.navigate('BlueScreen');
    }
    else if (selectedColor == 'black') {
      navigation.navigate('Home')
    }
    else if (selectedColor == 'lightblue') {
      navigation.navigate('LightBlueScreen')
    }
    else {
      // Xử lý trường hợp màu chưa được chọn hoặc màu khác
      console.log('Màu chưa được chọn hoặc màu không hợp lệ');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{flexDirection: 'row', width: 360, height: 175}} >
        <Image source = {require('/img/smart1.png')} style={{width: 112, height: '100%',top: 10, left: 4}} resizeMode='contain' />
        <View style={{left: 15, top: 25}}>
          <Text>Điện Thoại Vsmart Joy 3</Text>
          <Text>Hàng chính hãng</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={{flex: 1, fontSize: 18}}>Chọn một màu bên dưới:</Text>
        <View style={styles.colorContainer}>
          {colors.map((color) => (
            <TouchableOpacity
              key={color}
              style={[styles.colorBox, { backgroundColor: color }]}
              onPress={() => handleColorPress(color)}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C4C4C4', 
    width: 360
  },
  colorContainer:   
 {
    flexDirection: 'column',
    marginBottom: 20,
  },
  colorBox: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4286f4',
    padding: 10,
    borderRadius: 5,
    width: 300
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="BlueScreen" component={BlueScreen} />
        <Stack.Screen name="RedScreen" component={RedScreen} />
        <Stack.Screen name="LightBlueScreen" component={LightBlueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
