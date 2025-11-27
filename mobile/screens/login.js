// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { API_URL } from '../config/api';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha email e senha.');
      return;
    }
    try {
      const res = await axios.post(`${API_URL}/auth/login`, { email, senha });
      if (res.data.success) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Erro', res.data.message || 'Credenciais inválidas.');
      }
    } catch {
      Alert.alert('Erro', 'Falha na conexão com o servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#000" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#000" value={senha} onChangeText={setSenha} secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E90FF', justifyContent: 'center', alignItems: 'center' },
  loginBox: { backgroundColor: '#fff', padding: 30, borderRadius: 10, width: '85%', elevation: 5 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center', fontWeight: 'bold', color: '#1E90FF' },
  input: { borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 20, paddingVertical: 8, fontSize: 16, color: '#000' },
  button: { backgroundColor: '#1E90FF', paddingVertical: 12, borderRadius: 5, marginTop: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 16 },
  link: { color: '#1E90FF', textAlign: 'center', fontSize: 14, marginTop: 12 },
});
