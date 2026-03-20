import Header from '@/components/Header';
import ListItem from '@/components/ListItem';
import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

export default function App() {
    const [count, setCount] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const events = [
      { id: 1,title: "Wykład React", description: "Sala A1, 10:00", location: "Budynek A"},
      { id: 2,title: "Warsztaty AI", description: "Sala B2, 12:00", location: "Budynek B"},
      { id: 3,title: "Spotkanie Koła", description: "Sala C3, 15:00",location: "Budynek C",isHightlighted: true},
    ]

    function Footer() {
      return (
        <View style={styles.footer}>
          <Text style={{color: 'white', opacity: 0.5}}>chill</Text>
        </View>
      );
    }

    return (
        <View style={styles.container}>
          <Header title="Smart Campus" />

          <ScrollView>
            {events.map((event) => (
              <ListItem
                key={event.id}
                title={event.title}
                description={event.description}
                location={event.location}
                isHighlighted={event.isHightlighted||false}
              />
            ))}
          </ScrollView>

          <Text style={styles.title}>Licznik</Text>
          <Text style={styles.counter}>{count}</Text>
          
          <View style={styles.buttonRow}>
            <Pressable
              style={styles.buttonOpen}
              onPress={() => {
                setCount(count + 1);
                
              }}
            >
              <Text style={styles.textStyle}>Zwiększ</Text>
            </Pressable>

            
            <Pressable
              style={[styles.buttonOpen, { backgroundColor: '#446e75ff' }]}
              onPress={() => setCount(count - 1)}
            >
              <Text style={styles.textStyle}>Zmniejsz</Text>
            </Pressable>
          </View>

          <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ff9f9fff",
        alignItems: "center",
        justifyContent: "center",
    },
    footer: {
        marginTop: 40,
        padding: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: 'white',
    },
    counter: {
        fontSize: 60,
        fontWeight: 'bold',
        marginVertical: 20,
        color: 'white',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    buttonOpen: {
        backgroundColor: "#94516dff",
        borderRadius: 20,
        padding: 15,
        elevation: 2,
        minWidth: 100,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 10,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
});
