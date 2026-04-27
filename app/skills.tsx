import { StyleSheet, View } from "react-native";
import BackButton from "../components/BackButton";
import BrandCard from "../components/BrandCard";

export default function Skills() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <BackButton />
      </View>

      <View style={styles.content}>
        <BrandCard
          title="React Native"
          description="Mobile apps development"
          image={require("../assets/images/profile-app-ss.png")}
          route="/skills"
          theme="portfolio"
        />

        <BrandCard
          title="Supabase"
          description="Backend systems & database"
          image={require("../assets/images/cte-bank-supabase.png")}
          route="/skills"
          theme="portfolio"
        />

        <BrandCard
          title="UI Design"
          description="Clean and modern interfaces"
          image={require("../assets/images/cte-bank-code.png")}
          route="/skills"
          theme="portfolio"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B0F0C" },
  header: { paddingTop: 10, paddingLeft: 10 },
  content: { padding: 20 },
});