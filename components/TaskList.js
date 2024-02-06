import {
    FlatList,
    StyleSheet,
  } from "react-native";
import CardTaskList from "./CardTaskList";

const TaskList = ({taskList, onHandleModalDelete, updateTaskCompleted}) => {
  return (
    <FlatList
      style={styles.listFlatList}
      data={taskList}
      renderItem={({ item }) => (
        <CardTaskList
          item={item}
          onHandleModalDelete={onHandleModalDelete}
          updateTaskCompleted={updateTaskCompleted}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
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
});

export default TaskList;