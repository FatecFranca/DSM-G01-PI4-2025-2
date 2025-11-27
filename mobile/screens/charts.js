import React from 'react';
import { ScrollView, Text, View, Dimensions, StyleSheet } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export default function GraficosScreen() {
  // Dados simulados com base no seu dashboard
  const dias = ['10', '11', '12', '13', '14', '15'];
  const umidadeMedia = [253.17, 250.00, 248.5, 251.2, 249.8, 252.6];
  const leiturasBaixas = [55, 286, 287, 210, 186, 135];
  const acionamentos = [1, 6, 7, 4, 4, 3];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Média de Umidade por Dia</Text>
      <LineChart
        data={{
          labels: dias,
          datasets: [{ data: umidadeMedia }]
        }}
        width={screenWidth - 20}
        height={220}
        yAxisSuffix=""
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />

      <Text style={styles.title}>Leituras Abaixo de 350 por Dia</Text>
      <BarChart
        data={{
          labels: dias,
          datasets: [{ data: leiturasBaixas }]
        }}
        width={screenWidth - 20}
        height={220}
        yAxisLabel=""
        chartConfig={chartConfig}
        style={styles.chart}
      />

      <Text style={styles.title}>Distribuição de Leituras</Text>
      <PieChart
        data={dias.map((dia, i) => ({
          name: `Dia ${dia}`,
          population: acionamentos[i],
          color: pieColors[i],
          legendFontColor: '#333',
          legendFontSize: 12
        }))}
        width={screenWidth - 20}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        style={styles.chart}
      />
    </ScrollView>
  );
}

const chartConfig = {
  backgroundGradientFrom: '#f0f4f7',
  backgroundGradientTo: '#f0f4f7',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  propsForDots: {
    r: '4',
    strokeWidth: '2',
    stroke: '#007AFF'
  }
};

const pieColors = ['#007AFF', '#34C759', '#FF9500', '#FF3B30', '#AF52DE', '#5AC8FA'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    textAlign: 'center'
  },
  chart: {
    marginVertical: 8,
    borderRadius: 12
  }
});
