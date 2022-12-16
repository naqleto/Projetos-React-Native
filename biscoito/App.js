
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  const imgFundo = './src/fundo.jpg'
  const imgFundo1 = './src/fundo2.jpg'

  let frases = [
    ' Siga os bons e aprenda com eles. ',
    ' O bom-senso vale muito mais que muito conhecimento. ',
    ' O riso é a menor distância entre duas pessoas. ',
    ' Deixe de lado as suas peocupações e seja feliz. ',
    ' Realize o óbivio, pense no improvavel e conquiste o impossivel. ',
    ' Acredite em milhagres, mas não dependa deles. ',
    ' A maior barreira para o sucesso é o medo do fracasso. ',
    ' Quando cair, aproveite para permanecer no chão e descansar um momento! ',
    ' Não fique engolindo sapos, afinal o seu estômago não é um brejo! ',
    ' Quando não quiser se decepcionar, simplesmente não faça nada! ',
    ' Feche os olhos e vá em frente! Acredite, do chão você não passa! ',
    ' Lembre-se que o importante na vida não é ganhar, mas competir e não perder! ',
    ' Sorria sempre em qualquer buraco que você se meter. Pois, ainda não há terra por cima! ',
    ' O que é seu pode até estar guardado, mas você tem que encontrar o mapa. ',
    ' Se por acaso a vida te der limões, aproveite e faça uma deliciosa caipirinha.',
    ' Se você precisar superar uma barra, espero que seja de chocolate! ',
    ' Uma receita para o sucesso: corra atrás dos seus sonhos da mesma forma que corre para o banheiro quando está com diarreia! ',
    ' Respire fundo e beba mais uma dose! ',
    ' Conquiste sonhos da mesma forma que você conquista crushs! ',
    ' Busque alcançar os seus objetivos com o mesmo ânimo que você sai para balada.',
    ' A vida pode não ser uma festa, mas é preciso aprender a dançar conforme a música.',
    ' Você não vai encontrar um rumo para a sua vida no Google Maps! ',
    ' Viva todos os dias como se você fosse morrer. Por que, um dia você vai mesmo! ',
    ' Faça boas escolhas, para não ter que sair correndo das erradas ',
  ];

  function quebrabiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length)

    setTextoFrase('"' + frases[numeroAleatorio] + '"');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciar() {
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');

  }

  return (
    <View style={styles.container}>
      <ImageBackground
      source={require(imgFundo)}
      style={styles.imageFundo}
      >
        
      <Image
        source={img}
        style={styles.img}
      />

      <Text style={styles.textofrase}> {textoFrase} </Text>

      <TouchableOpacity style={styles.botao} onPress={quebrabiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { marginTop: 13, borderColor: '#273142' }]} onPress={reiniciar}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#273142' }]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:''
  },
  img: {
    width: 230,
    height: 230,
  },
  textofrase: {
    fontSize: 20,
    color: '#1c140d',
    margin: 30,
    fontStyle: 'gold',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#091055',
    borderWidth: 2,
    borderRadius: 30,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#091055'
  },
  imageFundo:{
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
})

export default App;