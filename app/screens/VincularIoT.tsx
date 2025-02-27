import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Header from "../components/Header";

const VincularIoT = () => {
  const [mac, setMac] = useState("");
  const [macConfirm, setMacConfirm] = useState("");

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.titulo}>Vincular IoT</Text>
      <View style={styles.formContainer}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Ingrese la MAC del IoT</Text>
        <TextInput
          style={styles.input}
          value={mac}
          onChangeText={setMac}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Confirme la MAC del IoT</Text>
        <TextInput
          style={styles.input}
          value={macConfirm}
          onChangeText={setMacConfirm}
        />
        <Button title="Vincular" onPress={() => console.log("Vinculando IoT")}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
  },
  formContainer: {
    justifyContent: 'center',
    flexDirection: "column",
    backgroundColor: "#E4FFDB",
    alignItems: "center",
    marginTop: 20,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 10,
    width: "90%",
    padding: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 5,
    marginVertical: 20,
  },
});

export default VincularIoT;