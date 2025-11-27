// screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { API_URL } from '../config/api';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const handleRegister = async () => {
    if (!nome || !email || !senha || !confirmSenha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    if (senha !== confirmSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }
    try {
      const res = await axios.post(`${API_URL}/auth/register`, { nome, email, senha });
      if (res.data.success) {
        Alert.alert('Sucesso', 'Cadastro realizado!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Erro', res.data.message || 'Não foi possível cadastrar.');
      }
    } catch {
      Alert.alert('Erro', 'Falha na conexão com o servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Criar Conta</Text>
        <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#000" value={nome} onChangeText={setNome} />
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#000" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#000" value={senha} onChangeText={setSenha} secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirmar Senha" placeholderTextColor="#000" value={confirmSenha} onChangeText={setConfirmSenha} secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Voltar ao Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E90FF', justifyContent: 'center', alignItems: 'center' },
  box: { backgroundColor: '#fff', padding: 30, borderRadius: 10, width: '85%', elevation: 5 },
  title: { fontSize: 22, marginBottom: 16, textAlign: 'center', fontWeight: 'bold', color: '#1E90FF' },
  input: { borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 16, paddingVertical: 8, fontSize: 16, color: '#000' },
  button: { backgroundColor: '#1E90FF', paddingVertical: 12, borderRadius: 5, marginTop: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 16 },
  link: { color: '#1E90FF', textAlign: 'center', fontSize: 14, marginTop: 12 },
});
