import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { signIn } from "../../components/authenticator";

const { width, height } = Dimensions.get("window");

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSignIn = async()=>{
    const result = await signIn(email,password);
    if(result.sucess){
        setEmail('');
        setPassword('');
        router.push('/MainScreen');
    }
    else{
        alert(result.message);
    }
}

const Database = async()=>{
    if(!email || !password){
        alert("Preencha os campos antes de prosseguir!");
        return;       
    }else{
       await handleSignIn();
    }
}

  return (
    <View style={styles.container}>
      <View style={styles.viewBackButton}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.6} onPress={() => router.push('/Welcome2Screen')}>
          <Text style={styles.text}><MaterialCommunityIcons name="chevron-left" size={36} color="black" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Login</Text>
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
        <TextInput
          style={styles.inputText}
          label="Senha"
          onChangeText={(text) => setPassword(text)}
          mode="outlined"
          right={
            <TextInput.Icon
              icon={({ size, color }) => (
                <MaterialCommunityIcons
                  name={passwordVisible ? "eye-off" : "eye"}
                  size={size}
                  color="#47065B"
                  onPress={togglePasswordVisibility}
                />
              )}
            />
          }
          value={password}
          secureTextEntry={passwordVisible}
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
        <TouchableOpacity style={styles.button1} onPress={Database}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> router.push('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
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
    fontSize: 36,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: "20%",
    marginBottom: "20%",
  },
  inputText: {
    width: "80%",
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
    height: "20%",
    backgroundColor: "#47065B",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%", 
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  viewBackButton: {
    width: "90%",
    alignItems: "flex-start",
    marginTop: "25%",
  },
  backButton: {
    justifyContent: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  forgotPasswordText: {
    color: "#47065B",
    fontSize: 12,
    textDecorationLine: "underline",
    marginBottom: "190%", 
  },
});