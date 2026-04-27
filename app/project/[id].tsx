import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import BackButton from "../../components/BackButton";

export default function ProjectDetails() {
  const { id } = useLocalSearchParams();

  const projects: Record<string, any> = {
    "1": {
      title: "CTE Wallet System",
      desc: "Admin dashboard for managing student credits, activities, and competencies.",
      images: [
        require("../../assets/images/cte-bank-adminside.png"),
        require("../../assets/images/cte-bank-studentside.png"),
        require("../../assets/images/cte-bank-supabase.png"),
        require("../../assets/images/cte-bank-code.png")
      ],
      bg: "#0B1B3A",
      accent: "#D4AF37"
    },
    "2": {
      title: "Elma Calendar",
      desc: "School scheduling system for tracking events and assignments.",
      images: [
        require("../../assets/images/profile-app-ss.png")
      ],
      bg: "#2B1B4A",
      accent: "#4DA6FF"
    },
    "3": {
      title: "Portfolio App",
      desc: "React Native navigation and UI showcase project.",
      images: [],
      bg: "#0B0F0C",
      accent: "#7BAE7F"
    }
  };

  const project = projects[id as string];

  return (
    <ScrollView style={[styles.container, { backgroundColor: project.bg }]}>
      <BackButton />

      <Text style={[styles.title, { color: project.accent }]}>
        {project.title}
      </Text>

      <Text style={styles.desc}>
        {project.desc}
      </Text>

      <View style={styles.gallery}>
        {project.images.map((img: any, index: number) => (
          <Image key={index} source={img} style={styles.image} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 80,
    marginBottom: 10
  },
  desc: {
    color: "#ccc",
    marginBottom: 20
  },
  gallery: {
    gap: 15
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 15
  }
});