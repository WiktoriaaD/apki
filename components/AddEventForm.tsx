import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { Event } from "../types/Event";

type AddEventFormProps = {
    onAddEvent: (newEvent: Omit<Event, 'id'>) => void;
};

export default function AddEventForm({ onAddEvent }: AddEventFormProps) {
    const [title, setTitle] = useState('');
    const [speaker, setSpeaker] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [hour, setHour] = useState('');

    const handleAddEvent = () => {
        if (!title || !speaker || !category || !description || !location || !hour) {
            Alert.alert('Błąd', 'Wszystkie pola są wymagane!');
            return;
        }
        if (title.length < 3) {
            Alert.alert('Błąd', 'Tytuł musi mieć co najmniej 3 znaki!');
            return;
        }

        onAddEvent({ title, speaker, category, description, location, hour });
        setTitle('');
        setSpeaker('');
        setCategory('');
        setDescription('');
        setLocation('');
        setHour('');
    };

return (
    <View style={styles.container}>
        <TextInput
            placeholder="Tytuł wydarzenia"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
        />
        <TextInput
            placeholder="Prowadzacy"
            value={speaker}
            onChangeText={setSpeaker}
            style={styles.input}
        />
        <TextInput
            placeholder="Kategoria"
            value={category}
            onChangeText={setCategory}
            style={styles.input}
        />
        <TextInput
            placeholder="Opis"
            value={description}
            onChangeText={setDescription}
            style={styles.input}
        />
        <TextInput
            placeholder="Lokalizacja"
            value={location}
            onChangeText={setLocation}
            style={styles.input}
        />
        <TextInput
            placeholder="Godzina"
            value={hour}
            onChangeText={setHour}
            style={styles.input}
        />
        <Button title="Dodaj wydarzenie" onPress={handleAddEvent} />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10
    },
    input: {
        fontSize: 16,
        padding: 10,
        marginBottom: 10
    }
});
