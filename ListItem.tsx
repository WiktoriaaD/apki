import { StyleSheet, Text, View } from "react-native";

type ListItemProps = {
    title: string;
    description: string;
    location: string;
    isHighlighted: boolean;
}

export default function ListItem({title, description, location, isHighlighted}: ListItemProps){
    return (
        <View style={[styles.container, isHighlighted && styles.isHighlighted]}>
            <Text style={styles.title}>{title}</Text>
            <Text>{description}</Text>
            <Text style={styles.location}>{location}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#27727eff',
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    location: {
        fontSize: 14,
        color: 'white',
    },
    isHighlighted: {
        backgroundColor: '#4cc4d6ff',
    },
});
