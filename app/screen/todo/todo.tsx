import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

const TodoView = ({
  todos,
  remove,
  markAsComplete,
  moveToPending,
  moveToComplete,
}) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity style={styles.button}>
          <Text>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Completed</Text>
        </TouchableOpacity>
      </View>
      {/* <FlatList
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.task}</Text>
            </View>
          );
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '50%',
    alignItems: 'center',
    padding: 10,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 2,
  },
});

export default TodoView;
