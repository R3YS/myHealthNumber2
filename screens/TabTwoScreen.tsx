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

const handleSubmit = event => {
  event.preventDefault();
  alert("You have submitted your workout!")
}

export default function TabTwoScreen() {
  const [workout1, setWorkout1] = React.useState("");
  const [sets1, setSets1] = React.useState("");
  const [reps1, setReps1] = React.useState("");

  const [workout2, setWorkout2] = React.useState("");
  const [sets2, setSets2] = React.useState("");
  const [reps2, setReps2] = React.useState("");

  const [workout3, setWorkout3] = React.useState("");
  const [sets3, setSets3] = React.useState("");
  const [reps3, setReps3] = React.useState("");

  const [exercise1, setExercise1] = React.useState("");
  const [duration1, setDuration1] = React.useState("");
  const [distance1, setDistance1] = React.useState("");

  const [exercise2, setExercise2] = React.useState("");
  const [duration2, setDuration2] = React.useState("");
  const [distance2, setDistance2] = React.useState("");


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
              <Text
                style={styles.activityTitle}>Activity</Text>
              <Text style={styles.weightliftingLabel}>Weightlifting:</Text>
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
                </View>
                <Button
                        style={styles.addWorkoutButton}
                        title="Add Workout"
                        onPress={() => {global.workout1 = workout1; global.sets1 = sets1; global.reps1 = reps1}}/>
                </View>


                <View style={styles.rectWeight}>
                <View >
                  <View style={styles.workout2Row}>
                      <Text style={styles.workout2}>Workout:</Text>
                      <TextInput
                          placeholder="Workout"
                          style={styles.enterWorkout}
                          onChangeText={setWorkout2}
                          value = {workout2}
                      ></TextInput>
                  </View>
                  <View style={styles.sets2Row}>
                      <Text style={styles.sets2}>Sets:</Text>
                      <TextInput
                          placeholder="# of Sets"
                          keyboardType="numeric"
                          style={styles.enterSets}
                          onChangeText={setSets2}
                          value = {sets2}
                      ></TextInput>
                  </View>
                  <View style={styles.repsLabelRow}>
                      <Text style={styles.repsLabel}>Reps:</Text>
                      <TextInput
                          placeholder="# of Reps"
                          keyboardType="numeric"
                          style={styles.enterReps}
                          onChangeText={setReps2}
                          value = {reps2}
                      ></TextInput>
                  </View>
                </View>
                <Button
                        title="Add Workout"
                        onPress={() => {global.workout2 = workout2; global.sets2 = sets2; global.reps2 = reps2}}/>
                </View>

                <View style={styles.rectWeight}>
                <View >
                  <View style={styles.workout2Row}>
                      <Text style={styles.workout2}>Workout:</Text>
                      <TextInput
                          placeholder="Workout"
                          style={styles.enterWorkout}
                          onChangeText={setWorkout3}
                          value = {workout3}
                      ></TextInput>
                  </View>
                  <View style={styles.sets2Row}>
                      <Text style={styles.sets2}>Sets:</Text>
                      <TextInput
                          placeholder="# of Sets"
                          keyboardType="numeric"
                          style={styles.enterSets}
                          onChangeText={setSets3}
                          value = {sets3}
                      ></TextInput>
                  </View>
                  <View style={styles.repsLabelRow}>
                      <Text style={styles.repsLabel}>Reps:</Text>
                      <TextInput
                          placeholder="# of Reps"
                          keyboardType="numeric"
                          style={styles.enterReps}
                          onChangeText={setReps3}
                          value = {reps3}
                      ></TextInput>
                  </View>
                  <Button
                        title="Add Workout"
                        onPress={() => {global.workout3 = workout3; global.sets3 = sets3; global.reps3 = reps3}}/>
                </View>
                </View>

              </View>


              <View style={styles.cardioSection}>

                <View style={styles.rectCardio}>
                  <View style={styles.exerciseRow}>
                    <Text style={styles.exercise}>Exercise:</Text>
                    <TextInput
                      placeholder="Exercise"
                      style={styles.enterExercise}
                      onChangeText={setExercise1}
                      value = {exercise1}
                    ></TextInput>
                  </View>
                  <View style={styles.durationRow}>
                    <Text style={styles.duration}>Duration:</Text>
                    <TextInput
                      placeholder="e.g. 30 min"
                      style={styles.enterDuration}
                      onChangeText={setDuration1}
                      value = {duration1}
                    ></TextInput>
                  </View>
                  <View style={styles.distanceRow}>
                    <Text style={styles.distance}>Distance:</Text>
                    <TextInput
                      placeholder="e.g. 10km/mi"
                      style={styles.enterDistance}
                      onChangeText={setDistance1}
                      value = {distance1}
                    ></TextInput>
                  </View>
                  <Button
                        title="Add Exercise"
                        onPress={() => {global.exercise1 = exercise1; global.duration1 = duration1; global.distance1 = distance1}}/>
                </View>


                <View style={styles.rectCardio}>
                  <View style={styles.exerciseRow}>
                    <Text style={styles.exercise}>Exercise:</Text>
                    <TextInput
                      placeholder="Exercise"
                      style={styles.enterExercise}
                      onChangeText={setExercise2}
                      value = {exercise2}
                    ></TextInput>
                  </View>
                  <View style={styles.durationRow}>
                    <Text style={styles.duration}>Duration:</Text>
                    <TextInput
                      placeholder="e.g. 30 min"
                      style={styles.enterDuration}
                      onChangeText={setDuration2}
                      value = {duration2}
                    ></TextInput>
                  </View>
                  <View style={styles.distanceRow}>
                    <Text style={styles.distance}>Distance:</Text>
                    <TextInput
                      placeholder="e.g. 10km/mi"
                      style={styles.enterDistance}
                      onChangeText={setDistance2}
                      value = {distance2}
                    ></TextInput>
                  </View>
                  <Button
                        title="Add Exercise"
                        onPress={() => {global.exercise2 = exercise2; global.duration2 = duration2; global.distance2 = distance2}}/>
                </View>
              </View>

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
    height: 1250
  },
  background: {
    top: 0,
    left: 0,
    width: 1874,
    height: 2229,
    position: "absolute"
  },
  background_imageStyle: {
    opacity: 0.6
  },
  activityTitle: {
    top: 579,
    position: "absolute",
    fontFamily: "roboto-700",
    fontWeight: "bold",
    color: "#121212",
    width: "10%",
    height: 60,
    fontSize: 40,
    left: 839,
    textAlign: "center"
  },
  stepsSection: {
    height: 50,
    width: 252,
    marginTop: 637,
    marginLeft: 792
  },
  rectSteps: {
    width: "110%",
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
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    width: 84,
    height: 19,
    marginTop: 6
  },
  enterSteps: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 16,
    width: 98,
    marginLeft: 30,
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
    top: 687,
    width: 254,
    height: 102,
    position: "absolute",
    left: 790
  },
  buttonSection: {
    top: 110,
    width: 254,
    height: 102,
    position: "absolute",
    left: 0
  },
  rectWeight: {
    width: "110%",
    height: 110,
    backgroundColor: "rgba(173,229,249,1)",
    borderWidth: 3,
    borderColor: "rgba(21,42,94,1)",
    borderRadius: 14,
    marginTop: 50,
  },
  workout2: {
      fontFamily: "roboto-regular",
      color: "#121212",
      width: 56,
      height: 17
    },
    enterWorkout: {
      fontFamily: "roboto-regular",
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
      fontFamily: "roboto-regular",
      color: "#121212",
      width: 31,
      height: 17
    },
    enterSets: {
      fontFamily: "roboto-regular",
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
      fontFamily: "roboto-regular",
      color: "#121212",
      width: 35,
      height: 17
    },
    enterReps: {
      fontFamily: "roboto-regular",
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
      height: 45,
      backgroundColor: "rgba(255,255,190,1)",
      borderWidth: 3.5,
      borderColor: "rgba(225,255,20,1)",
      borderRadius: 16,
      marginTop: 25,
      left: 0
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
    addExerciseButton: {
      width: 245,
      height: 35,
      backgroundColor: "rgba(255,255,190,1)",
      borderWidth: 3.5,
      borderColor: "rgba(225,255,20,1)",
      borderRadius: 16,
      marginTop: 25,
      left: 0
    },
    addExerciseTitle: {
      fontFamily: "roboto-bold",
      color: "#000000",
      fontSize: 15,
      width: 95,
      height: 14,
      textAlign: "center",
      marginTop: 8,
      marginLeft: 76
    },
  cardio2: {
    top: 1239,
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
    top: 1235
  },
  cardioSection: {
    top: 1219,
    height: 102,
    position: "absolute",
    left: 790,
    width: 254
  },
  rectCardio: {
    width: "110%",
    height: 110,
    backgroundColor: "rgba(255,223,224,1)",
    borderWidth: 3,
    borderColor: "rgba(135,26,26,1)",
    borderRadius: 14,
    marginTop: 47
  },
  exercise: {
      fontFamily: "roboto-regular",
      color: "#121212",
      width: 60,
      height: 16
    },
    enterExercise: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: 16,
      width: 80,
      marginLeft: 46
    },
    exerciseRow: {
      height: 16,
      flexDirection: "row",
      marginTop: 18,
      marginLeft: 21,
      marginRight: 47
    },
    duration: {
      fontFamily: "roboto-regular",
      color: "#121212",
      width: 60,
      height: 16
    },
    enterDuration: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: 16,
      width: 80,
      marginLeft: 46
    },
    durationRow: {
      height: 16,
      flexDirection: "row",
      marginTop: 9,
      marginLeft: 21,
      marginRight: 47
    },
    distance: {
      fontFamily: "roboto-regular",
      color: "#121212",
      width: 60,
      height: 16
    },
    enterDistance: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: 16,
      width: 100,
      marginLeft: 46
    },
    distanceRow: {
      height: 16,
      flexDirection: "row",
      marginTop: 9,
      marginLeft: 21,
      marginRight: 27
    },
  backgroundStack: {
    width: 1874,
    height: 2229,
    marginTop: -529,
    marginLeft: -729
  },
  stackFiller: {
    flex: 1
  },
  scrollAreaStack: {
    height: 740
  }
});
