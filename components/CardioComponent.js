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

const CardioComponent = () =>{
    return (
    <View>
        <View style={styles.exerciseRow}>
            <Text style={styles.exercise}>Exercise:</Text>
            <TextInput
                placeholder="Exercise"
                style={styles.enterExercise}
            ></TextInput>
        </View>
        <View style={styles.durationRow}>
            <Text style={styles.duration}>Duration:</Text>
            <TextInput
                placeholder="e.g. 30 min"
                style={styles.enterDuration}
            ></TextInput>
        </View>
        <View style={styles.distanceRow}>
            <Text style={styles.distance}>Distance:</Text>
            <TextInput
                placeholder="e.g. 10km/mi"
                style={styles.enterDistance}
            ></TextInput>
        </View>
    </View>              
    )
};

const styles = StyleSheet.create({
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
      }
});

export default CardioComponent;
