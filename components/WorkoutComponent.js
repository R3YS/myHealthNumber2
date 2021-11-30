import React, { Component } from "react";
import { StyleSheet } from 'react-native';

import EditScreenInfo from './EditScreenInfo';
import { View,
ScrollView,
Image,
ImageBackground,
Text,
TextInput,
TouchableOpacity,
Button } from 'react-native';

const WorkoutComponent = () =>{
    return (
    <View>  
        <View style={styles.workout2Row}>
            <Text style={styles.workout2}>Workout:</Text>
            <TextInput
                placeholder="Workout"
                style={styles.enterWorkout}
            ></TextInput>
        </View>
        <View style={styles.sets2Row}>
            <Text style={styles.sets2}>Sets:</Text>
            <TextInput
                placeholder="# of Sets"
                keyboardType="numeric"
                style={styles.enterSets}
            ></TextInput>
        </View>
        <View style={styles.repsLabelRow}>
            <Text style={styles.repsLabel}>Reps:</Text>
            <TextInput
                placeholder="# of Reps"
                keyboardType="numeric"
                style={styles.enterReps}
            ></TextInput>
        </View> 
    </View>              
    )
};

const styles = StyleSheet.create({
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
      }
});

export default WorkoutComponent;
