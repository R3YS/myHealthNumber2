import React, { Component, useState } from "react";
import { StyleSheet, View, Switch } from "react-native";

function MaterialSwitch1(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={[styles.container, props.style]}>
      <Switch
        thumbColor={props.value ? "#3F51B5" : "#FFF"}
        trackColor={{ true: "rgba(63,81,181,0.6)", false: "#9E9E9E" }}
        style={styles.switch1}
        onValueChange = {toggleSwitch}
        value = {isEnabled}
      ></Switch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  switch1: {
    width: 45,
    height: 22
  }
});

export default MaterialSwitch1;
