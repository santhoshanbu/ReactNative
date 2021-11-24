import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome santhosh!</Text>
      <TextInput  style={styles.containers}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:40
  },
  containers:{
    height:40,
    borderColor:'black',
    borderWidth:1
  }
});
