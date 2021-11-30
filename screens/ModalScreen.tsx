import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { SafeAreaView,TextInput } from 'react-native';
import { Button, Alert} from "react-native";
import './global.tsx';

export default function ModalScreen() {
  //I set up constants for each variable. These do not reference Global Varaibles YET but will be copied in the Function
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState(null);
  const [weight, setWeight] = React.useState(null);
  const [height, setHeight] = React.useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{global.nombre}'s Information</Text>
      <Text style={styles.subtitle}>Go Ahead and Change the Info, We'll Take Care of The Rest</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subsubtitle}>Name:</Text>
      <TextInput style={styles.input} placeholder = {global.nombre} onChangeText={(value) => setName(value)}  />
      <Text style={styles.subsubtitle}>Age:</Text>
      <TextInput style={styles.input} onChangeText={setAge} value={age} placeholder = {global.age} keyboardType="numeric" />
      <Text style={styles.subsubtitle}>Height:</Text>
      <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder = {global.height} keyboardType="numeric" />
      <Text style={styles.subsubtitle}>Weight:</Text>
      <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder = {global.weight} keyboardType="numeric" />
      <Button title="SUBMIT" onPress={() => {global.name = name, global.age = age}} />
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
    fontSize: 25,
    fontWeight: 'bold',
    color: `#6495ed`,
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
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    height: 5,
    fontStyle: 'italic',
  },
  subsubtitle: {
    fontSize: 10,
    fontWeight: 'bold',
  },

});
