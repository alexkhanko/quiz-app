import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

import {Button, ButtonContainer} from '../components/Button';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "600"
  },
});

export default ({ navigation }) => {
  const questions = navigation.getParam("questions", []);
  const color = navigation.getParam("color");
  const title = navigation.getParam("title");

  return (
    <ScrollView style={[
      styles.container,
      {backgroundColor: color}
    ]}>
      <Text style={styles.text}>Выберите уровень сложности</Text>
      <ButtonContainer>
        <Button
          text="Легкий"
          onPress={() =>
          navigation.navigate("Quiz", {
            questions: questions.easy,
            color,
            title,
          })
        }
        />
        <Button
          text="Средний"
          onPress={() =>
          navigation.navigate("Quiz", {
            questions: questions.medium,
            color,
            title,
          })
        }
        />
        <Button
          text="Тяжелый"
          onPress={() =>
          navigation.navigate("Quiz", {
            questions: questions.difficult,
            color,
            title,
          })
        }
        />
      </ButtonContainer>
    </ScrollView>
  )
}
