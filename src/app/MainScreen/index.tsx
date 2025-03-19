import { router } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get('window');

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.viewBackButton}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.6} onPress={() => router.push('/LoginScreen')}>
          <Text style={styles.backButtonText}><MaterialCommunityIcons name="chevron-left" size={36} color="white" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleTextView}>
        <Text style={styles.titleText}>Vamos Começar!</Text>
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text}>
          Precisamos fazer algumas perguntas sobre o seu filho, para assim podermos selecionar os exercícios certos.
        </Text>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button2} activeOpacity={0.6} onPress={() => router.push('/ChildRegisterScreen')}>
          <Text style={styles.textButton2}>Avançar</Text>
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
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",
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
    marginBottom: "10%", 
  },
  button2: {
    width: "80%",
    height: "250%",
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
    height: "30%",
    justifyContent: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: 36,
  },
  textButton2: {
    color: "#47065B",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});