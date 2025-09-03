import { Stack } from "expo-router";

export default function TabsLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" 
        options={{headerTitle: "SmashScreen",
          headerLeft: () => null,        
        }}/>
    </Stack>   
  );
}
