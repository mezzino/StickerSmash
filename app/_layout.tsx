import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" 
        options={{headerTitle: "SmashScreen",
          headerLeft: () => null, // Hide the header left button
            }}/>
      <Stack.Screen name="about" 
        options={{headerTitle: "About Screen",}}/>
    </Stack>   
  );
}
