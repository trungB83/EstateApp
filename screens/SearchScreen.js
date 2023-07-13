import React, { useState } from "react";
import { FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Card, Header, Icon, SearchBar } from "react-native-elements";
import { data } from "../db";
import { HeaderButtons, HeaderButton, Item } from "react-navigation-header-buttons";
import { Image } from "react-native";

const CustomHeaderButton = (props) => (
  <HeaderButton {...props} IconComponent={Image} iconSize={23} color="#4A4A4A" />
);

const SearchScreenOptions = ({ navigation }) => ({
  headerTitle: () => (
    <SearchBar
      placeholder="Search"
      onChangeText={(text) => handleSearch(text)}
      onCancel={() => handleClearSearch()}
      value={searchText}
      platform="ios"
      cancelButtonTitle="Cancel"
      cancelButtonProps={{ buttonTextStyle: { fontWeight: "normal" } }}
      containerStyle={{ backgroundColor: "#fff" }}
      inputContainerStyle={{ backgroundColor: "#E5E5E5" }}
      inputStyle={{ fontSize: 14 }}
    />
  ),
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Profile"
        iconName={require("../assets/icons/User.png")}
        onPress={() => console.log("Profile button clicked")}
      />
    </HeaderButtons>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Add"
        iconName={require("../assets/icons/Add-new-button.png")}
        onPress={() => console.log("Add button clicked")}
      />
      <Item
        title="Map"
        iconName={require("../assets/icons/Map-button.png")}
        onPress={() => navigation.navigate("Map")}
      />
    </HeaderButtons>
  ),
});

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  const handleSearch = (text) => {
    setSearchText(text);
    if (!text.trim()) {
      setSearchResults(data);
      return;
    }

    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
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
      <Header
        {...SearchScreenOptions({ navigation: undefined })}
        statusBarProps={{ translucent: true }}
      />

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
});

export default SearchScreen;