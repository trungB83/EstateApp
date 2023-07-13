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
// import MapScreen from "./screens/MapScreen";
import HomeScreenOptions from "./navigations/HomeScreenOptions";
import SearchScreenOptions from "./navigations/SearchScreenOptions";
import CategoryScreenOptions from "./navigations/CategoryScreenOptions";
// import MapScreenOptions from "./navigations/MapScreenOptions";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarOptions: {
            activeTintColor: "#20C065",
            inactiveTintColor: "#4A4A4A",
          },
          headerShown: true,
          headerTintColor: "#20C065",
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: "#4A4A4A",
          },
          headerStyle: {
            backgroundColor: "#fff",
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={HomeScreenOptions}
        />
        <Tab.Screen name="Collections" component={CollectionScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={SearchScreenOptions}
        />
        {/* <Tab.Screen
          name="Map"
          component={MapScreen}
          options={MapScreenOptions}
        /> */}
        <Tab.Screen
          name="Category"
          component={CategoryScreen}
          options={CategoryScreenOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
