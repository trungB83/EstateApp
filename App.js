import React from "react";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import CollectionScreen from "./screens/CollectionScreen";
import SavedScreen from "./screens/SavedScreen";
import SearchScreen from "./screens/SearchScreen";
import MapScreen from "./screens/MapScreen";

const Tab = createBottomTabNavigator();

const CustomHeaderButton = (props) => (
  <HeaderButton {...props} IconComponent={Image} iconSize={23} color="#4A4A4A" />
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
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
                iconName={require("./assets/icons/User.png")}
                onPress={() => console.log("Profile button clicked")}
              />
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Add"
                iconName={require("./assets/icons/Add-new-button.png")}
                onPress={() => console.log("Add button clicked")}
              />
              <Item
                title="Map"
                iconName={require("./assets/icons/Map-button.png")}
                onPress={() => console.log("Map button clicked")}
              />
            </HeaderButtons>
          ),
        }}
        tabBarOptions={{
          activeTintColor: "#20C065",
          inactiveTintColor: "#4A4A4A",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/icons/home.png")}
                style={{ width: 23, height: 23, tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Collections"
          component={CollectionScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/icons/collection-icon.png")}
                style={{ width: 23, height: 23, tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/icons/heart-icon.png")}
                style={{ width: 23, height: 23, tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/icons/search-icon.png")}
                style={{ width: 23, height: 23, tintColor: color }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;