import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function DailyRoutineApp() {
  const [tasks, setTasks] = useState([
    { id: '1', name: 'Morning Exercise', completed: false },
    { id: '2', name: 'Jogging', completed: false },
    { id: '3', name: 'Study', completed: false },
    { id: '4', name: 'Gym', completed: false },
    { id: '5', name: 'Basketball', completed: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(item => 
      item.id === taskId ? { ...item, completed: !item.completed } : item
    ));
  };

  const completeAllTasks = () => {
    setTasks(tasks.map(item => ({ ...item, completed: true })));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(item => item.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Routine Checklist</Text>
      <TouchableOpacity style={styles.completeButton} onPress={completeAllTasks}>
        <Text style={styles.completeButtonText}>Complete Daily Tasks</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)} style={styles.checkbox}>
              {item.completed && <Text style={styles.checkboxText}>✔</Text>}
            </TouchableOpacity>
            <Text style={[styles.taskText, item.completed && styles.completed]}>
              {item.name}
            </Text>
            <TouchableOpacity onPress={() => removeTask(item.id)}>
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <View style={styles.completedTasksContainer}>
        <Text style={styles.completedTitle}>Completed Tasks</Text>
        <FlatList
          data={tasks.filter(item => item.completed)}
          renderItem={({ item }) => (
            <Text style={styles.completedTaskText}>{item.name}</Text>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellowgreen',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  completeButton: {
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 16,
    color: 'black',
  },
  taskText: {
    flex: 1,
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  removeText: {
    color: 'red',
    marginLeft: 10,
  },
  completedTasksContainer: {
    marginTop: 20,
  },
  completedTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  completedTaskText: {
    fontSize: 16,
    color: 'green',
  },
});
