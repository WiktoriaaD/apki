import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../(tabs)/index";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

type EventItem = {
  id: number;
  title: string;
  description: string;
  location?: string;
  hour?: string;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [count, setCount] = useState(0);
  const events : EventItem[] = [
    { id: 1, title: "Wykład React", description: "Sala A1", location: "Budynek A", hour: "10:00" },
    { id: 2, title: "Warsztaty AI", description: "Sala B2", location: "Budynek C", hour: "12:00" },
    { id: 3, title: "Spotkanie Koła", description: "Sala C3", location: "Budynek D", hour: "15:00" },
    { id: 4, title: "Prezentacja Projektów", description: "Sala D4", location: "Budynek E", hour: "17:00" },
    { id: 5, title: "Panel Dyskusyjny", description: "Sala E5", location: "Budynek F", hour: "19:00" },
    { id: 6, title: "Networking", description: "Sala F6", location: "Budynek G", hour: "21:00" },
    { id: 7, title: "Zakończenie", description: "Sala G7", location: "Budynek H", hour: "23:00" },
    { id: 8, title: "After Party", description: "Sala H8", location: "Budynek I", hour: "00:00" },
    { id: 9, title: "Wykład Go", description: "Sala I9", location: "Budynek J", hour: "10:00" },
    { id: 10, title: "Warsztaty DevOps", description: "Sala J10", location: "Budynek K", hour: "12:00" },
    { id: 11, title: "Panel Dyskusyjny 2", description: "Sala K11", location: "Budynek L", hour: "14:00" },
    { id: 12, title: "Prezentacja Projektów 2", description: "Sala L12", location: "Budynek M", hour: "16:00" },
    { id: 13, title: "Wykład Python", description: "Sala M13", location: "Budynek N", hour: "18:00" },
    { id: 14, title: "Warsztaty Mobile", description: "Sala N14", location: "Budynek O", hour: "20:00" },
    { id: 15, title: "Zakończenie 2", description: "Sala O15", location: "Budynek P", hour: "22:00" },
  ];


  // const events = [
  //   { id: 1, title: "Wykład React", description: "Sala A1, 10:00" },
  //   { id: 2, title: "Warsztaty AI", description: "Sala B2, 12:00" },
  // ];

  function Footer() {
    return (
      <View style={{ marginTop: 40 }}>
        <Text style={{ color: 'white', opacity: 0.5 }}>chill</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Smart Campus" />

      {/* <Pressable 
            style={styles.container} 
            onPress={() => navigation.navigate('Details')}
          >
            <Text style={styles.container}>Wydarzenia</Text>
      </Pressable>


      <Text style={styles.title}>Licznik</Text>
      <Text style={styles.counter}>{count}</Text>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Pressable onPress={() => setCount(count + 1)}>
          <Text>+</Text>
        </Pressable>

        <Pressable onPress={() => setCount(count - 1)}>
          <Text>-</Text>
        </Pressable> */}
        <FlatList
         data={events}
          keyExtractor={(item) => item.id.toString()}

          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              description={item.description}
              onPress={() => navigation.navigate('Details', {
                title: item.title,
                description: item.description,
                id: item.id,
                location: item.location,
                hour: item.hour,
              })}
            />
          )}
          />
  ListFooterComponent={<Footer />}    
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ca80807e",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        
    },
    subtitle: {
        fontSize: 16,
        marginTop: 10,
    },
    counter: {
        fontSize: 48,
        fontWeight: "bold",
        marginBottom: 20,
    }
});




