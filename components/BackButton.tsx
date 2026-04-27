import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

export default function BackButton() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()} style={styles.btn}>
      <Text style={styles.text}>← Back</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});