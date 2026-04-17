import { StyleSheet, Text, View } from "react-native";

type HeaderProps = {
    title: string;
    }

export default function Header({ title }: HeaderProps) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#347a85ff',
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
  });