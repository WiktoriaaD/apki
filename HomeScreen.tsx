import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../(tabs)/index";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [count, setCount] = useState(0);

  const events = [
    { id: 1, title: "Wykład React", description: "Sala A1, 10:00" },
    { id: 2, title: "Warsztaty AI", description: "Sala B2, 12:00" },
  ];

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

      

      <Text style={styles.title}>Licznik</Text>
      <Text style={styles.counter}>{count}</Text>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Pressable onPress={() => setCount(count + 1)}>
          <Text>+</Text>
        </Pressable>

        <Pressable onPress={() => setCount(count - 1)}>
          <Text>-</Text>
        </Pressable>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1ababff",
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
});




