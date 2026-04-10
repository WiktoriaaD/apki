import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ListItemProps = {
    title: string;
    description: string;
    location?: string;
    onPress?: () => void;
    hour?: string;
}

export default function ListItem({title, onPress, hour}: ListItemProps){
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f3f5f5ff',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 5,
        width: 300,
        alignSelf: 'center',
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    location: {
        fontSize: 14,
        color: 'black',
    },
    isHighlighted: {
        backgroundColor: '#4cc4d6ff',
    },
    description: {
        fontSize: 16,
        color: 'black',
    },
    hour: {
        fontSize: 14,
        color: 'black',
    },
});
