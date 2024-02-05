import { useState } from "react";
import uuid from "react-native-uuid";
import {
  View,
  FlatList,
  Pressable,
  Item,
  TextInput,
  Text,
  StyleSheet,
  Modal,
  Alert,
} from "react-native";

const data = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "Fourth Item",
  },
  {
    id: "5",
    title: "Fifth Item",
  },
];

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState({
    id: null,
    title: "",
    description: "",
  });
  const [modalATVisible, setModalATVisible] = useState(false);
  const [modalDTVisible, setModalDTVisible] = useState(false);
  const [idSelected, setIdSelected] = useState(null);

  const addTask = () => {
    const id = uuid.v4();
    setNewTask({ ...newTask, id: id });
    setTaskList([...taskList, newTask]);
    setNewTask({
      id: null,
      title: "",
      description: "",
    });
    setModalATVisible(false);
  };

  const deleteTask = () => {
    setTaskList(taskList.filter((task) => task.id != idSelected));
    setIdSelected(null);
    setModalDTVisible(false);
  };

  const onHandleTitle = (t) => {
    setNewTask({ ...newTask, title: t });
  };

  const onHandleDescription = (d) => {
    setNewTask({ ...newTask, description: d });
  };

  onSearchTask = (task) => {};

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={modalATVisible}
        onRequestClose={() => {
          setModalATVisible(!modalATVisible);
        }}
      >
        <View style={styles.modalPanel}>
          <Text style={styles.modalTitle}>ADD TASK</Text>
          <TextInput
            style={styles.modalTextInput}
            placeholder="Title"
            type="text"
            value={newTask.title}
            onChangeText={onHandleTitle}
          />
          <TextInput
            style={styles.modalTextInput}
            placeholder="Description"
            type="text"
            value={newTask.description}
            onChangeText={onHandleDescription}
          />
          <View style={styles.modalButtonGroup}>
            <Pressable
              style={styles.modalButton}
              backgroundColor={"#A93C46"}
              onPress={() => {
                setModalATVisible(false);
                setNewTask({
                  id: null,
                  title: "",
                  description: "",
                });
              }}
            >
              <Text style={styles.modalButtonText}>CANCEL</Text>
            </Pressable>
            <Pressable
              style={styles.modalButton}
              backgroundColor={"#2E64E1"}
              onPress={addTask}
            >
              <Text style={styles.modalButtonText}>ADD</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        visible={modalDTVisible}
        onRequestClose={() => {
          setModalDTVisible(!modalDTVisible);
        }}
      >
        <View style={styles.modalPanel}>
          <Text style={styles.modalTitle} fontSize={16} width={300}>
            Are you sure to delete this task?
          </Text>
          <View style={styles.modalButtonGroup}>
            <Pressable
              style={styles.modalButton}
              onPress={() => setModalDTVisible(false)}
              backgroundColor={"#515151"}
            >
              <Text style={styles.modalButtonText}>CANCEL</Text>
            </Pressable>
            <Pressable
              style={styles.modalButton}
              backgroundColor={"#A93C46"}
              onPress={deleteTask}
            >
              <Text style={styles.modalButtonText}>CONFIRM</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.searchPanel}>
        <TextInput
          style={styles.searchTextInput}
          placeholder="Search task..."
          type="text"
        />
        <Pressable
          style={styles.searchButton}
          onPress={() => {
            setModalATVisible(true);
          }}
        >
          <Text style={styles.searchButtonText}>+</Text>
        </Pressable>
      </View>
      <FlatList
        style={styles.listFlatList}
        data={taskList}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text style={styles.listText}>{item.title}</Text>
              <Text style={styles.listText}>{item.description}</Text>
            </View>
            <Pressable
              style={styles.listButton}
              onPress={() => {
                setModalDTVisible(true);
                setIdSelected(item.id);
              }}
            >
              <Text style={styles.listButtonText}>-</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
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
  listFlatList: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  listItem: {
    height: 70,
    backgroundColor: "#CECECF",
    marginBottom: 10,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  listText: {
    fontSize: 18,
    color: "#515151",
  },
  listButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#A93C46",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  listButtonText: {
    fontSize: 25,
    marginTop: -2,
    color: "white",
  },
  modalPanel: {
    backgroundColor: "darkgrey",
    margin: 10,
    marginTop: 60,
    paddingBottom: 30,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  modalTitle: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  modalTextInput: {
    width: "90%",
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  modalButtonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginTop: 30,
    width: "90%",
  },
  modalButton: {
    width: 165,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  modalButtonText: {
    fontSize: 20,
    color: "white",
  },
});

export default App;
