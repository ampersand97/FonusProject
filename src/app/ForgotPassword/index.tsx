import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { sendPasswordResetEmail } from "firebase/auth";
import  {auth} from '../../../firebaseConfig'

const { width, height } = Dimensions.get("window");

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");

  const handleResetPassword = async () => {
    if (!email) {
      alert("Por favor, insira seu e-mail.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("E-mail de redefinição de senha enviado. Verifique sua caixa de entrada.");
      router.push("/LoginScreen");
    } catch (error) {
      alert("Erro ao enviar e-mail de redefinição. Verifique o e-mail inserido.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewBackButton}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.6} onPress={() => router.push('/LoginScreen')}>
          <Text style={styles.text}><MaterialCommunityIcons name="chevron-left" size={36} color="black" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Redefinir Senha</Text>
      </View>
      <View style={{margin:20,alignItems:"center", justifyContent:"center"}}>
        <Text style={{fontSize:width*0.04}}>Por favor, digite seu e-mail:</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => setEmail(text)}
          value={email}
          label="E-mail"
          mode="outlined"
          right={
            <TextInput.Icon
              icon={({ size, color }) => (
                <MaterialCommunityIcons
                  name={email === "" ? "email-outline" : "email"}
                  size={size}
                  color="#47065B"
                />
              )}
            />
          }
          theme={{
            colors: {
              outline: "#47065B",
              background: "white",
              primary: "#47065B",
            },
            roundness: 10,
          }}
        />
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button1} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Enviar</Text>
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
    marginTop: "40%",
  },
  title: {
    color: "#47065B",
    fontSize: width * 0.1,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: "20%",
    marginBottom: "20%",
  },
  inputText: {
    width: width * 0.8,
    height: height * 0.06,
    marginTop: "5%",
    marginBottom: "5%",
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
    marginTop: "5%",
    marginBottom: "40%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  viewBackButton: {
    width: "90%",
    alignItems: "flex-start",
    marginTop: "20%",
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