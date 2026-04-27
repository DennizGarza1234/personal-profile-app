import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type BrandCardProps = {
  title: string;
  description: string;
  image?: any; // 👈 now optional
  theme: "cte" | "calendar" | "portfolio";
  route: string;
};

export default function BrandCard({
  title,
  description,
  image,
  theme,
  route,
}: BrandCardProps) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(route as any)}
      style={[styles.card, themeStyles[theme]]}
    >
      {/* ONLY show image if it exists */}
      {image && <Image source={image} style={styles.image} />}

      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    padding: 12,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 12,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    fontSize: 13,
    color: "#ccc",
    marginTop: 4,
  },
});

const themeStyles = StyleSheet.create({
  cte: {
    backgroundColor: "#0b1b3a",
    borderColor: "#d4af37",
    borderWidth: 1,
  },
  calendar: {
    backgroundColor: "#1a0033",
    borderColor: "#ffffff",
    borderWidth: 1,
  },
  portfolio: {
    backgroundColor: "#000",
    borderColor: "#ff0000",
    borderWidth: 1,
  },
});