import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  questionText: {
    color: "#fff",
    fontSize: 40,
    marginBottom: 40,
    textAlign: "center",
  },
  answerText: {
    color: "#fff",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    flexDirection: "column",
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    justifyContent: "space-around",
    alignItems: "center",
  }
});

export default ({ navigation }) => {
  const { question, answers} = navigation.getParam("question", []);
  const color = navigation.getParam("color");

  return (
    <ScrollView style={{backgroundColor: color}}>
      <View style={styles.container}>
        <Text style={styles.questionText}>{question}</Text>
        {answers.map((answer) => {
          return answer.correct && <Text style={styles.answerText}>{`Верный ответ: ${answer.text}`}</Text>;
        })}
      </View>
    </ScrollView>
  )
};
