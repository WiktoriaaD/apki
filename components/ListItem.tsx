import { ListItemProps } from '@/types/List';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";


export default function ListItem({title, onPress}: ListItemProps){
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
});