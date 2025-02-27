import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet 
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Product {
  id: string;
  name: string;
  price: string;
  image: any;
}


const products: Product[] = [
  { id: "1", name: "Acelga Ruby Red - Sobre de 1 LB", price: "$380.00", image: require("../invernadero/assets/casita.jpeg") },
  { id: "2", name: "Tomatillo Cáscara - Libra", price: "$1,800.00", image: require("../invernadero/assets/maceta.jpeg") },
  { id: "3", name: "Acelga Ruby Red - Sobre de 1 LB", price: "$380.00", image: require("../invernadero/assets/semis.jpg") },
  { id: "4", name: "tela para sercar", price: "$2800.00", image: require("../invernadero/assets/tela.jpeg") },
];

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        {/* Logo y Nombre */}
        <View style={styles.logoContainer}>
          
         
        </View>
        <View style={styles.searchContainer}>
  <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
  <TextInput 
    placeholder="Buscar..." 
    style={styles.searchInput}
  />
</View>


        <Image source={require("../invernadero/assets/logo.jpeg")} style={styles.profileIcon} />
      </View>

    
      <TouchableOpacity style={styles.menuButton} onPress={() => setMenuOpen(!menuOpen)}>
        <MaterialIcons name="menu" size={32} color="#fff" />
      </TouchableOpacity>
      {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity><Text style={styles.menuItem}>Perfil</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.menuItem}>Contacto</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.menuItem}>Quiénes somos</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.menuItem}>Políticas</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.menuItem}>FAQ</Text></TouchableOpacity>
        </View>
      )}

      {/* Lista de productos */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Product }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;

// Estilos
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  header: {
    flexDirection: "row",
    marginTop: 30, 
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#4CAF50",
    borderBottomWidth: 2,
    borderColor: "#186BAD",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 16,

  },
  
  searchIcon: {
    marginRight: 8, 
  },
  
  searchInput: {
    flex: 1, 
    paddingVertical: 8,
  },
  
  profileIcon: {
    width: 40,
    height: 50,
    borderWidth: 2,
  },
  menuButton: {
    position: "absolute",
    top: 15,
    left: 15,
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
   
  },
  menu: {
    backgroundColor: "#FFF",
    padding: 10,
    position: "absolute",
    top: 0,
    
    left: 0,
    elevation: 5,
  },
  menuItem: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  productCard: {
    backgroundColor: "#FFF",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },
  productImage: { width: 100, height: 100, resizeMode: "contain" },
  productName: { fontSize: 16, fontWeight: "bold", textAlign: "center" },
  productPrice: { fontSize: 14, color: "#4CAF50", marginTop: 5 },
});
