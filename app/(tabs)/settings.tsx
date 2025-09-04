import Button from "@/components/Button";
import { StyleSheet, View } from "react-native";
const PlaceholderImage = require("../../assets/images/icon.png");

export default function Settings() {
  return (
    <View style={styles.container}>
      <View>
        <Button label="Settings..." /> 
      </View>
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
  bigspacer:{
    marginTop: 200,
    fontSize: 34,
  },
  button: {
    marginTop: 50,
    fontSize: 20,
    color: "#fff",
    textDecorationLine: "underline",
  },
  imageContainer: {
    flex: .1,
  }
})