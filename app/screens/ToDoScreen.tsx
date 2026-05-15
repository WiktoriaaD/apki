import React from "react";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { useFetch } from "@/hooks/useFetch";
import { Todo } from "@/types/Todo";

export const TodoScreen = () => {
  const {
    data: todos,
    isLoading: loading,
    error,
  } = useFetch<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
    if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>{error}</Text>
      </View>
    );
  }

if (!loading && !error && todos?.length === 0) {
return (
<View style={styles.center}>
<Text>Brak danych do wyświetlenia.</Text>
</View>
);
}

  return (
    <FlatList
      data={todos?.slice(0, 20)}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>

          <Text
            style={[
              styles.status,
              {
                color: item.completed ? "green" : "red",
              },
            ]}
          >
            {item.completed
              ? "Wykonane"
              : "Niewykonane"}
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },

  card: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 2,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },

  status: {
    fontSize: 14,
    fontWeight: "500",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});