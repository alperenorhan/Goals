import { View, Text } from "react-native";
import React from "react";
import styles from "./GoalItem.styles";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}
