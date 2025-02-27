import React from "react";
import { View, StyleSheet, Text, Button} from "react-native";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const productosrec = [
  { id: "1", name: "Guantes", price: "$80", image: require("../../assets/p_guantes.png") },
  { id: "2", name: "Maceta", price: "$120", image: require("../../assets/p_maceta.png") },
  { id: "3", name: "Malla", price: "$250", image: require("../../assets/p_malla.png") },
  { id: "4", name: "Semillero", price: "$80", image: require("../../assets/p_semillero.png") },
];

const productosven = [
  { id: "1", name: "Fertilizante", price: "$200", image: require("../../assets/p_fertilizante.png") },
  { id: "2", name: "Pala", price: "$180", image: require("../../assets/p_pala.png") },
  { id: "3", name: "Rastrillo", price: "$250", image: require("../../assets/p_rastrillo.png") },
  { id: "4", name: "Regadera", price: "$70", image: require("../../assets/p_regadera.png") },
];


const ProductosScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.titulo}>Categorias</Text>
      <View style={{flexDirection: 'column', justifyContent: 'space-around', alignItems:'center'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', gap: 60}}>
          <Button title="Semillas"/>
          <Button title="Herramientas"/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', gap: 67, margin: 20}}>
          <Button title="Fertilizantes"/>
          <Button title="Macetas"/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', gap: 100, marginBottom: 20}}>
          <Button title="Insecticidas"/>
          <Button title="Riego"/>
        </View>
      </View>
      <Text style={styles.titulo}>Productos Recomendados</Text>
      <View>
        <ProductList products={productosrec} />
      </View>
      <Text style={styles.titulo}>Más Vendidos</Text>
      <View>
        <ProductList products={productosven} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
});

export default ProductosScreen;