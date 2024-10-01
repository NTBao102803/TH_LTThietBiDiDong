import react, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

function YourApp()  {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(141.800);
  const upPrice = price*(2).toFixed(.2)
  const downPrice = (price-price).toFixed(.2)
  return (
    <View style = {style.container}>

      <View style = {style.head}>
        <View>
          <Image source = {require('/img/anh1.webp')} style= {{width: 104, height: 172, top: 14, left: 13}}/>
        </View>
        <View >
            <Text style= {{left: 30, top: 14}}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style= {{left: 30, top: 30}}>Cung cấp bởi Tiki Trading</Text>
            <Text style= {{color: 'red', fontSize: 20, left: 30, top: 30}}>{price} đ</Text>
            <View style= {{flexDirection: 'row',left: 30, top: 50}}>
              <button onClick={() => {setCount(count - 1), setPrice(price-141.8)}}>
                -
              </button>
              <Text>{count}</Text>
              <button onClick={() => {setCount(count + 1), setPrice(price+141.8)}}>
                +
              </button>
              <Text style= {{left: 70, color: 'blue'}}>Mua sau</Text>
            </View>
        </View>
      </View>
      <View style= {{ backgroundColor: 'white', flexDirection: 'row', padding: 10}}>
          <Text style= {{left: 14}}>Mã giảm giá đã lưu</Text>
          <Text style= {{color: 'blue', fontWeight: 'bold', left: 30}}>Xem tại đây</Text>
      </View>
      <View style={{flexDirection: 'row', width: 360, height: 45, backgroundColor: 'white', padding: 10}}>
        <Text style= {{left: 14, fontSize: 20}}>Mã giảm giá</Text>
        <View style={{width: 100, height: 45, left: 120}}>
          <button style= {{backgroundColor: 'blue', color: 'white', fontWeight: 'bold', fontSize: 20}}>Áp dụng</button>
        </View>
      </View>
      <View style = {style.main}>
        <View style= {{flexDirection: 'row', width: 360, paddingTop: 10, paddingLeft: 5, height: 50, backgroundColor: 'white', justifyContent: 'space-between'}}>
          <Text style= {{fontWeight: 'bold', fontSize: 13}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Text style= {{color: 'blue', fontWeight: 'bold', fontSize: 13}}>Nhập tại đây?</Text>
        </View>
        <View style= {{flexDirection: 'row', width: 360,top: 20, padding: 10, height: 50, backgroundColor: 'white', justifyContent: 'space-between'}}>
          <Text style= {{fontWeight: 'bold', fontSize: 18}}>Tạm tính</Text>
          <Text style= {{color: 'red', fontWeight: 'bold', fontSize: 18}}>{price} đ</Text>
        </View>
        <View style= {{backgroundColor:'white', width: 360, height: 120, top: 150}}>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
            <Text style= {{fontWeight: 'bold', fontSize: 18, color: 'grey'}}>Thành tiền</Text>
            <Text style= {{color: 'red', fontWeight: 'bold', fontSize: 20}}>{price} đ</Text>
          </View>
          <TouchableOpacity style={{width: 310, alignItems: 'center', backgroundColor: 'red', padding: 10, marginLeft: 25}}>
            <Text>TIẾN HÀNH ĐẶT HÀNG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container:{
    // flex: 1,
    // flexDirection: 'row',
    backgroundColor: 'grey',
    width: 360,
    height: 640,

  },
  head: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 360,
    height: 200,
  },
  main: {
    flex: 1,
    top: 20,
    // flexDirection: 'row',
    backgroundColor: 'grey',
    width: 360
  }
})

export default YourApp;