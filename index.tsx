import React, { useState } from 'react';
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    const [count, setCount] = useState<number>(0);
    const [modalVisible, setModalVisible] = useState(false);

    function Header(){
      return ( 
        <View style={styles.header}>
          <Text style={{fontSize: 24, color: 'white'}}>Aplikacja Studencka</Text>
        </View>
      );
    }

    function Footer() {
      return (
        <View style={styles.footer}>
          <Text style={{color: 'white', opacity: 0.5}}>chill</Text>
        </View>
      );
    }

    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Header />

          <Text style={styles.title}>Licznik</Text>
          <Text style={styles.counter}>{count}</Text>
          
          <View style={styles.buttonRow}>
            <Pressable
              style={styles.buttonOpen}
              onPress={() => {
                setCount(count + 1);
                setModalVisible(true);
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
          
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal został zamknięty");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>xoxo</Text>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textStyle}>Zamknij</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <Footer />

        </SafeAreaView>
      </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ff9f9fff",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        marginBottom: 20,
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
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        elevation: 5,
    },
    buttonOpen: {
        backgroundColor: "#ee86b1ff",
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
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20,
    }
});
