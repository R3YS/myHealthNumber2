import * as React from 'react';
import { StyleSheet } from 'react-native';
import './global.tsx';
import EditScreenInfo from '../components/EditScreenInfo';
import { View,
ScrollView,
Image,
ImageBackground,
Text,
TextInput,
TouchableOpacity,
Button } from 'react-native';

import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import WorkoutComponent from '../components/WorkoutComponent1';
import CardioComponent from '../components/CardioComponent';

const handleSubmit = event => {
  event.preventDefault();
  alert("You have submitted your workouts!")
}

export default function TabTwoScreen() {
  const [workout1, setWorkout1] = React.useState("");
  const [sets1, setSets1] = React.useState("");
  const [reps1, setReps1] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.scrollAreaStack}>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.backgroundStack}>
              <ImageBackground
                source={require("../assets/images/adi-goldstein-7BpeiA0bhxs-unsplash.jpg")}
                resizeMode="cover"
                style={styles.background}
                imageStyle={styles.background_imageStyle}
              >
                <View style={styles.stepsSection}>
                  <View style={styles.rectSteps}>
                    <View style={styles.stepsiconRow}>
                      <MaterialIconsIcon
                        name="directions-walk"
                        style={styles.stepsicon}
                      ></MaterialIconsIcon>
                      <Text style={styles.stepCount}>Step Count:</Text>
                      <TextInput
                        placeholder="e.g. 10,000"
                        keyboardType="numeric"
                        style={styles.enterSteps}
                      ></TextInput>
                    </View>
                  </View>
                </View>
              </ImageBackground>
              <TextInput
                placeholder="Activity"
                placeholderTextColor="rgba(0,0,0,1)"
                style={styles.activityTitle}
              ></TextInput>
              <Text style={styles.weightliftingLabel}>Weightlifting: </Text>
              <MaterialCommunityIconsIcon
                name="weight"
                style={styles.iconWeight}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.cardio2}>Cardio:</Text>
              <MaterialCommunityIconsIcon
                name="bike"
                style={styles.cardioicon}
              ></MaterialCommunityIconsIcon>

              <View style={styles.weightliftingSection}>
                <View style={styles.rectWeight}>
                <View >
                  <View style={styles.workout2Row}>
                      <Text style={styles.workout2}>Workout:</Text>
                      <TextInput
                          placeholder="Workout"
                          style={styles.enterWorkout}
                         onChangeText={setWorkout1}
                          value = {workout1}
                      ></TextInput>
                  </View>
                  <View style={styles.sets2Row}>
                      <Text style={styles.sets2}>Sets:</Text>
                      <TextInput
                          placeholder="# of Sets"
                          keyboardType="numeric"
                          style={styles.enterSets}
                          onChangeText={setSets1}
                          value = {sets1}
                      ></TextInput>
                  </View>
                  <View style={styles.repsLabelRow}>
                      <Text style={styles.repsLabel}>Reps:</Text>
                      <TextInput
                          placeholder="# of Reps"
                          keyboardType="numeric"
                          style={styles.enterReps}
                          onChangeText={setReps1}
                          value = {reps1}
                      ></TextInput>
                  </View>
                  <TouchableOpacity
                      style={styles.addWorkoutButton}
                    //  onPress={() => {global.workout1 = workout1}}
                    >
                    <Text style={styles.addWorkoutButton}>Add Workout</Text>

                      <Text style={styles.addWorkoutTitle}>Add Workout</Text>
                  </TouchableOpacity>
                </View>

                </View>
              </View>

              <View style={styles.cardioSection}>
                <View style={styles.rectCardio}>
                  <CardioComponent/>
                  <CardioComponent/>
                  <CardioComponent/>
                  <CardioComponent/>
                  <CardioComponent/>
                </View>
              </View>

              <TouchableOpacity
                  style={styles.addWorkoutButton}
                  onPress={() => {global.workout1 = workout1; global.sets1 = sets1; global.reps1 = reps1}}
              >
                  <Text style={styles.addWorkoutTitle}>Add Workout</Text>
              </TouchableOpacity>

            </View>
          </ScrollView>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)",
    top: 0,
    left: 0,
    right: 0,
    height: 740
  },
  scrollArea_contentContainerStyle: {
    height: 2000
  },
  background: {
    top: 0,
    left: 0,
    width: 1874,
    height: 2229,
    position: "absolute"
  },
  rectWeight: {
    width: 257,
    height: 110,
    backgroundColor: "rgba(173,229,249,1)",
    borderWidth: 3,
    borderColor: "rgba(21,42,94,1)",
    borderRadius: 14,
    marginTop: 50
  },
  workout2: {
      fontFamily: "Roboto",
      color: "#121212",
      width: 56,
      height: 17
    },
    enterWorkout: {
      fontFamily: "Roboto",
      color: "#121212",
      height: 16,
      width: 80,
      marginLeft: 50
    },
    workout2Row: {
      height: 17,
      flexDirection: "row",
      marginTop: 18,
      marginLeft: 21,
      marginRight: 47
    },
    sets2: {
      fontFamily: "Roboto",
      color: "#121212",
      width: 31,
      height: 17
    },
    enterSets: {
      fontFamily: "Roboto",
      color: "#121212",
      height: 16,
      width: 80,
      marginLeft: 75
    },
    sets2Row: {
      height: 17,
      flexDirection: "row",
      marginTop: 8,
      marginLeft: 21,
      marginRight: 47
    },
    repsLabel: {
      fontFamily: "Roboto",
      color: "#121212",
      width: 35,
      height: 17
    },
    enterReps: {
      fontFamily: "Roboto",
      color: "#121212",
      height: 16,
      width: 80,
      marginLeft: 71
    },
    repsLabelRow: {
      height: 17,
      flexDirection: "row",
      marginTop: 8,
      marginLeft: 21,
      marginRight: 47
    },
    addWorkoutButton: {
      width: 245,
      height: 35,
      backgroundColor: "rgba(255,255,190,1)",
      borderWidth: 3.5,
      borderColor: "rgba(225,255,20,1)",
      borderRadius: 16,
      marginTop: 25,
    },
    addWorkoutTitle: {
      fontFamily: "roboto-bold",
      color: "#000000",
      fontSize: 15,
      width: 95,
      height: 14,
      textAlign: "center",
      marginTop: 8,
      marginLeft: 76
    },
  background_imageStyle: {
    opacity: 0.6
  },
  activityTitle: {
    top: 579,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    width: 140,
    height: 40,
    fontSize: 40,
    left: 839,
    textAlign: "center"
  },
  stepsSection: {
    height: 50,
    width: 254,
    marginTop: 637,
    marginLeft: 782
  },
  rectSteps: {
    width: 267,
    height: 50,
    backgroundColor: "rgba(174,249,173,1)",
    borderWidth: 3,
    borderColor: "rgba(22,94,21,1)",
    borderRadius: 14,
    flexDirection: "row"
  },
  stepsicon: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 30,
    width: 30
  },
  stepCount: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 16,
    width: 84,
    height: 19,
    marginTop: 6
  },
  enterSteps: {
    fontFamily: "Roboto",
    color: "#121212",
    height: 16,
    width: 98,
    marginLeft: 15,
    marginTop: 7
  },
  stepsiconRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 9,
    marginTop: 10
  },
  weightliftingLabel: {
    top: 707,
    left: 820,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    width: 200,
    height: 27
  },
  iconWeight: {
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    left: 790,
    top: 705
  },
  weightliftingSection: {
    top: 737,
    width: 254,
    height: 102,
    position: "absolute",
    left: 795
  },
  rectWeight: {
    width: 257,
    height: 960,
    backgroundColor: "rgba(173,229,249,1)",
    borderWidth: 3,
    borderColor: "rgba(21,42,94,1)",
    borderRadius: 14
  },
  cardio2: {
    top: 1769,
    left: 820,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    width: 77,
    height: 25
  },
  cardioicon: {
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    width: 30,
    height: 33,
    left: 785,
    top: 1765
  },
  cardioSection: {
    top: 1799,
    height: 102,
    position: "absolute",
    left: 795,
    width: 254
  },
  rectCardio: {
    width: 257,
    height: 447,
    backgroundColor: "rgba(255,223,224,1)",
    borderWidth: 3,
    borderColor: "rgba(135,26,26,1)",
    borderRadius: 14
  },
  addWorkoutButton: {
    width: 245,
    height: 35,
    backgroundColor: "rgba(160,255,195,1)",
    borderWidth: 3.5,
    borderColor: "rgba(22,94,21,1)",
    borderRadius: 16,
    marginTop: 2265,
    left: 803
  },
  addWorkoutTitle: {
    fontFamily: "roboto-bold",
    color: "#000000",
    fontSize: 15,
    width: 95,
    height: 14,
    textAlign: "center",
    marginTop: 8,
    marginLeft: 76
  },
  backgroundStack: {
    width: 1874,
    height: 2229,
    marginTop: -529,
    marginLeft: -729
  },
  bottombar: {
    left: 0,
    height: 70,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    bottom: 0,
    right: 0
  },
  stackFiller: {
    flex: 1
  },
  group: {
    left: 0,
    height: 40,
    position: "absolute",
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: 15
  },
  dieticon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  bikeicon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  summaryicon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  settingicon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  summarybutton: {
    left: 191,
    width: 85,
    height: 70,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    bottom: 0
  },
  settingbutton: {
    left: 276,
    width: 84,
    height: 70,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    bottom: 0
  },
  dietbutton: {
    left: 0,
    width: 96,
    height: 70,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    bottom: 0
  },
  bikebutton: {
    left: 96,
    width: 95,
    height: 70,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    bottom: 0
  },
  groupStack: {
    height: 70
  },
  scrollAreaStack: {
    height: 740
  }
});
