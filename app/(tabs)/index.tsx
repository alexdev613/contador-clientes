import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>Pessoas no restaurante:</Text>

      <View style={styles.caixaContadora}>
        <Text style={styles.textoContador}>1</Text>
      </View>

      <View style={styles.areaBtns}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTexto}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTexto}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#111",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20
  },
  caixaContadora: {
    backgroundColor: "#222",
    borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  textoContador: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18
  },
  areaBtns: {
    marginTop: 20,
    maxHeight: 100,
    width: "90%",
    flex: 1,
    flexDirection: "row"
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00aeef",
    height: 40,
    margin: 18,
    borderRadius: 6,
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
});
