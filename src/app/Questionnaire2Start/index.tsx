import { router } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get('window');

export default function Questionnaire2Start() {
  return (
    <View style={styles.container}>
      <View style={styles.viewBackButton}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.6} onPress={() => router.push('/WelcomeScreen')}>
          <Text style={styles.backButtonText}><MaterialCommunityIcons name="chevron-left" size={36} color="white" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleTextView}>
        <Text style={styles.titleText}>Responda o questionário a seguir sobre seu filho, para finalizarmos.</Text>
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%", 
  },
  titleText: {
    color: "white",
    fontSize: width * 0.05,
    fontWeight: "bold",
    textAlign:"center"
  },
  viewText: {
    width: "80%",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: width * 0.05,
    textAlign: "center",
  },
  viewButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: "10%", 
  },
  viewBackButton: {
    width: "90%",
    alignItems: "flex-start",
  },
  backButton: {
    height: height * 0.01,
    justifyContent: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: width * 0.1,
  },
  button2: {
    width: "80%",
    height: height * 0.07,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton2: {
    color: "#47065B",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: width * 0.04,
  },
});