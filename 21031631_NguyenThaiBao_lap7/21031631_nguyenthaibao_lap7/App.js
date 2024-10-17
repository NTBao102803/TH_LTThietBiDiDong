import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Home from './Home';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
// Khởi tạo Stack
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="AddTodo" component={AddTodo} />
        <Stack.Screen name="EditTodo" component={EditTodo} />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

