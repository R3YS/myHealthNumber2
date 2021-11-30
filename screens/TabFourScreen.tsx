import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {   View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text } from 'react-native';
import { RootTabScreenProps } from '../types';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialSwitch9 from "../components/MaterialSwitch9";
import MaterialSwitch8 from "../components/MaterialSwitch8";
import MaterialSwitch7 from "../components/MaterialSwitch7";
import MaterialSwitch6 from "../components/MaterialSwitch6";
import MaterialSwitch1 from "../components/MaterialSwitch1";
import './global.js';

export default function TabFourScreen({ navigation }: RootTabScreenProps<'TabFour'>) {
  return (
    <View style={styles.container}>

    <View style={styles.scrollArea}>
      <ScrollView
        contentContainerStyle={styles.scrollArea_contentContainerStyle}
      >
        <View style={styles.imageStack}>
          <ImageBackground
            source={require("../assets/images/tech.jpg")}
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <View style={styles.rect6Filler}></View>
            <View >
              <View ></View>
              <View >
                <View >

                </View>
                <TouchableOpacity


                ></TouchableOpacity>
                <TouchableOpacity

                  style={styles.button2}
                ></TouchableOpacity>
                <TouchableOpacity

                  style={styles.button3}
                ></TouchableOpacity>
                <TouchableOpacity

                  style={styles.button4}
                ></TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.rect5}>
            <View style={styles.repUnitsRow}>
              <Text style={styles.repUnits}>
                Set Units:{"\n"}
                {"\t"}(default is 8 reps)
              </Text>
              <View style={styles.materialSwitch9Column}>
                <MaterialSwitch9
                  style={styles.materialSwitch9}
                ></MaterialSwitch9>
                <Text style={styles.changeTo12}>Change to 12</Text>
              </View>
            </View>
          </View>
          <View style={styles.rect4}>
            <View style={styles.foodUnitsRow}>
              <Text style={styles.foodUnits}>
                Food Units:{"\n"}
                {"\t"}(default is oz)
              </Text>
              <View style={styles.materialSwitch8Column}>
                <MaterialSwitch8
                  style={styles.materialSwitch8}
                ></MaterialSwitch8>
                <Text style={styles.changeToG}>Change to g</Text>
              </View>
            </View>
          </View>
          <View style={styles.rect3}>
            <View style={styles.timeUnitsRow}>
              <Text style={styles.timeUnits}>
                Time Units:{"\n"}
                {"\t"}(default is min)
              </Text>
              <View style={styles.materialSwitch7Column}>
                <MaterialSwitch7
                  style={styles.materialSwitch7}
                ></MaterialSwitch7>
                <Text style={styles.changeToHr}>Change to hr</Text>
              </View>
            </View>
          </View>
          <View style={styles.rect2}>
            <View style={styles.weightUnitsRow}>
              <Text style={styles.weightUnits}>
                Weight Units:{"\n"}
                {"\t"}(default is lbs)
              </Text>
              <View style={styles.materialSwitch6Column}>
                <MaterialSwitch6
                  style={styles.materialSwitch6}
                ></MaterialSwitch6>
                <Text style={styles.changeToKg}>Change to kg</Text>
              </View>
            </View>
          </View>
          <View style={styles.rect}>
            <View style={styles.distanceUnitsRow}>
              <Text style={styles.distanceUnits}>
                Distance Units:{"\n"}
                {"\t"}(default is mi)
              </Text>
              <View style={styles.materialSwitch1Column}>
                <MaterialSwitch1
                  style={styles.materialSwitch1}
                ></MaterialSwitch1>
                <Text style={styles.changeToKm}>Change to km</Text>
              </View>
            </View>
          </View>
          <Text style={styles.text}>Settings</Text>
        </View>
      </ScrollView>
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    backgroundColor: "rgba(230, 230, 230,1)",
    flex: 1
  },
  scrollArea_contentContainerStyle: {
    height: 700
  },
  image: {
    top: 0,
    left: 0,
    width: 1172,
    height: 1373,
    position: "absolute"
  },
  image_imageStyle: {
    opacity: 0.7
  },
  rect6Filler: {
    flex: 1
  },
  stackFiller: {
    flex: 1
  },
  rect5: {
    top: 620,
    width: "32.5%",
    height: 90,
    position: "absolute",
    backgroundColor: "rgba(74,144,226,0.7)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.7)",
    borderRadius: 15,
    left: 409
  },
  repUnits: {
    fontFamily: "Roboto",
    color: "#121212",
    width: 162,
    fontSize: 14,
    height: 39,
    textAlign: "left"
  },
  materialSwitch9: {
    width: 45,
    height: 23,
    marginLeft: 5
  },
  changeTo12: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 10,
    height: 12,
    width: 66,
    textAlign: "center",
    marginTop: 7
  },
  materialSwitch9Column: {
    width: 66,
    marginLeft: 100
  },
  repUnitsRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 26,
    marginRight: 5
  },
  rect4: {
    top: 520,
    width: "32.5%",
    height: 90,
    position: "absolute",
    backgroundColor: "rgba(74,144,226,0.7)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.7)",
    borderRadius: 15,
    left: 409
  },
  foodUnits: {
    fontFamily: "Roboto",
    color: "#121212",
    width: 150,
    fontSize: 14,
    height: 37,
    textAlign: "left"
  },
  materialSwitch8: {
    width: 45,
    height: 23,
    marginLeft: 5
  },
  changeToG: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 10,
    height: 12,
    width: 57,
    textAlign: "center",
    marginTop: 7
  },
  materialSwitch8Column: {
    width: 57,
    marginLeft: 115
  },
  foodUnitsRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 26,
    marginRight: 14
  },
  rect3: {
    top: 419,
    width: "32.5%",
    height: 90,
    position: "absolute",
    backgroundColor: "rgba(74,144,226,0.7)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.7)",
    borderRadius: 15,
    left: 409
  },
  timeUnits: {
    fontFamily: "Roboto",
    color: "#121212",
    width: 162,
    fontSize: 14,
    height: 39,
    textAlign: "left"
  },
  materialSwitch7: {
    width: 45,
    height: 23,
    marginLeft: 5
  },
  changeToHr: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 10,
    height: 12,
    width: 59,
    textAlign: "center",
    marginTop: 7
  },
  materialSwitch7Column: {
    width: 59,
    marginLeft: 105
  },
  timeUnitsRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 26,
    marginRight: 12
  },
  rect2: {
    top: 320,
    width: "32.5%",
    height: 90,
    position: "absolute",
    backgroundColor: "rgba(74,144,226,0.7)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.7)",
    borderRadius: 15,
    left: 409
  },
  weightUnits: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 14,
    height: 38,
    textAlign: "left",
    width: 140
  },
  materialSwitch6: {
    width: 45,
    height: 23,
    marginLeft: 5
  },
  changeToKg: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 10,
    height: 12,
    width: 61,
    textAlign: "center",
    marginTop: 7
  },
  materialSwitch6Column: {
    width: 61,
    marginLeft: 130
  },
  weightUnitsRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 26,
    marginRight: 10
  },
  rect: {
    top: 220,
    width: "32.5%",
    height: 90,
    position: "absolute",
    backgroundColor: "rgba(74,144,226,0.7)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.7)",
    borderRadius: 15,
    left: 409
  },
  distanceUnits: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 14,
    textAlign: "left",
    width: 151,
    height: 36
  },
  materialSwitch1: {
    width: 45,
    height: 23,
    marginLeft: 5
  },
  changeToKm: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 10,
    width: 66,
    height: 12,
    textAlign: "center",
    marginTop: 7
  },
  materialSwitch1Column: {
    width: 66,
    marginLeft: 120
  },
  distanceUnitsRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 26,
    marginRight: 5
  },
  text: {
    top: 145,
    position: "absolute",
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 40,
    left: 476,
    width: 222,
    height: 60,
    textAlign: "center"
  },
  imageStack: {
    width: 1172,
    height: 1373,
    marginTop: -95,
    marginLeft: -395
  }
});
