import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  const [limite, setLimite] = useState(10);

  function mudarContador(contador: number) {

    if (contador <= -1) return;

    if (contador >= limite) {
      setContador(10);
      return;
    }

    setContador(contador);

  }

  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>Pessoas no restaurante:</Text>

      {contador >= limite && (
        <Text style={styles.warning}>
          Restaurante está no seu limite de pessoas
        </Text>
      )}

      {contador <= 0 && (
        <Text style={styles.warning}>
          Restaurante está sem clientes
        </Text>
      )}

      <View style={styles.caixaContadora}>
        <Text style={styles.textoContador}> {contador} </Text>
      </View>

      <View style={styles.areaBtns}>
        <Pressable style={styles.btn} onPress={() => mudarContador(contador + 1)}>
          <Text style={styles.btnTexto}>Adicionar</Text>
        </Pressable>

        <Pressable style={styles.btn} onPress={() => mudarContador(contador - 1)}>
          <Text style={styles.btnTexto}>Remover</Text>
        </Pressable>
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
    marginBottom: 20,
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
    backgroundColor: "#007bff",
    height: 40,
    margin: 18,
    borderRadius: 6,
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  warning: {
    backgroundColor: "#F8B135",
    padding: 4,
    borderRadius: 4,
    marginBottom: 10,
  }
});
