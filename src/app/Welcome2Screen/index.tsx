import { router } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get('window');

export default function Welcome2Screen() {
  return (
    <View style={styles.container}>
      <View style={styles.viewBackButton}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.6} onPress={() => router.push('/WelcomeScreen')}>
          <Text style={styles.text}><MaterialCommunityIcons name="chevron-left" size={36} color="white" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleTextView}>
        <Text style={styles.titleText}>Olá!</Text>
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text}>
          Antes de começarmos a consulta:
        </Text>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button1} activeOpacity={0.6} onPress={() => router.push('/CreateAccountScreen')}>
          <Text style={styles.textButton1}>Não possuo cadastro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} activeOpacity={0.6} onPress={() => router.push('/LoginScreen')}>
          <Text style={styles.textButton2}>Sou cadastrado</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#47065B",
    justifyContent: "space-between", 
    alignItems: "center",
    paddingVertical: "10%", 
  },
  titleTextView: {
    alignItems: "center",
    marginTop: "10%", 
  },
  titleText: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
  viewText: {
    width: "80%",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  viewButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: "20%",
  },
  button1: {
    width: "80%",
    height: "90%",
    marginBottom: 20,
    backgroundColor: "#47065B",
    borderRadius: 25,
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    width: "80%",
    height: "90%",
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  viewBackButton: {
    width: "90%",
    alignItems: "flex-start",
  },
  backButton: {
    height: "10%",
    justifyContent: "center",
  },
  textButton1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  textButton2: {
    color: "#47065B",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});