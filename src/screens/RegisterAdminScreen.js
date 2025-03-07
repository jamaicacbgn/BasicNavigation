import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import styles from '../styles/MainStyle';


const RegisterAdminScreen = ({ navigation }) => {
  const [adminName, setAdminName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');


  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Admin Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={adminName}
          onChangeText={setAdminName}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={adminPassword}
          onChangeText={setAdminPassword}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (!adminName.trim() && !adminPassword.trim()) {
              Alert.alert('Validation Error', 'Both fields are required.');
              return;
            }
            if (!adminName.trim()) {
              Alert.alert('Validation Error', 'Username is required.');
              return;
            }
            if (!adminPassword.trim()) {
              Alert.alert('Validation Error', 'Password is required.');
              return;
            }


            Alert.alert('Success', 'Admin registered successfully');
            navigation.navigate('LoginScreen');
          }}
        >
          <Text style={styles.buttonText}>Register Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


export default RegisterAdminScreen;