import { useState } from 'react';
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
        <View>
          <Text style={{fontSize: 24}}>Aplikacja Studencka</Text>
        </View>
      );
    }
    return (
        <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />

        <Text style={styles.title}>Licznik :3</Text>
        <Text style={styles.counter}>{count}</Text>
        <Pressable
        style={styles.buttonOpen}
         onPress={() => {
         setCount(count + 1);
         setModalVisible(true);
        }}
          >
        <Text style={styles.textStyle}>Zwiększ</Text>
        
      </Pressable>
        
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
                style={styles.button,styles.buttonClose}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>x</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

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
    title: {
        fontSize: 28,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 16,
        marginTop: 10,
    },
});
