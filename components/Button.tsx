import { Pressable, StyleSheet, Text, View } from "react-native";

type props ={
    label: string;
};

export default function Button({label}: props) {
    return (
        <View style={styles.buttonContainer}>
        <Pressable 
            onPress={() => alert ("Pressed")}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>    
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
      buttonLabel: {
        fontSize: 20,
        color: "#fff",
        textAlign: "center",
        backgroundColor: "#3b82f6",
        padding: 10,
        borderRadius: 5,  
      },
      buttonContainer: {
        flex: .3,
      },
  })
