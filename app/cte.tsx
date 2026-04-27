import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text } from "react-native";

export default function CTE() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      
      {/* BACK BUTTON */}
      <Pressable onPress={() => router.back()} style={styles.backBtn}>
        <Text style={styles.backText}>← Back</Text>
      </Pressable>

      <Text style={styles.title}>CTE Bank App</Text>

      <Image
        source={require("../assets/images/cte-bank-adminside.png")}
        style={styles.image}
      />

      <Image
        source={require("../assets/images/cte-bank-code.png")}
        style={styles.image}
      />

      <Image
        source={require("../assets/images/cte-bank-studentside.png")}
        style={styles.image}
      />

      <Image
        source={require("../assets/images/cte-bank-supabase.png")}
        style={styles.image}
      />

      <Text style={styles.description}>
        A full-stack banking system built for managing students, accounts, and Supabase integration.
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
    color: "gold",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 12,
  },

  description: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
  },
});