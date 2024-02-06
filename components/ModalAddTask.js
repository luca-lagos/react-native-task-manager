import {
  View,
  Pressable,
  TextInput,
  Text,
  StyleSheet,
  Modal,
} from "react-native";

const ModalAddTask = ({
  modalATVisible,
  onHandleTitle,
  onHandleDescription,
  taskTitle,
  taskDescription,
  onHandleModalAdd,
  addTask,
}) => {
  <Modal
    animationType="slide"
    visible={modalATVisible}
  >
    <View style={styles.modalPanel}>
      <Text style={styles.modalTitle}>ADD TASK</Text>
      <TextInput
        style={styles.modalTextInput}
        placeholder="Title"
        type="text"
        value={taskTitle}
        onChangeText={onHandleTitle}
      />
      <TextInput
        style={styles.modalTextInput}
        placeholder="Description"
        type="text"
        value={taskDescription}
        onChangeText={onHandleDescription}
      />
      <View style={styles.modalButtonGroup}>
        <Pressable
          style={styles.modalButton}
          backgroundColor={"#A93C46"}
          onPress={() => {
            onHandleModalAdd(false);
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
  </Modal>;
};

const styles = StyleSheet.create({
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

export default ModalAddTask;
