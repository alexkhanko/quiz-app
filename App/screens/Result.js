import React from 'react';
import { ScrollView, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import {Button} from '../components/Button';

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  resultsContainer: {
    borderRadius: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
    margin: 20,
  },
  button: {
    width: "80%",
    height: 50,
  }
});

export default ({ navigation }) => {
  const finalAnswers = navigation.getParam("finalAnswers", []);
  const questions = navigation.getParam("questions", []);
  const color = navigation.getParam("color");

  const displayQuestion = (index) => {
    navigation.navigate("Question", {
      finalAnswers,
      question: questions[index],
      color,
    })
  };

  return (
    <ScrollView style={{backgroundColor: color}}>
      {finalAnswers.map(({ questionNumber, correct }, index) => {
        const icon = correct
          ? require("../assets/check.png")
          : require("../assets/close.png");

        return (
          <TouchableOpacity style={styles.resultsContainer} onPress={() => displayQuestion(index)}>
            <Text
              style={styles.text}
              key={questionNumber}
            >
              {`Вопрос №${questionNumber}`}
            </Text>
            <Image source={icon} style={styles.icon} resizeMode="contain" />
          </TouchableOpacity>
        )
      })}
      <Button text="Назад в меню" onPress={() => navigation.popToTop()} />
    </ScrollView>
  )
};
