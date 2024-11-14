import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Modal, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function DailyRoutineApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const router = useRouter();

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { id: Date.now().toString(), name: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(item =>
      item.id === taskId ? { ...item, completed: !item.completed } : item
    ));
  };

  const handleCompleteTask = () => {
    if (selectedTask) {
      toggleTaskCompletion(selectedTask.id);
      setSelectedTask(null);
      setModalVisible(false);
      alert(`${selectedTask.name} marked as completed!`);
    }
  };

  const goToCompletedTasks = () => {
    router.push('/completed'); // Navigate to the completed tasks page (if you have one)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Routine To-Do App</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => {
              setSelectedTask(item);
              setModalVisible(true);
            }}>
              <Text style={[styles.name, item.completed && styles.completed]}>
                {item.name}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
              <Text style={styles.buttonText}>{item.completed ? 'Undo' : ''}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />

      {selectedTask && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
            setSelectedTask(null);
          }}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Mark as Completed: {selectedTask.name}</Text>
            <Button title="Confirm" onPress={handleCompleteTask} />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellowgreen',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 1,
  },
  name: {
    fontSize: 18,
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
  },
  link: {
    marginTop: 16,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  linkText: {
    color: '#fff',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
});
