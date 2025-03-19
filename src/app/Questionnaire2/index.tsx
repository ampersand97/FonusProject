import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../../firebaseConfig';

const { width, height } = Dimensions.get("window");

export default function Questionnaire2() {
  const [question, setQuestion] = useState(1);
  const [questionText, setQuestionText] = useState(""); 
  const [topic, setTopic] = useState(1);
  const [topicsLeft, setTopicsLeft] = useState(4);
  const [topicsLeftText, setTopicsLeftText] = useState("");
  const [topicText, setTopicText] = useState("");

  const backQuestion = async () => {
    setQuestion(prevQuestion => prevQuestion - 1);
  };

  const nextQuestion = async () => {
    setQuestion(prevQuestion => prevQuestion + 1);
  };

  React.useEffect(() => {
    switch (question) {
      case 0:
        router.push('/Questionnaire2Start')
      case 1:
        setTopic(1);
        setTopicsLeft(1);
        setQuestionText("Seu filho escuta quando você o chama?");
        break;
      case 2:
        setTopic(2);
        setTopicsLeft(2);
        setQuestionText("Ele faz contato visual durante uma conversação?");
        break;
      case 3:
        setTopic(2);
        setTopicsLeft(3);
        setQuestionText("Ele troca ou emite sons?");
        break;
      case 4:
        setTopic(2);
        setTopicsLeft(4);
        setQuestionText("Ele costuma repetir palavras ou frases que ele ouve?");
        break;
      case 5:
        setTopic(3);
        setTopicsLeft(5);
        setQuestionText("Ele utiliza gestos (como: apontar, acenar ou balançar a cabeça) para se comunicar?");
        break;
      case 6:
        setTopic(4);
        setTopicsLeft(6);
        setQuestionText("Ele aprende novas palavras com facilidade?");
        break;
      case 7:
        setTopic(4);
        setTopicsLeft(7);
        setQuestionText("Ele costuma inventar novas palavras ou adaptar palavras difíceis?");
        break;
      case 8:
        setTopic(4);
        setTopicsLeft(8);
        setQuestionText("Ele canta músicas ou recita rimas infantis?");
        break;
      case 9:
        setTopic(4);
        setTopicsLeft(9);
        setQuestionText("Ele consegue acompanhar falas?");
        break;
      case 10:
        setTopic(5);
        setTopicsLeft(10);
        setQuestionText("O fonoaudiólogo conseguiu dizer o que ele tinha?");
        break;
      case 11:
        setTopic(5);
        setTopicsLeft(10);
        setQuestionText("Alguma mudança na saúde, audição ou comportamento desde a última consulta?");
        break;
      case 12:
        setTopic(5);
        setTopicsLeft(10);
        setQuestionText("A socialização dele mudou de alguma forma desde que parou a terapia?");
        break;
      case 13:
        router.push('/answerGathering');
        break;
      default:
        setQuestionText("");
    }
  }, [question]);

  React.useEffect(() => {
    switch (topic) {
      case 1:
        setTopicText("Audição");
        break;
      case 2:
        setTopicText("Expressão Verbal");
        break;
      case 3:
        setTopicText("Expressão Não-Verbal");
        break;
      case 4:
        setTopicText("Fala");
        break;
      default:
        setTopicText("");
    }
  }, [topic]);

  React.useEffect(() => {
    switch (topicsLeft) {
      case 1:
        setTopicsLeftText("1 de 1");
        break;
      case 2:
        setTopicsLeftText("1 de 3");
        break;
      case 3:
        setTopicsLeftText("2 de 3");
        break;
      case 4:
        setTopicsLeftText("3 de 3");
        break;
      case 5:
        setTopicsLeftText("1 de 1");
        break;
      case 6:
        setTopicsLeftText("1 de 4");
        break;
      case 7:
        setTopicsLeftText("2 de 4");
        break;
      case 8:
        setTopicsLeftText("3 de 4");
        break;
      case 9:
        setTopicsLeftText("4 de 4");
        break;
      default:
        setTopicsLeftText("");
    }
  }, [topicsLeft]);

  return (
    <View style={styles.container}>
      <View style={styles.viewBackButton}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.6} onPress={backQuestion}>
          <Text style={styles.text}><MaterialCommunityIcons name="chevron-left" size={36} color="black" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>{topicText}</Text>
      </View>
      <View style={styles.viewText}>
        <Text style={styles.smallText}>{topicsLeftText}</Text>
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text}>{questionText}</Text>
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
});