import { RootStackParamList } from '@/types/Navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";
import UsersScreen from '../screens/UsersScreen';




import ApiPostDetailsScreen from "../screens/ApiPostDetailsScreen";
import ApiPostsScreen from "../screens/ApiPostsScreen";
import { TodoScreen } from '../screens/ToDoScreen';
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
return (
<Stack.Navigator>
<Stack.Screen
name="Home"
component={HomeScreen}
options={{ title: "Start" }}
/>
<Stack.Screen
name="Details"
component={DetailScreen}
options={{ title: "Szczegóły wydarzenia" }}
/>
 <Stack.Screen
        name="Todos"
        component={TodoScreen}
    />
<Stack.Screen
name="Users"
component={UsersScreen}
options={{ title: "Użytkownicy" }}
/>
<Stack.Screen
name="ApiPosts"
component={ApiPostsScreen}
options={{ title: "Posty z API" }}
/>
<Stack.Screen
name="ApiPostDetails"
component={ApiPostDetailsScreen}
options={{ title: "Szczegóły posta" }}
/>
</Stack.Navigator>
);
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#ff9f9fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     footer: {
//         marginTop: 40,
//         padding: 10,
//     },
//     buttonRow: {
//         flexDirection: 'row',
//         gap: 10,
//     },
//     title: {
//         fontSize: 28,
//         fontWeight: "bold",
//         color: 'white',
//     },
//     counter: {
//         fontSize: 60,
//         fontWeight: 'bold',
//         marginVertical: 20,
//         color: 'white',
//     },
//     centeredView: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: 'rgba(136, 96, 96, 0.5)'
//     },
//     buttonOpen: {
//         backgroundColor: "#94516dff",
//         borderRadius: 20,
//         padding: 15,
//         elevation: 2,
//         minWidth: 100,
//     },
//     button: {
//         borderRadius: 20,
//         padding: 10,
//         elevation: 2,
//         marginTop: 10,
//     },
//     textStyle: {
//         color: "white",
//         fontWeight: "bold",
//         textAlign: "center",
//     },
// });