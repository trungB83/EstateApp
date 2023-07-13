import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import { data } from "../db";

const SavedScreen = () => {
  const [savedHouses, setSavedHouses] = useState([]);

  useEffect(() => {
    const savedHousesData = data.filter((house) => house.saved);
    setSavedHouses(savedHousesData);
  }, []);

  const HouseItem = ({ item }) => {
    return (
      <View style={styles.houseItem}>
        <View style={styles.houseImageWrapper}>
          <Image
            source={item.image}
            style={styles.houseImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.houseInfo}>
          <Text style={styles.houseName}>{item.name}</Text>
          <Text style={styles.houseAddress}>{item.address}</Text>
        </View>
        <View style={styles.heartButton}>
          <Button
            icon={
              <Icon
                name="heart"
                type="font-awesome"
                color={item.saved ? "#20C065" : "#fff"}
              />
            }
            buttonStyle={styles.saveButton}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {savedHouses.length > 0 ? (
        <FlatList
          data={savedHouses}
          renderItem={HouseItem}
          keyExtractor={(item) => item.name}
          numColumns={2}
        />
      ) : (
        <Text style={styles.noSavedHouses}>No saved houses.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  houseItem: {
    width: 180,
    height: 220,
    marginHorizontal: 5,
    marginBottom: 20,
  },
  houseImageWrapper: {
    width: "100%",
    height: "70%",
    overflow: "hidden",
  },
  houseImage: {
    width: "100%",
    height: "100%",
  },
  houseInfo: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  houseName: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 14,
  },
  houseAddress: {
    color: "#000",
    fontSize: 12,
  },
  heartButton: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  saveButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  showAllButton: {
    borderRadius: 5,
    borderColor: "#20C065",
    borderWidth: 1,
    marginTop: 10,
  },
  showAllButtonTitle: {
    color: "#20C065",
  },
  saveButton: {
    backgroundColor: "transparent",
    marginLeft: "auto",
  },
  rating: {
    marginTop: 5,
  },
});

export default SavedScreen;
