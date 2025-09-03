import Link from "expo-router/link";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}>
      <Text style={styles.text}>Hello_World.</Text>
      <Text style={styles.spacer}></Text>
      <Link href={"/about"} style={styles.button}>
        Go to About Screen </Link>
      <Text style={styles.spacer}></Text>
      <Link href={"/+not-found"} style={styles.button}>
        Go to New Screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text:{
    fontSize: 32,
    color: "#fff",
  },
  spacer:{
    fontSize: 2,
  },
  button: {
    fontSize: 20,
    color: "#fff",
    textDecorationLine: "underline",
  },
})