import { router } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get('window');

export default function TreatmentQuestion() {
  return (
    <View style={styles.container}>
      <View style={styles.viewBackButton}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.6} onPress={() => router.push('/ChildRegisterScreen')}>
          <Text style={styles.backButtonText}><MaterialCommunityIcons name="chevron-left" size={36} color="white" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleTextView}>
        <Text style={styles.titleText}>O paciente já foi consultado por um fonoaudiólogo?</Text>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button2} activeOpacity={0.6} onPress={() => router.push('/Questionnaire1')}>
          <Text style={styles.textButton2}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} activeOpacity={0.6} onPress={() => router.push('/Questionnaire2')}>
          <Text style={styles.textButton2}>Não</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} activeOpacity={0.6} onPress={() => router.push('/Questionnaire3')}>
          <Text style={styles.textButton2}>Iniciou tratamento mas não finalizou</Text>
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
    color: "white",
    fontSize: 36,
  },
  button2: {
    width: "80%",
    height: "40%",
    borderRadius: 25,
    marginBottom: "5%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton2: {
    color: "#47065B",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16  ,
  },
});