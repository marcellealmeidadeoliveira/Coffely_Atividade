import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';
import React, { useState } from 'react';



export default function BebidasMain(props) {

  const [collapsed, setCollapsed] = useState(true);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(true);
  const Clicar = () => {
    console.log('Voce selecionou Cafe americano!')
    props.navigation.navigate('Americano');
  };

  const Clicar2 = () => {
    console.log('Voce selecionou Cafe Latte!')
    props.navigation.navigate('Latte');
  };


  const Clicar3 = () => {
    console.log('Voce selecionou Cafe Expresso!')
    props.navigation.navigate('Expresso');
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

        <TouchableOpacity onPress={Clicar}>
          <View style={estilo.Card}>
            <Image style={estilo.ImagemEditada}
              source={require('../PastaFotos/cafeAmericano.jpg')} />

            <Text style={estilo.TextoEditado}>Cafe Americano</Text>
          </View>
          <TouchableOpacity onPress={abrir}>

            <Text style={estilo.TextoEditado2}>Ver mais</Text>

          </TouchableOpacity>
          {!collapsed && (
            <View style={estilo.card3}>
              <Text style={estilo.TextoEditado3}>O café americano é feito ao adicionar água quente ao café expresso. O expresso é preparado normalmente e, em seguida, a água é adicionada para diluir o sabor, resultando em uma bebida mais suave e menos concentrada.</Text>
            </View>
          )}
        </TouchableOpacity>


        <TouchableOpacity onPress={Clicar2}>
          <View style={estilo.Card}>

            <Image style={estilo.ImagemEditada}
              source={require('../PastaFotos/Latte.jpg')} />

            <Text style={estilo.TextoEditado}>Cafe Latte</Text>
          </View>
          <TouchableOpacity onPress={abrir2}>

            <Text style={estilo.TextoEditado2}>Ver mais</Text>

          </TouchableOpacity>

          {!collapsed2 && ( 
              <View style={estilo.card6}>
              <Text style={estilo.TextoEditado3}>O café latte é feito com uma base de café expresso, ao qual é adicionada uma quantidade significativa de leite vaporizado. A mistura resulta em uma bebida suave, com sabor de café menos intenso e uma textura cremosa devido ao leite.</Text> 
              </View>
              )}
        </TouchableOpacity>

        <TouchableOpacity onPress={Clicar3}>
          <View style={estilo.Card}>
            <Image style={estilo.ImagemEditada}
              source={require('../PastaFotos/expresso.jpg')} />

            <Text style={estilo.TextoEditado}>Cafe Expresso</Text>
          </View>
          <TouchableOpacity onPress={abrir3}>
            <Text style={estilo.TextoEditado2}>Ver mais</Text>

          </TouchableOpacity>
          {!collapsed3 && ( 
              <View style={estilo.card5}>
              <Text style={estilo.TextoEditado3}>O café expresso é feito ao forçar água quente sob alta pressão através de grãos de café finamente moídos. O resultado é uma bebida intensa e concentrada, com um sabor forte e encorpado.</Text> 
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

