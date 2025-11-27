// screens/HomeScreen.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Page1')}>
          <Text style={styles.buttonText}>Charts Mobile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Page2')}>
          <Text style={styles.buttonText}>Dashboard BI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondary]} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.secondaryText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#1E90FF', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  box: { 
    backgroundColor: '#fff', 
    padding: 30, 
    borderRadius: 10, 
    width: '85%', 
    elevation: 5 
  },
  button: { 
    backgroundColor: '#1E90FF', 
    paddingVertical: 12, 
    borderRadius: 5, 
    marginBottom: 12 
  },
  buttonText: { 
    color: '#fff', 
    textAlign: 'center', 
    fontSize: 16 
  },
  secondary: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#1E90FF'
  },
  secondaryText: {
    color: '#1E90FF',
    textAlign: 'center',
    fontSize: 16
  }
});
