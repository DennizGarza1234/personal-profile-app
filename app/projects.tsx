import { ScrollView, StyleSheet, View } from "react-native";
import BackButton from "../components/BackButton";
import BrandCard from "../components/BrandCard";

export default function Projects() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <BackButton />
      </View>

      {/* CONTENT */}
      <ScrollView contentContainerStyle={styles.content}>

        <BrandCard
          title="CTE Bank App"
          description="Secure banking app with transactions and admin tools."
          image={require("../assets/images/cte-bank-code.png")}
          route="/cte"
          theme="cte"
        />

        <BrandCard
          title="Calendar App"
          description="Scheduling app with reminders and events."
          image={require("../assets/images/profile-app-ss.png")}
          route="/calendar"
          theme="calendar"
        />

        <BrandCard
          title="Profile App"
          description="Custom profile UI with settings and data."
          image={require("../assets/images/profile-app-ss.png")}
          route="/portfolio"
          theme="portfolio"
        />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  content: {
    padding: 16,
  },
});