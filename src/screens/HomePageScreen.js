import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ImageBackground, FlatList,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/MainStyle';


const HomePageScreen = ({ navigation }) => {
  const [employees, setEmployees] = useState([]);


  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/users');
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        Alert.alert('Error', 'Failed to load employees');
      }
    };
    fetchEmployees();
  }, []);


  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Employee List</Text>
        <FlatList
          data={employees}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.item}>{item.username}</Text>
              <Text style={styles.subText}>{item.email}</Text>
            </View>
          )}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.buttonText}>Go to Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterAdminScreen')}>
          <Text style={styles.buttonText}>Register as Admin</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};
export default HomePageScreen;
