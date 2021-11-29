import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { SafeAreaView,TextInput } from 'react-native';
import { Button, Alert} from "react-native";
import './global.js';

export default function ModalScreen() {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{global.name}'s Information</Text>
      <Text style={styles.title}>Go Ahead and Change the Info, We'll Take Care of The Rest</Text>
      <TextInput style={styles.input} placeholder = {global.name} onChangeText={(value) => setName(value)}  />
      <TextInput style={styles.input} onChangeText={setAge} value={age} placeholder = {global.age} keyboardType="numeric" />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title="Press me" onPress={() => {global.name = name, global.age = age}} />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white',
  },

});
