import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Linking, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function CardGold(props) {

  const [collapsed, setCollapsed] = useState(true);

  const abrir = () => {
    setCollapsed(!collapsed);
  };

  return (
    <ScrollView style={estilo.fundo}>

      <View style={estilo.Card} >
        <Image style={estilo.ImagemEditada}
          source={require('../PastaFotos/prato4.jpg')} />

        <View style={estilo.card2}>
          <Text style={estilo.preco}>R$ 79,99</Text>
        </View>

        <TouchableOpacity onPress={abrir}>
          <Text style={estilo.TextoEditado}>Ver mais</Text>
        </TouchableOpacity>
        {!collapsed && (
          <View style={estilo.card3}>
            <Text style={estilo.TextoEditado3}>Tabela nutricional</Text>
            <Text style={estilo.TextoEditado2}>Carboidratos - 10g</Text>
            <Text style={estilo.TextoEditado2}>Proteínas - 45g</Text>
            <Text style={estilo.TextoEditado2}>Calorias - 500 kcal</Text>
            <Text style={estilo.TextoEditado2}>Gorduras Totais - 30g</Text>
            <Text style={estilo.TextoEditado2}>Gorduras Saturadas - 12g</Text>
            <Text style={estilo.TextoEditado2}>Gorduras Trans - 0g</Text>
            <Text style={estilo.TextoEditado2}>Fibra Dietética - 2g</Text>
            <Text style={estilo.TextoEditado2}>Açúcares - 1g</Text>
            <Text style={estilo.TextoEditado2}>Sódio - 700mg</Text>
          </View>
        )}
      </View>

    </ScrollView>
  );
}

const estilo = StyleSheet.create({

  ImagemEditada: {
    height: '60%',
    width: '60%',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  TextoEditado: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white'
  },
  TextoEditado2: {
    textAlign: 'center',
    fontSize: 10,
    marginTop: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'black'
  },

  TextoEditado3: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'black'
  },

  preco: {
    textAlign: 'center',
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'black',
    marginTop: 4
  },
  Card: {
    alignSelf: 'center',
    borderRadius: 20,
    width: '85%',
    height: 300,
    backgroundColor: '#713021',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    marginTop: '20%'
  },

  card2: {
    alignSelf: 'center',
    borderRadius: 10,
    width: 100,
    height: 30,
    marginTop: 7,
    backgroundColor: '#FFC02E',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },

  card3: {
    alignSelf: 'center',
    borderRadius: 4,
    width: 200,
    height: 280,
    marginTop: 7,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },

  fundo: {
    backgroundColor: '#450700'
  }

});
