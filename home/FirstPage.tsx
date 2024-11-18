import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FirstPage: React.FC = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('LoginScreen');
  };

  const handleRegisterPress = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/energylogo1.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>EnergySaver</Text>
      <Text style={styles.subtitle}>Energia para um futuro sustentável</Text>

      {/* Botões de Login e Cadastro */}
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00796B',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#004D40',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 12,
    backgroundColor: '#00796B',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FirstPage;
