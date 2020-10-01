import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import QuizIndex from "./screens/QuizList";
import Quiz from "./screens/Quiz";
import Result from './screens/Result';
import Question from './screens/Question';
import Difficulties from './screens/Difficulties';

const MainStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: "Викторина",
      headerTitleStyle: {
        fontSize: 27,
        fontWeight: "bold",
      }
    }
  },
  Difficulties: {
    screen: Difficulties,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "#fff",
      headerTitle: "Уровни сложности",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color"),
      },
    }),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color"),
      },
    }),
  },
  Result: {
    screen: Result,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "#fff",
      headerLeft: null,
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color"),
      },
    }),
  },
  Question: {
    screen: Question,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color"),
      },
    }),
  }
});

export default createAppContainer(MainStack);
