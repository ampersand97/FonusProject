import { router } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get('window');

export default function ReportScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.viewBackButton}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.6} onPress={() => router.push('/TreatmentQuestion')}>
          <Text style={styles.backButtonText}><MaterialCommunityIcons name="chevron-left" size={36} color="black" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleTextView}>
        <Text style={styles.titleText}>Relatório:</Text>
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text}>Desenvolvimento de uma criança de 7 anos</Text>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button1} activeOpacity={0.6} onPress={() => router.push('/AuditionReport')}>
          <Text style={styles.textButton1}>Audição</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} activeOpacity={0.6} onPress={() => router.push('/ExpressionsReport')}>
          <Text style={styles.textButton1}>Expressões</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} activeOpacity={0.6} onPress={() => router.push('/SpeechReport')}>
          <Text style={styles.textButton1}>Fala</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button2} activeOpacity={0.6} onPress={() => router.push('/TreatmentQuestion')}>
          <Text style={styles.textButton2}>Gerar Exercícios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    justifyContent: "space-between", 
    alignItems: "center",
    paddingVertical: "10%", 
  },
  titleTextView: {
    alignItems: "center",
    marginTop: "10%", 
  },
  titleText: {
    color: "#47065B",
    fontSize: 24,
    fontWeight: "bold",
    textAlign:"center"
  },
  viewText: {
    width: "80%",
    alignItems: "center",
  },
  viewButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: "20%",
  },
  viewBackButton: {
    width: "90%",
    alignItems: "flex-start",
  },
  backButton: {
    height: "20%",
    justifyContent: "center",
  },
  backButtonText: {
    color: "black",
    fontSize: 36,
  },
  button1: {
    width: "80%",
    height: "40%",
    borderColor: "#47065B",
    borderWidth: 2,
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
  },
  textButton1: {
    color: "#47065B",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  button2: {
    width: "80%",
    height: "250%",
    backgroundColor: "#47065B",
    borderRadius: 25,
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton2: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  text: {
    color: "#47065B",
    fontSize: 16,
    textAlign: "center",
    marginTop: "-25%",
  },
});