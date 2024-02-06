import {
    View,
    Pressable,
    Text,
    StyleSheet,
    Modal,
  } from "react-native";

const ModalDeleteTask = ({modalDTVisible, deleteTask, onHandleModalDelete}) => {
  <Modal
    animationType="slide"
    visible={modalDTVisible}
  >
    <View style={styles.modalPanel}>
      <Text style={styles.modalTitle} fontSize={16} width={300}>
        Are you sure to delete this task?
      </Text>
      <View style={styles.modalButtonGroup}>
        <Pressable
          style={styles.modalButton}
          onPress={() => onHandleModalDelete(false)}
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

export default ModalDeleteTask;
