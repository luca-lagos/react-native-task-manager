import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Hola, Coder!</Text>
      <Text style={styles.p}>
        Esta es mi primer Mobile App en React Native :)
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  h2: {
    fontSize: 30,
    fontWeight: "bold",
  },
  p: {
    fontStyle: "italic",
  },
});
