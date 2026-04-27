import { ScrollView, StyleSheet, Text, View } from "react-native";
import BackButton from "../components/BackButton";

export default function Calendar() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <BackButton />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Calendar App</Text>

        <Text style={styles.description}>
          A scheduling app with reminders and event tracking.
        </Text>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  header: { paddingTop: 10, paddingLeft: 10 },
  content: { padding: 16 },
  title: { color: "#a855f7", fontSize: 24, fontWeight: "bold" },
  description: { color: "#fff", marginTop: 10 },
});