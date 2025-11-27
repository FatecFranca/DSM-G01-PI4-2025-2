import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export default function DashboardScreen() {
  const powerBiUrl = 'https://app.powerbi.com/view?r=eyJrIjoiY2NhMjg2NTItMzBkOC00NDNhLTlmOTItMjNlY2Y1YzFiYzBhIiwidCI6ImNmNzJlMmJkLTdhMmItNDc4My1iZGViLTM5ZDU3YjA3Zjc2ZiIsImMiOjR9';

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: powerBiUrl }}
        style={styles.webview}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  webview: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
