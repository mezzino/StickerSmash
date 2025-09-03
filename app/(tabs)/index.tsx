import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import Link from "expo-router/link";
import { StyleSheet, Text, View } from "react-native";
const PlaceholderImage = require("../../assets/images/icon.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={PlaceholderImage} />  
      </View>
      <View>
        <Button label="Press me" /> 
      </View>
      <Text style={styles.text}>Welcome to PouchApp.</Text>
      <Text style={styles.text}>This is the home screen.</Text>
      <Text style={styles.text}>You can navigate to other screens using the links below:</Text>
      <Text style={styles.text}></Text>
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