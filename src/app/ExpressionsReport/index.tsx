import { router } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get('window');

export default function ExpressionsReport() {
  return (
    <View style={styles.container}>
      <View style={styles.viewBackButton}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.6} onPress={() => router.push('/ReportScreen')}>
          <Text style={styles.backButtonText}><MaterialCommunityIcons name="chevron-left" size={36} color="white" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleTextView}>
        <Text style={styles.titleText}>Expressões</Text>
      </View>
      <View style={styles.viewText}>
          <Text style={styles.text}>
          A expressão infantil refere-se à forma como as crianças comunicam sentimentos, pensamentos e necessidades, seja por meio da fala, gestos, expressões faciais ou desenhos.
          Desde cedo, os bebês começam a se expressar através do choro, sorrisos e vocalizações.
          Com o crescimento, o vocabulário se expande e a comunicação verbal se torna mais complexa.
          </Text>
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
    fontSize: 24,
    fontWeight: "bold",
    textAlign:"center"
  },
  viewText: {
    width: "100%",
    alignItems: "center",
    marginTop: "10%",
    marginBottom: "120%",
  },
  viewButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: "50%", 
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
    height: "250%",
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton2: {
    color: "#47065B",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});