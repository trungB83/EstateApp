import React from "react";
import { HeaderButtons, HeaderButton, Item } from "react-navigation-header-buttons";
import { Image } from "react-native";

const CustomHeaderButton = (props) => (
  <HeaderButton {...props} IconComponent={Image} iconSize={23} color="#4A4A4A" />
);

const MapScreenOptions = ({ navigation }) => ({
  title: "Map View",
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "#fff",
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#4A4A4A",
  },
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Back"
        iconName={require("../assets/icons/Back-button.png")}
        onPress={() => navigation.goBack()}
      />
    </HeaderButtons>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Search"
        iconName={require("../assets/icons/Search.png")}
        onPress={() => navigation.navigate("Search")}
      />
    </HeaderButtons>
  ),
});

export default MapScreenOptions;