import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

interface Product {
  id: string;
  name: string;
  price: string;
  image: any; // Recibiremos la imagen como un objeto (require o URI)
}

interface ProductListProps {
  products: Product[]; // Recibir productos como prop
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 5,
  },
  itemContainer: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#E4FFDB",
    borderRadius: 8,
    marginHorizontal: 5,
    width: 140,
    height: 140,
    borderColor: "#666",
    borderWidth: 3,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  textContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#666",
  },
});

export default ProductList;
