import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import styles from '../styles/MainStyle';


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    if (!username && !password) {
      Alert.alert('Error', 'Something went wrong');
      return;
    }
    if (!username) {
      Alert.alert('Error', 'Username is required');
      return;
    }
    if (!password) {
      Alert.alert('Error', 'Password is required');
      return;
    }


    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });


      const data = await response.json();
      if (data.token) {
        navigation.navigate('HomePageScreen', { token: data.token });
      } else {
        Alert.alert('Login Failed', 'Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
  };


  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterAdminScreen')}>
          <Text style={styles.buttonText}>Register as Admin</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


export default LoginScreen;
