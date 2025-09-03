import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <Stack>
      <Stack.Screen name="index" /> 
      <Stack.Screen name="about" />
    </Stack>
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
    color: "#fff",
  },
})