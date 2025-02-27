import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import Header from "../components/Header";

const Perfil = () => {
  const usuario = {
    nombre: "Erick Eduardo Hernández Hernández",
    email: "20230007@uthh.edu.mx",
    telefono: "+52 81 3574 5303",
    fechaNacimiento: "12 de Julio de 2002",
    foto: require("../../assets/usuario.png"),
    macDispositivo: "AA:BB:CC:DD:EE:FF",
    fechaRegistro: "01 de enero de 2025",
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.titulo}>Perfil de Usuario</Text>
      <Image source={usuario.foto} style={styles.foto} />
      <Text style={styles.texto}>Nombre: {usuario.nombre}</Text>
      <Text style={styles.texto}>Correo: {usuario.email}</Text>
      <Text style={styles.texto}>Teléfono: {usuario.telefono}</Text>
      <Text style={styles.texto}>Fecha de Nacimiento: {usuario.fechaNacimiento}</Text>
      <Text style={styles.texto}>MAC IoT: {usuario.macDispositivo}</Text>
      <Text style={styles.texto}>Fecha de Resistro: {usuario.fechaRegistro}</Text>
      <Button title="Modificar Datos"></Button>
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
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Perfil;
