import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 20
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    marginTop: 20,
    justifyContent: "space-between"
  }
});

export const Button = ({ text, onPress = () => {}, disabled = false }) => (
  <TouchableOpacity onPress={onPress} style={styles.button} disabled={disabled}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export const ButtonContainer = ({ children }) => (
  <View style={styles.buttonContainer}>{children}</View>
);
