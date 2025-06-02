/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import TodoScreen from './app/screen/todo/todo.container';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TodoScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
