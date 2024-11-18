import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../services/firebaseConnection';

const MainPage: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        Alert.alert('Acesso negado', 'Por favor, faça login primeiro.');
        navigation.navigate('LoginScreen'); 
      }
    });

    return unsubscribe;
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Bem-vindo ao EnergySaver!</Text>

      {/* Gráfico de consumo energético */}
      <Text style={styles.chartTitle}>Consumo Energético (Últimos 7 Dias)</Text>
      <LineChart
        data={{
          labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
          datasets: [
            {
              data: [200, 150, 180, 170, 200, 220, 190], // Exemplo de dados
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width - 30}
        height={220}
        yAxisSuffix=" kWh"
        chartConfig={chartConfig}
        style={styles.chart}
      />

      <Text style={styles.chartTitle}>Economia Energética (Últimos 7 Dias)</Text>
      <BarChart
        data={{
          labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
          datasets: [
            {
              data: [10, 20, 15, 18, 25, 30, 22], 
            },
          ],
        }}
        width={Dimensions.get('window').width - 30}
        height={220}
        yAxisSuffix=" %"
        chartConfig={chartConfig}
        style={styles.chart}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Configurações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Relatórios Detalhados</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#00796B',
  backgroundGradientTo: '#48A999',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 15,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00796B',
    textAlign: 'center',
    marginVertical: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004D40',
    marginBottom: 10,
    marginTop: 20,
  },
  chart: {
    borderRadius: 16,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#00796B',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MainPage;
