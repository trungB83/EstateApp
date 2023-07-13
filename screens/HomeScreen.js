import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button, Icon } from "react-native-elements";

const HomeScreen = () => {
  const categories = [
    {
      name: "House",
      image: require("../images/house.jpg"),
    },
    {
      name: "Apartment",
      image: require("../images/apartment.png"),
    },
    {
      name: "Condos",
      image: require("../images/condos.png"),
    },
  ];

  const houses = [
    {
      name: "One Mission Bay",
      address: "San Francisco, CA",
      image: require("../images/house1.png"),
    },
    {
      name: "1410 Steiner St",
      address: "San Francisco, CA",
      image: require("../images/house2.png"),
    },
    {
      name: "246 Sussex St",
      address: "San Francisco, CA",
      image: require("../images/house3.png"),
    },
    {
      name: "1206 Market St",
      address: "San Francisco, CA",
      image: require("../images/house4.png"),
    },
  ];

  const CategoryItem = ({ category }) => {
    return (
      <View style={styles.categoryBox}>
        <View style={styles.categoryImageWrapper}>
          <Image
            source={category.image}
            style={styles.categoryImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.categoryNameWrapper}>
          <Text style={styles.categoryName}>{category.name}</Text>
        </View>
      </View>
    );
  };

  const renderCategoryItem = ({ item }) => {
    return <CategoryItem category={item} />;
  };

  const HouseItem = ({ item }) => {
    return (
      <View style={styles.houseItem}>
        <View style={styles.houseImageWrapper}>
          <Image source={item.image} style={styles.houseImage} resizeMode="cover" />
        </View>
        <View style={styles.houseInfo}>
          <Text style={styles.houseName}>{item.name}</Text>
          <Text style={styles.houseAddress}>{item.address}</Text>
        </View>
        <View style={styles.heartButton}>
          <Button
            icon={<Icon name="heart" type="font-awesome" color="#fff" />}
            buttonStyle={styles.saveButton}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.categoryBlock}>
          <Text style={styles.categoryTitle}>Categories</Text>
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.houseBlock}>
          <Text style={styles.categoryTitle}>Houses</Text>
          <View style={styles.categoryItem}>
            <FlatList
              data={houses}
              renderItem={HouseItem}
              keyExtractor={(item) => item.name}
              numColumns={2}
            />
          </View>
          <Button
            title={`Show All (7)`}
            type="outline"
            buttonStyle={styles.showAllButton}
            titleStyle={styles.showAllButtonTitle}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:"white"
  },
  // Category block
  categoryBlock: {
    marginBottom: 20,
  },
  categoryBox: {
    width: 120,
    height: 130,
    borderRadius: 7,
    backgroundColor: "#fff",
    marginHorizontal: 5,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  categoryImageWrapper: {
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    overflow: "hidden",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
  },
  categoryNameWrapper: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  categoryName: {
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  houseBlock: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  categoryItem: {
    width: "100%",
  },
  // House Block
  houseItem: {
    width: 180,
    height: 220,
    marginHorizontal: 5,
    marginBottom: 10,
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
});

export default HomeScreen;
