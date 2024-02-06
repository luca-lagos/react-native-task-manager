import { View, Pressable, Text, StyleSheet, Switch } from "react-native";

const CardTaskList = ({
  item,
  onHandleModalDelete,
  updateTaskCompleted,
  onSelectId
}) => {
  return (
    <View
      style={styles.listItem}
      backgroundColor={item.completed === false ? "#CECECF" : "#549479"}
      key={item.id}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={styles.listTitle}>{item.title}</Text>
          <Text style={styles.listDescription}>{item.description}</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 13,
        }}
      >
        <Switch
          trackColor={item.completed === false ? "#767577" : "#81b0ff"}
          thumbColor={item.completed === true ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={() => {
            updateTaskCompleted(item.id);
          }}
          value={item.completed}
        />
        <Pressable
          style={styles.listButton}
          onPress={() => {
            onHandleModalDelete(true);
            onSelectId(item.id);
          }}
        >
          <Text style={styles.listButtonText}>-</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: 70,
    marginBottom: 10,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#515151",
  },
  listDescription: {
    fontSize: 14,
    color: "#515151",
  },
  listButton: {
    width: 40,
    height: 40,
    borderColor: "white",
    borderWidth: 2,
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
});

export default CardTaskList;
