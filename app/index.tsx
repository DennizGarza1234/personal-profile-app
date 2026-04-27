import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      
      <Image
        source={require("../assets/images/profile-pic.jpg")}
        style={styles.image}
      />

      <Text style={styles.title}>Denniz Garza</Text>
      <Text style={styles.subtitle}>
        React Native Developer | CTE Systems
      </Text>

      <Link href="/projects" style={styles.link}>View Projects</Link>
      <Link href="/skills" style={styles.link}>Skills</Link>
      <Link href="/contact" style={styles.link}>Contact</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold"
  },
  subtitle: {
    color: "#b0b0b0",
    textAlign: "center",
    marginBottom: 20
  },
  link: {
    color: "#4da6ff",
    marginVertical: 8,
    fontSize: 18
  }
});