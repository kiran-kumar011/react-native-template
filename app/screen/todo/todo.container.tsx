import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import TodoView from './todo';

const TodoScreen = () => {
  return (
    <View style={styles.container}>
      <TodoView />
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          width: 65,
          height: 65,
          borderRadius: 65,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: '0%',
          right: '0%',
          margin: 10,
        }}>
        <Text style={{ color: '#fff', fontSize: 34, fontWeight: '900' }}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});

export default TodoScreen;
