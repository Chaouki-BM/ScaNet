import 'react-native-gesture-handler';
import { Dimensions, View, StyleSheet } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MachineLScreen from './screens/MachineLScreen';
import BrokenMachineScreen from './screens/BrokenMachineScreen';
import AdminLScreen from './screens/AdminLScreen';
import AddMachineScreen from './screens/AddMachineScreen';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
const Stack = createStackNavigator();
const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
              headerShown: true,
              //headerStyle: { backgroundColor: '#f66723'},


            }}
          >
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="Machines" component={MachineLScreen} />
            <Stack.Screen name="Broken Machine" component={BrokenMachineScreen} />
            <Stack.Screen name="Admin List" component={AdminLScreen} />
            {/* <Stack.Screen name="Add Machine" component={AddMachineScreen} /> */}
          </Stack.Navigator>
        </NavigationContainer>

      </View>
    </ApplicationProvider>

  )
};
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});

export default App