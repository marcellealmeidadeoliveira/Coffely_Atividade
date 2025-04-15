import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';

export default function Comidas(props) {

  const [collapsed, setCollapsed] = useState(true);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(true);

  const Clicar = () => {
    console.log('Voce selecionou Al Mare!')
    props.navigation.navigate('FiletVe');
  };

  const Clicar2 = () => {
    console.log('Voce selecionou Filet Ve!')
    props.navigation.navigate('AlMare');
  };

  const Clicar3 = () => {
    console.log('Voce selecionou Card Gold!')
    props.navigation.navigate('CardGold');
  };

  const abrir = () => {
    setCollapsed(!collapsed);
  };
  const abrir2 = () => {
    setCollapsed2(!collapsed2);
  };
  const abrir3 = () => {
    setCollapsed3(!collapsed3);
  };

  return (
    <ScrollView style={estilo.fundo}>
      <View>

        <StatusBar style="auto" />

        <TouchableOpacity onPress={Clicar2}>
          <View style={estilo.Card}>
            <Image style={estilo.ImagemEditada}
              source={require('../PastaFotos/prato1.png')} />

            <Text style={estilo.TextoEditado}>Al Mare</Text>
          </View>
          <TouchableOpacity onPress={abrir}>
            <Text style={estilo.TextoEditado2}>Ver mais</Text>
          </TouchableOpacity>
          {!collapsed && (
            <View style={estilo.card3}>
              <Text style={estilo.TextoEditado3}>Al Mare é preparado com carinho, oferecendo uma textura macia e saborosa, acompanhado de uma salada fresca e leve que complementa perfeitamente o prato.</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={Clicar}>
          <View style={estilo.Card}>
            <Image style={estilo.ImagemEditada}
              source={require('../PastaFotos/prato2.jpg')} />

            <Text style={estilo.TextoEditado}>Filet Ve</Text>
          </View>
          <TouchableOpacity onPress={abrir2}>
            <Text style={estilo.TextoEditado2}>Ver mais</Text>
          </TouchableOpacity>
          {!collapsed2 && (
            <View style={estilo.card6}>
              <Text style={estilo.TextoEditado3}>Filet Ve O Filet de Frango Grelhado é uma opção suculenta e saudável, feito com meio peito de frango temperado e grelhado na perfeição, garantindo um sabor leve e delicioso.</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={Clicar3}>
          <View style={estilo.Card}>
            <Image style={estilo.ImagemEditada}
              source={require('../PastaFotos/prato4.jpg')} />

            <Text style={estilo.TextoEditado}>Card Gold</Text>
          </View>
          <TouchableOpacity onPress={abrir3}>
            <Text style={estilo.TextoEditado2}>Ver mais</Text>
          </TouchableOpacity>
          {!collapsed3 && (
            <View style={estilo.card5}>
              <Text style={estilo.TextoEditado3}>Card Gold é um prato sofisticado e imponente, onde a carne é preparada com todo o cuidado, realçando seu sabor robusto.</Text>
            </View>
          )}
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  ImagemEditada: {
    height: 125,
    width: 150,
    marginLeft: 14,
    borderRadius: 5,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  TextoEditado: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    marginTop: '-20%',
    marginRight: -140
  },
  TextoEditado2: {
    textAlign: 'center',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  TextoEditado3: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    padding:5
  },
  Card: {
    alignSelf: 'center',
    borderRadius: 10,
    width: '85%',
    height: 150,
    backgroundColor: '#713021',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 25,
    marginBottom: 15
  },
  card2: {
    alignSelf: 'center',
    borderRadius: 4,
    width: 200,
    height: 150,
    marginTop: 7,
    backgroundColor: 'white',
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
    height: 150,
    marginTop:7,
    backgroundColor: '#864332',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  card4: {
    alignSelf: 'center',
    borderRadius: 4,
    width: 200,
    height: 190,
    marginTop: 7,
    backgroundColor: '#864332',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },

  card5: {
    alignSelf: 'center',
    borderRadius: 4,
    width: 200,
    height: 135,
    marginTop: 7,
    backgroundColor: '#864332',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  card6: {
    alignSelf: 'center',
    borderRadius: 4,
    width: 200,
    height: 165,
    marginTop:7,
    backgroundColor: '#864332',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  fundo: {
    backgroundColor: '#450700',
  }
});
