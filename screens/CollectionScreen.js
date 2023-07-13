import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { category } from "../db";

const CollectionScreen = () => {
  const [categories, setCategories] = useState(category);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {categories.map((category) => (
        <View key={category.name} style={styles.category}>
          <View style={styles.categoryImageContainer}>
            <Image
              source={category.image}
              style={styles.categoryImage}
            />

            <View style={styles.categoryImageOverlay} />
            <Text style={styles.categoryName}>
              {category.name.toUpperCase()}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  category: {
    width: "100%",
    height: 140,
    padding: 5,
  },
  categoryName: {
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
    width: "100%",
    top: "50%",
    transform: [{ translateY: -8 }],
  },
  categoryImageContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 5,
    overflow: "hidden",
    position: "relative",
  },
  categoryImageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default CollectionScreen;
