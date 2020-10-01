import React, {useState, useEffect} from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView, ScrollView } from "react-native";

import {Button, ButtonContainer} from "../components/Button";
import {Alert} from "../components/Alert";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "600"
  },
  safeArea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  },
  counterContainer: {
    position: "absolute",
    right: "6%",
    top: "6%",
  }
});

const Quiz = ({navigation}) => {
  const [correctCount, setCorrectCount] = useState(0);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [finalAnswers, setFinalAnswers] = useState([]);
  const [displayResult, setDisplayResult] = useState(false);

  const totalCount = navigation.getParam("questions", []).length;
  const questions = navigation.getParam("questions", []);
  const question = questions[activeQuestionIndex];
  const color = navigation.getParam("color");

  useEffect(() => {
    if (displayResult) {
      navigation.navigate("Result", {
        finalAnswers,
        questions,
        color,
      })
    }
  }, [color, questions, navigation, finalAnswers, displayResult]);

  const nextQuestion = () => {
    const nextIndex = activeQuestionIndex + 1;

    if (nextIndex >= totalCount) {
      setDisplayResult(true);
      return;
    }

    setActiveQuestionIndex(activeQuestionIndex + 1);
    setAnswered(false);
  };

  const handleAnswer = (correct = false, questionNumber) => {
    setAnswered(true);
    setDisabled(true);
    setFinalAnswers(oldArray => [...oldArray, {
      questionNumber: questionNumber + 1,
      correct,
    }]);

    if (correct) {
      setCorrectCount(correctCount + 1);
      setAnswerCorrect(true);
    } else {
      setAnswerCorrect(false);
    }

    setTimeout(() => {
      nextQuestion();
      setDisabled(false);
    }, 500);
  };

  return (
    <ScrollView
      style={[
        styles.container,
        {backgroundColor: color}
      ]}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Text style={styles.text}>{question.question}</Text>

          <ButtonContainer>
            {question.answers.map(({id, text, correct}) => (
              <Button
                disabled={disabled}
                key={id}
                text={text}
                onPress={() => handleAnswer(correct, activeQuestionIndex)}
              />
            ))}
          </ButtonContainer>
        </View>
      </SafeAreaView>
      <View style={styles.counterContainer}>
        <Text style={styles.text}>
          {`${activeQuestionIndex + 1}/${totalCount}`}
        </Text>
      </View>
      <Alert
        correct={answerCorrect}
        visible={answered}
      />
    </ScrollView>
  );
};

export default Quiz;
