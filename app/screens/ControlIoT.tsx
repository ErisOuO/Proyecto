import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Header from "../components/Header";

const ControlIoTScreen = () => {

  return (
    <View style={styles.container}>
      <Header />
      <Image source={require("../../assets/iot.png")} style={styles.iot} />
      <Text style={styles.titulo}>Control y Estado del Producto IoT</Text>
      
      <View style={styles.estadoContainer}>
        <Text style={styles.estado}>Temperatura Actual: 25°C</Text>
        <Text style={styles.estado}>Humedad de Suelo: 60%</Text>
        <Text style={styles.estado}>Iluminación: 800 lux</Text>
        <Text style={styles.estado}>Calidad de Aire: 350 ppm</Text>
      </View>

      <View style={styles.botonesContainer}>
        <Text style={{fontSize: 18, fontWeight:'bold'}}>- - - Ventilador 1 - - -</Text>
        <Button title={"Encender"} />
        <Text style={{fontSize: 18, fontWeight:'bold'}}>- - - Ventilador 2 - - -</Text>
        <Button title={"Encender"}/>
        <Text style={{fontSize: 18, fontWeight:'bold'}}>- - - Foco Led - - -</Text>
        <Button title={"Encender"}/>
        <Text style={{fontSize: 18, fontWeight:'bold'}}>- - -Riego - - -</Text>
        <Button title={"Encender"}/>
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
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  estadoContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  estado: {
    fontSize: 18,
    marginBottom: 5,
  },
  botonesContainer: {
    justifyContent:'center',
    alignItems:'stretch',
    gap: 10,
  },
  iot: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default ControlIoTScreen;
