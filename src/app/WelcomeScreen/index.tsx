import { router } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleTextView}>
        <Text style={styles.titleText1}>Bem vindo ao</Text>
        <Text style={styles.titleText2}>FONUS</Text>
      </View>
      <View style={styles.viewImage}>
        <Image style={styles.image} source={require('../../../assets/ImageFirstScreen.png')} />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text}>
          Espaço onde a saúde e o bem-estar da comunicação são prioridades para alcançar sua melhor versão.
        </Text>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={()=>router.push('/Welcome2Screen')}>
            <Text style={styles.textButton}>Avançar</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  titleTextView: {
    marginTop: "5%",
    alignItems: "center",
  },
  titleText1: {
    color: "white",
    fontSize: 20,
  },
  titleText2: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#A425C4",
  },
  viewImage: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60%"
  },
  image: {
    resizeMode: "contain",
    width: "80%",
    height: "50%",
  },
  viewText: {
    width: "80%",
    marginBottom: "5%",
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  viewButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: "5%",
  },
  button: {
    width: "80%",
    height: "250%",
    backgroundColor: "#47065B",
    borderRadius: 25,
    borderColor: "white",
    borderWidth:2,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton:{
    color:"white",
  }
});