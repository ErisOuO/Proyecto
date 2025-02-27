import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const producto = {
  id: "1",
  name: "Guantes",
  price: "$80",
  image: require("../../assets/p_guantes.png"),
  description: "Su diseño cuenta con muñequera ajustable que evita que se desacomoden o deslicen al momento de realizar cualquier movimiento. Se pueden emplear para el manejo de herramientas manuales, eléctricas y trabajos como mecánica, paisajismo y jardinería."
};

const productosrec = [
    { id: "2", name: "Maceta", price: "$120", image: require("../../assets/p_maceta.png") },
    { id: "3", name: "Malla", price: "$250", image: require("../../assets/p_malla.png") },
    { id: "4", name: "Semillero", price: "$80", image: require("../../assets/p_semillero.png") },
  ];

const DetalleProducto = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Image source={producto.image} style={styles.imagen} />
      <Text style={styles.nombre}>{producto.name}</Text>
      <Text style={styles.precio}>{producto.price}</Text>
      <Text style={styles.descripcion}>{producto.description}</Text>
      <Button title="Regresar"/>
      <Text style={styles.titulo}>Más Productos</Text>
      <View>
        <ProductList products={productosrec} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  imagen: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  nombre: {
    fontSize: 24,
    fontWeight: "bold",
  },
  precio: {
    fontSize: 20,
    color: "green",
    marginVertical: 10,
  },
  descripcion: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
});

export default DetalleProducto;