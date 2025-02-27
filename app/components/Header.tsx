import React from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Logo y Nombre de la Empresa */}
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.companyName}>InvernaTech</Text>
      </View>
      
      {/* Input de Búsqueda */}
      <TextInput 
        placeholder="Buscar..." 
        style={styles.searchInput}
      />
      
      {/* Icono de Perfil */}
      <Image source={require("../../assets/usuario.png")} style={styles.profileIcon} />
      <Image source={require("../../assets/menu.png")} style={styles.menuIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#4CAF50",
    height: 50,
    borderColor: "#186BAD",
    borderBottomWidth: 2,
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
  companyName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  searchInput: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 16,
  },
  profileIcon: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 2,
  },
  menuIcon: {
    width: 40,
    height: 40,
    marginLeft: 8,
  },
});

export default Header;