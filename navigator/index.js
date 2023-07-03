import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Result from "../screens/Result";
import Quiz from "../screens/Quiz";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="quiz" component={Quiz} />
      <Stack.Screen name="result" component={Result} />
    </Stack.Navigator>
  );
}

export default MyStack;
