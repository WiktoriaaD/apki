import { StyleSheet } from "react-native";


export default function App() {
    // const [count, setCount] = useState<number>(0);
    // return (
    //     <View style={styles.container}>
            
    //         <Text style={styles.counter}>{count}</Text>
    //         <Button title="Zwiększ" onPress={() => setCount(count + 1)} />
    //     </View>
    // );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#030000ff",
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
    },
});