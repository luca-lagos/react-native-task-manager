import { FlatList, StyleSheet, View, Text } from "react-native";
import CardTaskList from "./CardTaskList";

const TaskList = ({
  taskList,
  onHandleModalDelete,
  updateTaskCompleted,
  onSelectId,
}) => {
  if (taskList != "") {
    return (
      <FlatList
        style={styles.listFlatList}
        data={taskList}
        renderItem={({ item }) => (
          <CardTaskList
            item={item}
            onHandleModalDelete={onHandleModalDelete}
            updateTaskCompleted={updateTaskCompleted}
            onSelectId={onSelectId}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    );
  } else {
    return (
      <View style={styles.notFoundView}>
        <Text style={styles.notFoundText}>Tasks not found :(</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  listFlatList: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  notFoundView: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  notFoundText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -50,
    color: "#515151"
  },
});

export default TaskList;
