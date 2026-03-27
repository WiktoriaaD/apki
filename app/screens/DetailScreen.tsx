import ListItem from "@/components/ListItem";
import { RouteProp } from '@react-navigation/native';
import { Pressable, ScrollView, StyleSheet } from "react-native";
import { RootStackParamList } from "../(tabs)/index";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type DetailsScreenProps = {
    route: DetailsScreenRouteProp;
};

export default function DetailScreen({route}: { route: DetailsScreenRouteProp }) {
    const { title, description } = route.params;

    return (
        <ScrollView>
                {events.map((event) => (
                  <Pressable
                    key={event.id}
                    onPress={() =>
                      navigation.navigate('Details', {
                        title: event.title,
                        description: event.description,
                      })
                    }
                  >
                    <ListItem
                      key={event.id}
                        title={event.title}
                        description={event.description}
                        location={event.location}
                    />
                  </Pressable>
                ))}
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e7c4c4ff",
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
    description: {
        fontSize: 18,
        marginTop: 20,
    },
});