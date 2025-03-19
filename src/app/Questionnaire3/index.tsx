import React, { useState } from "react";
import { StyleSheet, Image, View, Text, Dimensions, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../../firebaseConfig';

const { width, height } = Dimensions.get("window");

export default function Questionnaire3() {
  const [question, setQuestion] = useState(1);
  const [questionText, setQuestionText] = useState(""); 

  const backQuestion = async () => {
    setQuestion(prevQuestion => prevQuestion - 1);
  };

  const nextQuestion = async () => {
    setQuestion(prevQuestion => prevQuestion + 1);
  };

  React.useEffect(() => {
    switch (question) {
      case 0:
        router.push('/TreatmentQuestion')
      case 1:
        setQuestionText("O fonoaudiólogo conseguiu dizer o que ele tinha?");
        break;
      case 2:
        setQuestionText("Alguma mudança na saúde, audição ou comportamento desde a última consulta?");
        break;
      case 3:
        setQuestionText("A socialização dele mudou de alguma forma desde que parou a terapia?");
        break;
      case 4:
        router.push('/AnswerGathering');
        break;
      default:
        setQuestionText("");
    }
  }, [question]);

  return (
    <View style={styles.container}>
      <View style={styles.viewBackButton}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.6} onPress={backQuestion}>
          <Text style={styles.text}><MaterialCommunityIcons name="chevron-left" size={36} color="black" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text}>{questionText}</Text>
      </View>
      <View style={styles.viewImage}>
        <Image style={styles.image} source={require('../../../assets/Questionnaire3Image.png')} />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.button1} onPress={nextQuestion}>
            <Text style={styles.buttonText}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={nextQuestion}>
            <Text style={styles.buttonText}>Não</Text>
          </TouchableOpacity>
        </View>
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
  },
  title: {
    color: "#47065B",
    fontSize: 36,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: "-40%",
    marginBottom: "20%",
  },
  viewButton: {
    width: "100%",
    alignItems: "center",
    marginTop: "50%",
    marginBottom: "20%",
    flexDirection: "row",
  },
  button1: {
    width: "25%",
    height: "50%",
    backgroundColor: "#47065B",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    marginHorizontal: "12%",
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
    marginTop: "35%",
    marginBottom: "25%",
  },
  backButton: {
    height: "20%",
    justifyContent: "center",
  },
  backButtonText: {
    color: "black",
    fontSize: 36,
  },
  text: {
    color: "#47065B",
    fontSize: 16,
    textAlign: "center",
    marginTop: "-75%",
  },
  smallText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: "-50%",
  },
  viewText: {
    width: "80%",
    alignItems: "center",
    marginTop: "40%",
  },
  viewImage: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60%",
    marginTop: "-75%"
  },
  image: {
    resizeMode: "contain",
    width: "80%",
    height: "50%",
  },
});