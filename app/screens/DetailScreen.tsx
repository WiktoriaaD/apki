import { StyleSheet, Text, View } from "react-native";
import { DetailsScreenProps } from "../../types/Detail";

export default function DetailScreen({route}: DetailsScreenProps) {
    const { title, description, location,hour, category, speaker} = route.params;
  //   const events = [
  //   { id: 1, title: "Wykład React", description: "Sala A1, 10:00", location: "Budynek A" },
  //   { id: 2, title: "Warsztaty AI", description: "Sala B2, 12:00", location: "Budynek C" },
  //   { id: 3, title: "Spotkanie Koła", description: "Sala C3, 15:00", location: "Budynek D" },
  //   { id: 4, title: "Prezentacja Projektów", description: "Sala D4, 17:00", location: "Budynek E" },
  //   { id: 5, title: "Panel Dyskusyjny", description: "Sala E5, 19:00", location: "Budynek F" },
  //   { id: 6, title: "Networking", description: "Sala F6, 21:00", location: "Budynek G" },
  //   { id: 7, title: "Zakończenie", description: "Sala G7, 23:00", location: "Budynek H" },
  //   { id: 8, title: "After Party", description: "Sala H8, 00:00", location: "Budynek I" },
  //   { id: 9, title: "Wykład Go", description: "Sala I9, 10:00", location: "Budynek J" },
  //   { id: 10, title: "Warsztaty DevOps", description: "Sala J10, 12:00", location: "Budynek K" },
  // ];

    return (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.category}>{speaker}</Text>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.location}>{location}</Text>
          <Text style={styles.location}>{hour}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fffafaa4",
        alignItems: "center",
        justifyContent: "center",
        
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        
    },
    location
      : {
        fontSize: 16,
        marginTop: 10,
    },
    category: {
        fontSize: 26,
        marginTop: 10,
    },
    description: {
        fontSize: 18,
        marginTop: 20,
        fontFamily: "Courier New",
    },
});