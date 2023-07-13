import { HeaderButtons, HeaderButton, Item } from "react-navigation-header-buttons";
import { Image } from "react-native";


const CustomHeaderButton = (props) => (
  <HeaderButton {...props} IconComponent={Image} iconSize={23} color="#4A4A4A" />
);

const SearchScreenOptions = ({ navigation }) => ({
  title: "Home",
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

export default SearchScreenOptions;