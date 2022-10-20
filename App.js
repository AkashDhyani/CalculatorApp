import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ComputeScreen from './src/screens/ComputeScreen';
import ResultScreen from './src/screens/ResultScreen';
import { ResultProvider } from './src/context/ResultContext';
import ErrorScreen from './src/screens/ErrorScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
};

const StackNavigation = () => {
  return (
    <Stack.Navigator
        initialRouteName="HomeActivity"
        //screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="Compute"
          component={ComputeScreen}
          options={{headerShown: false}}/> 
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{headerShown: false}}/> 
        <Stack.Screen
          name="Error"
          component={ErrorScreen}
          options={{headerShown: false}}/> 
    </Stack.Navigator>
  )
}

export default () => {
  return <ResultProvider>
    <App/> 
  </ResultProvider>
};