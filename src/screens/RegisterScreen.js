import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import styles from '../styles/MainStyle';


const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (!username.trim() && !password.trim()) {
              Alert.alert('Validation Error', 'Both fields are required.');
              return;
            }
            if (!username.trim()) {
              Alert.alert('Validation Error', 'Username is required.');
              return;
            }
            if (!password.trim()) {
              Alert.alert('Validation Error', 'Password is required.');
              return;
            }


            Alert.alert('Success', 'User registered successfully');
            navigation.navigate('LoginScreen');
          }}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


export default RegisterScreen;
