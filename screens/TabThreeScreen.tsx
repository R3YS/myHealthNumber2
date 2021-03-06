import * as React from 'react';
import {useState} from 'react';
import { StyleSheet } from 'react-native';
import './global.tsx';
import EditScreenInfo from '../components/EditScreenInfo';
import {   View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput,
ScrollView, SafeAreaView, RefreshControl} from 'react-native';
  import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
  import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
  import EntypoIcon from "react-native-vector-icons/Entypo";
  import IoniconsIcon from "react-native-vector-icons/Ionicons";
  import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [breakfast, setBreakfast] = React.useState("");
  const [lunch, setLunch] = React.useState("");
  const [dinner, setDinner] = React.useState("");
  const [snack, setSnack] = React.useState("");
  const total = parseInt(global.breakfast) + parseInt(global.lunch) + parseInt(global.dinner) + parseInt(global.snack);
  const percentNormal = (total / 2000) * 100;
  const [refreshing, setRefreshing] = React.useState(false);

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
 const onRefresh = React.useCallback(() => {
   setRefreshing(true);
   wait(2000).then(() => setRefreshing(false));
 }, []);
  return (
    <View style={styles.container}>
    <View style={styles.scrollArea}>
    <ScrollView
      horizontal={false}
      contentContainerStyle={styles.scrollArea_contentContainerStyle}
      refreshControl = {<RefreshControl refreshing = {refreshing}
    onRefresh = {onRefresh}/>
  }
    >
      <ImageBackground
        source={require("../assets/images/background4.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.rect1Filler}></View>
        <View >
          <View style={styles.stackFiller}></View>
          <View style={styles.group1Stack}>
            <View style={styles.group1}>



            </View>

          </View>
        </View>
      </ImageBackground>
      <Text style={styles.text}>Diet</Text>
      <TextInput
        placeholder="Calorie Count"
        style={styles.textInput1}
        onChangeText = {setSnack} value = {snack} keyboardType ="numeric"

      ></TextInput>
      <TextInput
        placeholder="Calorie Count"
        style={styles.textInput2}
        onChangeText = {setDinner} value = {dinner} keyboardType ="numeric"
      ></TextInput>
      <TextInput
        placeholder="Calorie Count"
        style={styles.textInput3}
        onChangeText = {setLunch} value = {lunch} keyboardType ="numeric"
      ></TextInput>
      <TextInput
        placeholder="Calorie Count"
        style={styles.textInput4}
        onChangeText = {setBreakfast} value = {breakfast} keyboardType ="numeric"
      ></TextInput>
      <EntypoIcon name="check" style={styles.icon}></EntypoIcon>
      <EntypoIcon name="check" style={styles.icon2}></EntypoIcon>
      <EntypoIcon name="check" style={styles.icon3}></EntypoIcon>
      <TouchableOpacity style={styles.button}
      onPress ={() => {global.breakfast = breakfast; global.total = total;}} ></TouchableOpacity>
      <TouchableOpacity style={styles.button2}
      onPress ={() => {global.dinner = dinner; global.total = total;}}></TouchableOpacity>
      <TouchableOpacity style={styles.button3}
      onPress ={() => {global.lunch = lunch; global.total = total;}}></TouchableOpacity>
      <EntypoIcon name="check" style={styles.icon1}></EntypoIcon>
      <TouchableOpacity style={styles.button1}
      onPress ={() => {global.snack = snack; global.total = total;}}></TouchableOpacity>
      <Text style={styles.loremIpsum}>What did you eat today?</Text>
      <Text style={styles.loremIpsum1}>Total Calorie Intake: {total}
      </Text>
      <Text style={styles.loremIpsum2}>Percent Daily Normal: {percentNormal}%</Text>
      <Text style={styles.breakfast}>Breakfast:</Text>
      <Text style={styles.lunch}>Lunch:</Text>
      <Text style={styles.dinner}>Dinner:</Text>
      <Text style={styles.snacksOthers}>Snacks/Others:</Text>
      </ScrollView>
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    top: 0,
    left: 0,
    width: 1306,
    height: 1196,
    position: "absolute"
  },
  image_imageStyle: {
    opacity: 0.5
  },
  scrollArea_contentContainerStyle: {
    height: 700
  },
  rect1Filler: {
    flex: 1
  },
  scrollArea: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1},

  rect1: {
    height: 70,
    backgroundColor: "rgba(0,0,0,1)",
    marginBottom: 295,
    marginLeft: 633,
    marginRight: 313
  },
  stackFiller: {
    flex: 1
  },
  text: {
    top: 65,
    position: "absolute",
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#121212",
    textAlign: "center",
    fontSize: 40,
    height: '100%',
    width: '100%',
  },
  textInput1: {
    top: 490,
    position: "absolute",
    fontFamily: "Roboto",
    color: "#121212",
    textAlign: "center",
    fontSize: 16,
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 15,
    width: 235,
    height: 58,
    left: 70,
    backgroundColor: "rgba(248,231,28,0.5)"
  },
  textInput2: {
    top: 390,
    position: "absolute",
    fontFamily: "Roboto",
    color: "#121212",
    width: 235,
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "rgba(248,231,28,0.5)",
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 15,
    height: 58,
    left: 70
  },
  textInput3: {
    top: 300,
    left: 70,
    position: "absolute",
    fontFamily: "Roboto",
    color: "#121212",
    textAlign: "center",
    fontSize: 16,
    width: 235,
    backgroundColor: "rgba(248,231,28,0.5)",
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 15,
    height: 58
  },
  textInput4: {
    top: 200,
    left: 70,
    position: "absolute",
    fontFamily: "Roboto",
    color: "#121212",
    width: 235,
    textAlign: "center",
    fontSize: 16,
    borderWidth: 3,
    borderColor: "#000000",
    borderStyle: "solid",
    borderRadius: 15,
    height: 58,
    backgroundColor: "rgba(248,231,28,0.5)"
  },
  icon: {
    top: 200,
    position: "absolute",
    color: "rgba(66,133,48,1)",
    fontSize: 40,
    right: 60
  },
  icon2: {
    top: 300,
    position: "absolute",
    color: "rgba(66,133,48,1)",
    fontSize: 40,
    right: 60
  },
  icon3: {
    top: 400,
    position: "absolute",
    color: "rgba(66,133,48,1)",
    fontSize: 40,
    right: 60
  },
  button: {
    top: 200,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    right: 60,
    width: 50
  },
  button2: {
    top: 300,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    width: 50,
    right: 60
  },
  button3: {
    top: 400,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    right: 60,
    width: 50
  },
  icon1: {
    position: "absolute",
    color: "rgba(66,133,48,1)",
    fontSize: 40,
    right: 60,
    top: 500
  },
  button1: {
    top: 500,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    height: 50,
    width: 50,
    right: 60
  },
  loremIpsum: {
    top: 130,
    position: "absolute",
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 20,
    left: 100,
    width: 225,
    height: 24,
    textAlign: "center"
  },
  loremIpsum1: {
    left: 40,
    position: "absolute",
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 20,
    height: 60,
    width: 264,
    top: 570
  },
  loremIpsum2: {
    left: 40,
    position: "absolute",
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 20,
    height: 29,
    width: 262,
    top: 600
  },
  breakfast: {
    left: 70,
    position: "absolute",
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 16,
    width: 82,
    height: 20,
    top: 175
  },
  lunch: {
    top: 275,
    left: 70,
    position: "absolute",
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 16,
    width: 58,
    height: 20
  },
  dinner: {
    top: 368,
    left: 70,
    position: "absolute",
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 16,
    width: 59,
    height: 20
  },
  snacksOthers: {
    top: 465,
    left: 70,
    position: "absolute",
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 16,
    width: 118,
    height: 20
  },
  imageStack: {
    width: 1306,
    height: 1196,
    marginTop: -161,
    marginLeft: -633
  },
  block1: {
    width: "18%",
    height: 130,
    backgroundColor: "rgba(239,227,77,0.5)",
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 664
  },

});
