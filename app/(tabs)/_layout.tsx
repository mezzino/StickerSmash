import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#f0f", tabBarInactiveTintColor: "#999",}
    }>
      <Tabs.Screen name="index" 
        options={{headerTitle: "SmashScreen",}}/>
      <Tabs.Screen name="about" 
        options={{headerTitle: "About Screen",}}/>
    </Tabs>   
  );
}
