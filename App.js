import { useState } from "react";
import uuid from "react-native-uuid";
import { View, Pressable, TextInput, Text, StyleSheet } from "react-native";
import TaskList from "./components/TaskList";
import ModalAddTask from "./components/ModalAddTask";
import ModalDeleteTask from "./components/ModalDeleteTask";

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [idSelected, setIdSelected] = useState(null);
  const [taskTitle, setTaskTitle] = useState(null);
  const [taskDescription, setTaskDescription] = useState(null);
  const [modalATVisible, setModalATVisible] = useState(false);
  const [modalDTVisible, setModalDTVisible] = useState(false);
  const [taskCompleted, setTaskCompleted] = useState(false);

  const addTask = () => {
    const newTask = {
      id: uuid.v4(),
      createAt: new Date().toLocaleString(),
      updateAt: new Date().toLocaleString(),
      completed: false,
      title: taskTitle,
      description: taskDescription,
    };
    console.log(newTask);
    setTaskList([...taskList, newTask]);
    setTaskTitle(null);
    setTaskDescription(null);
    setModalATVisible(false);
  };

  const deleteTask = () => {
    setTaskList(taskList.filter((task) => task.id != idSelected));
    setIdSelected(null);
    setModalDTVisible(false);
  };

  const updateTaskCompleted = (id) => {
    console.log(id);
    setTaskList(
      taskList.map((task) => {
        if (task.id === id)
          return { ...task, ...{ completed: !task.completed } };
      })
    );
    console.log(taskList);
    setTaskCompleted(!taskCompleted);
  };

  const onHandleTitle = (t) => {
    setTaskTitle(t);
  };

  const onHandleDescription = (d) => {
    setTaskDescription(d);
  };

  const onHandleModalAdd = (value) => {
    setModalATVisible(value);
    setTaskTitle(null);
    setTaskDescription(null);
    console.log(modalATVisible);
  };

  const onHandleModalDelete = (value) => {
    setModalDTVisible(value);
  };

  onSearchTask = (task) => {};

  return (
    <View style={styles.container}>
      <View style={styles.searchPanel}>
        <TextInput
          style={styles.searchTextInput}
          placeholder="Search task..."
          type="text"
        />
        <Pressable
          style={styles.searchButton}
          onPress={() => {
            onHandleModalAdd(true);
          }}
        >
          <Text style={styles.searchButtonText}>+</Text>
        </Pressable>
      </View>
      <TaskList
        taskList={taskList}
        onHandleModalDelete={onHandleModalDelete}
        updateTaskCompleted={updateTaskCompleted}
      />
      <ModalAddTask
        modalATVisible={modalATVisible}
        onHandleTitle={onHandleTitle}
        onHandleDescription={onHandleDescription}
        taskTitle={taskTitle}
        taskDescription={taskDescription}
        onHandleModalAdd={onHandleModalAdd}
        addTask={addTask}
      />
      <ModalDeleteTask
        modalDTVisible={modalDTVisible}
        deleteTask={deleteTask}
        onHandleModalDelete={onHandleModalDelete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "darkgrey",
  },
  searchPanel: {
    height: 70,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginTop: 60,
    padding: 10,
    borderRadius: 10,
  },
  searchTextInput: {
    width: "80%",
    paddingLeft: 10,
  },
  searchButton: {
    width: 50,
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2E64E1",
  },
  searchButtonText: {
    fontSize: 30,
    color: "white",
    marginTop: -2,
  },
});

export default App;
