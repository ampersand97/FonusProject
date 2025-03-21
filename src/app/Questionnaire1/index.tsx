import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { signIn } from "../../components/authenticator";
import { Picker } from "@react-native-picker/picker";

const { width, height } = Dimensions.get("window");

export default function Questionnaire1() {
  const [difficulties, setDifficulties] = useState();
  const [conditions, setConditions] = useState();
  const pickerRef = useRef<Picker<undefined>>(null);

  return(
    <View style={styles.container}>
      <View style={styles.viewBackButton}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.6} onPress={() => router.push('/TreatmentQuestion')}>
          <Text style={styles.text}><MaterialCommunityIcons name="chevron-left" size={36} color="black" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Para prosseguirmos</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Selecione as dificuldades do seu filho:</Text>
      <Picker
        ref={pickerRef}
        selectedValue={difficulties}
        onValueChange={(itemValue)=>{
            setDifficulties(itemValue)
        }}
        style={styles.button2}
        >
        <Picker.Item label='Atraso na aquisição de palavras' value={'D_AAP'}/>
        <Picker.Item label='Dificuldades com a articulação' value={'D_DART'}/>
        <Picker.Item label='Problemas de compreensão' value={'D_PC'}/>
        <Picker.Item label='Dificuldade com a gramática' value={'D_DG'}/>
        <Picker.Item label='Alterações fonológicas' value={'D_AFON'}/>
        <Picker.Item label='Problemas de fluência' value={'D_PF'}/>
        <Picker.Item label='Deficiência auditiva' value={'D_DAUD'}/>
        <Picker.Item label='Dificuldades de socialização' value={'D_DS'}/>
    </Picker>
      <Text style={styles.text}>Agora, selecione se ele possui alguma dessas condições:</Text>
    <Picker
        ref={pickerRef}
        selectedValue={conditions}
        onValueChange={(itemValue)=>{
            setConditions(itemValue)
        }}
        style={styles.button2}
    >
        <Picker.Item label=' Atraso na Aquisição da Linguagem (AAL)' value={'C_AAL'}/>
        <Picker.Item label='Hipernasalidade' value={'C_HN'}/>
        <Picker.Item label='Apraxia de Fala na Infância (AFI)' value={'C_AFI'}/>
        <Picker.Item label='Dislexia' value={'C_DSLX'}/>
        <Picker.Item label='Transtorno do Espectro Autista (TEA)' value={'C_TEA'}/>
        <Picker.Item label='Distúrbio Fonológico' value={'C_DF'}/>
        <Picker.Item label='Hipotonia Orofacial' value={'C_HO'}/>
        <Picker.Item label='Gagueira Infantil (Disfluência)' value={'C_GI'}/>
    </Picker>
     </View>
     <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button1} onPress={() => router.push('/ReportScreen')}>
          <Text style={styles.buttonText}>Avançar</Text>
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
    marginTop: "-30%",
    marginBottom: "15%",
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
  viewButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: "5%",
  },
  button1: {
    width: "80%",
    height: "30%",
    backgroundColor: "#47065B",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
    marginBottom: "30%", 
  },
  button2: {
    width: "80%",
    height: "80%",
    marginTop: "5%",
    marginBottom: "5%", 
    backgroundColor: "#C6C6C6",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  viewBackButton: {
    width: "90%",
    alignItems: "flex-start",
    marginTop: "-5%",
    marginBottom: "50%",
  },
  backButton: {
    height: "40%",
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
  },
});