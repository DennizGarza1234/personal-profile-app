import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text } from "react-native";

export default function Portfolio() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      
      {/* BACK BUTTON */}
      <Pressable onPress={() => router.back()} style={styles.backBtn}>
        <Text style={styles.backText}>← Back</Text>
      </Pressable>

      <Text style={styles.title}>Profile App</Text>

      <Image
        source={require("../assets/images/profile-app-ss.png")}
        style={styles.image}
      />

      <Text style={styles.description}>
        A personal profile application that showcases user data, settings,
        and customizable UI features with a clean dark theme.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 16 },

  backBtn: {
    marginBottom: 10,
  },

  backText: {
    color: "#fff",
    fontSize: 16,
    opacity: 0.8,
  },

  title: {
    color: "red",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },

  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 12,
  },

  description: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
  },
});