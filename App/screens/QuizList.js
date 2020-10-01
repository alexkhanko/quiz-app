import React from "react";
import { ScrollView, StatusBar } from "react-native";

import scienceQuestions from "../data/science";
import historyQuestions from '../data/history';
import geographyQuestions from '../data/geography';

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Наука"
      color="#84a98c"
      onPress={() =>
        navigation.navigate("Difficulties", {
          title: "Наука",
          questions: scienceQuestions,
          color: "#84a98c"
        })
      }
    />
    <RowItem
      name="География"
      color="#354f52"
      onPress={() =>
        navigation.navigate("Difficulties", {
          title: "География",
          questions: geographyQuestions,
          color: "#354f52"
        })
      }
    />
    <RowItem
      name="История"
      color="#354f52"
      onPress={() =>
        navigation.navigate("Difficulties", {
          title: "История",
          questions: historyQuestions,
          color: "#354f52"
        })
      }
    />
  </ScrollView>
);