import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import { Button, Card, Icon } from "react-native-elements";

const { width } = Dimensions.get("window");

const data = [
  {
    id: 1,
    name: "House 1",
    address: "123 Main St",
    date: "19 day ago",
    price: "$1,259,000",
    image: require("../images/house1.png"),
  },
  {
    id: 2,
    name: "House 2",
    address: "456 Elm St",
    date: "19 day ago",
    price: "$1,259,000",
    image: require("../images/house2.png"),
  },
  {
    id: 3,
    name: "House 3",
    address: "123 Main St",
    date: "19 day ago",
    price: "$1,259,000",
    image: require("../images/house1.png"),
  },
  {
    id: 4,
    name: "House 4",
    address: "456 Elm St",
    date: "19 day ago",
    price: "$1,259,000",
    image: require("../images/house2.png"),
  },
  {
    id: 5,
    name: "House 5",
    address: "123 Main St",
    date: "19 day ago",
    price: "$1,259,000",
    image: require("../images/house1.png"),
  },
  {
    id: 6,
    name: "House 6",
    address: "456 Elm St",
    date: "19 day ago",
    price: "$1,259,000",
    image: require("../images/house2.png"),
  },
  {
    id: 7,
    name: "House 7",
    address: "123 Main St",
    date: "19 day ago",
    price: "$1,259,000",
    image: require("../images/house1.png"),
  },
  {
    id: 8,
    name: "House 8",
    address: "456 Elm St",
    date: "19 day ago",
    price: "$1,259,000",
    image: require("../images/house2.png"),
  },
];

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  const handleSearch = () => {
    if (!searchText.trim()) {
      setSearchResults(data);
      return;
    }

    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleClearSearch = () => {
    setSearchText("");
    setSearchResults(data);
  };

  const renderHouse = ({ item }) => {
    return (
      <View style={styles.houseContainer}>
        <View style={styles.imageContainer}>
          <Card.Image source={item.image} style={styles.houseImage} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.houseName}>{item.name}</Text>
          <Text style={styles.houseDate}>{item.date}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.houseAddress}>{item.address}</Text>
            <Text style={styles.housePrice}>{item.price}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchIconContainer}>
          <Icon name="search" type="font-awesome" color="#9B9B9B" size={20} />
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
        {searchText !== "" && (
          <TouchableOpacity onPress={handleClearSearch}>
            <Icon name="close" type="font-awesome" color="#9B9B9B" size={20} />
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={searchResults}
        renderItem={renderHouse}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    borderRadius: 9,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchIconContainer: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  noResults: {
    fontSize: 16,
    fontStyle: "italic",
  },
  houseContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    marginBottom: 10,
  },
  imageContainer: {
    width: 80,
    height: "100%",
    marginRight: 10,
  },
  houseImage: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },

  houseName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  houseDate: {
    fontSize: 12,
    color: "#9B9B9B",
  },
  houseAddress: {
    fontSize: 12,
    color: "#9B9B9B",
    marginRight: 5,
  },
  housePrice: {
    fontSize: 14,
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "transparent",
    marginLeft: "auto",
  },
});

export default SearchScreen;
