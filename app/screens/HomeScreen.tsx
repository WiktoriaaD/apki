import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import { HomeScreenProps } from "@/types/Home";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { events } from "../../data/events";
import { Event } from "../../types/Event";



export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [count, setCount] = useState(0);

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

          renderItem={({ item }: { item: Event }) => (
            <ListItem
              title={item.title}
              description={item.description}
              category={item.category}
              onPress={() => navigation.navigate('Details', {
                title: item.title,
                description: item.description,
                id: item.id,
                location: item.location,
                hour: item.hour,
                category: item.category,
              })}
            />
          )}
          ListFooterComponent={<Footer />}
          />
     
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
        fontStyle: 'italic',
        
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




