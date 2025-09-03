import { View, Text, StyleSheet, Pressable} from "react-native"

type props ={
    label: string;
};

export default function Button({label}: props) {
    return (
        <View style={styles:buttonContainer}>
        <Pressable
          style={styles:button}
          onPress={() => alert ("Pressed")
        }>
          <Text style={styles:buttonLabel}>{label}</Text>
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
      image: {
        width: 200,
        height: 200,
        marginBottom: 70,
        borderRadius: 20,
      },
      buttonLabel: {
      },
      buttonContainer: {
        flex: .7,
      },
  })
