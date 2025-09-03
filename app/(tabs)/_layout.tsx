import { Ionicons } from "@expo/vector-icons";

import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#f0f", 
      headerStyle: { backgroundColor: "rgba(8, 163, 155, 1)" },
      headerTintColor: "#fff",
      headerShadowVisible: false,
      tabBarStyle: { backgroundColor: "rgba(17, 99, 143, 1)" },
      tabBarInactiveTintColor: "#c8c505ff",}
    }>
      <Tabs.Screen name="index" 
        options={{headerTitle: "SmashScreen",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons 
              name={focused ? "home-sharp": "home-outline"}
              color={color} 
              size={24} />
            ),
          }}
        />
      <Tabs.Screen name="settings"
        options={{headerTitle: "About Screen",}}/>
    </Tabs>   
  );
}
