import { StyleSheet, View } from "react-native";
import BackButton from "../components/BackButton";
import BrandCard from "../components/BrandCard";

export default function Contact() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <BackButton />
      </View>

      <View style={styles.content}>
        <BrandCard
          title="Email"
          description="Denniz.Garza@Seattlecolleges.edu"
          route="/contact"
          theme="portfolio"
        />

        <BrandCard
          title="GitHub"
          description="github.com/DennizGarza1234"
          route="/contact"
          theme="portfolio"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F0C",
  },
  header: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  content: {
    padding: 20,
  },
});