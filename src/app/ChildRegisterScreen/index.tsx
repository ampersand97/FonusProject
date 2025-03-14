import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("window");

export default function ChildRegisterScreen() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState();
  const pickerRef = useRef<Picker<undefined>>(null);

  return (
    <View style={styles.container}>
      <View style={styles.viewBackButton}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.6} onPress={() => router.push('/MainScreen')}>
          <Text style={styles.text}><MaterialCommunityIcons name="chevron-left" size={36} color="black" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Informações do(a) seu(sua) filho(a)</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => setName(text)}
          label="Nome"
          mode="outlined"
          right={
            <TextInput.Icon
              icon={({ size, color }) => (
                <MaterialCommunityIcons
                  name={name === "" ? "account-circle-outline" : "account-circle"}
                  size={size}
                  color="#47065B"
                />
              )}
            />
          }
          value={name}
          theme={{
            colors: {
              outline: "#47065B",
              background: "white",
              primary: "#47065B",
            },
            roundness: 10,
          }}
        />
        <TextInput
          style={styles.inputText}
          label="Idade"
          onChangeText={(text) => setAge(text)}
          mode="outlined"
          right={
            <TextInput.Icon
              icon={({ size, color }) => (
                <MaterialCommunityIcons
                  name={age === "" ? "numeric" : "numeric"}
                  size={size}
                  color="#47065B"
                />
              )}
            />
          }
          value={age}
          keyboardType="numeric"
          theme={{
            colors: {
              outline: "#47065B",
              background: "white",
              primary: "#47065B",
            },
            roundness: 10,
          }}
        />

        <Picker
            ref={pickerRef}
            selectedValue={gender}
            onValueChange={(itemValue)=>{
                setGender(itemValue)
            }}
            style={styles.button2}
            >
            <Picker.Item label='Masculino' value={'M'}/>
            <Picker.Item label='Feminino' value={'F'}/>
        </Picker>

      </View>

      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button1} onPress={() => router.push('/TreatmentQuestion')}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  viewTitle: {
    marginTop: "60%",
  },
  title: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#47065B",
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "10%",
  },
  inputText: {
    width: width * 0.8,
    height: height * 0.06,
    marginTop: 10,
    backgroundColor: "#C6C6C6",
  },
  viewButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: "20%",
  },
  button1: {
    width: "80%",
    height: height * 0.07,
    backgroundColor: "#47065B",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "80%", 
  },
  button2: {
    width: width * 0.8,
    height: height * 0.06,
    marginTop: 15,
    backgroundColor: "#C6C6C6",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  viewBackButton: {
    width: "90%",
    alignItems: "flex-start",
    marginTop: "55%",
  },
  backButton: {
    height: height * 0.01,
    justifyContent: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: width * 0.1,
  },
  text: {
    color: "white",
    fontSize: width * 0.05,
    textAlign: "center",
  },
});