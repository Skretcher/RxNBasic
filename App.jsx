import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import TestScreen from './src/screens/TestScreen'; // ✅ adjust path if needed
import AuthStack from './src/navigation/auth.js'; // ✅ adjust path if needed
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Test" component={TestScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

       <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
