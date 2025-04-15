import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button, Linking, ScrollView, Image, TouchableOpacity, } from 'react-native';

export default function Home() {
  return (
    <View style={estilo.fundo}>
      <StatusBar style="auto" />
      <View >
        <ScrollView>
          <ScrollView horizontal >
            <Image style={estilo.ImagemEdit} source={require('../componentes/PastaFotos/1.png')} />
            <Image style={estilo.ImagemEdit} source={require('../componentes/PastaFotos/2.png')} />
          </ScrollView>
          <View style={estilo.card3}>
              <Text style={estilo.letra3}>
                Cafés
              </Text>
            </View>
          <View>
            <View style={estilo.card}>
              <Text style={estilo.letra2}>Top da semana</Text>
              <Image style={estilo.ImagemEdit2} source={require('../componentes/PastaFotos/c.jpg')} />
            </View>

            <View style={estilo.card2}>
              <Text style={estilo.letra2}>Matchas mais pedidos!</Text>
              <Image style={estilo.ImagemEdit2} source={require('../componentes/PastaFotos/matcha.jpg')} />
            </View>

            <View style={estilo.card}>
              <Text style={estilo.letra2}>Cafés geladinhos</Text>
              <Image style={estilo.ImagemEdit2} source={require('../componentes/PastaFotos/pink.jpg')} />
            </View>

            <View style={estilo.card2}>
              <Text style={estilo.letra2}>Achocolatados</Text>
              <Image style={estilo.ImagemEdit2} source={require('../componentes/PastaFotos/cc.jpg')} />
            </View>

            <View style={estilo.card3}>
              <Text style={estilo.letra3}>
                Pratos
              </Text>
            </View>

            <View style={estilo.card}>
              <Text style={estilo.letra2}>Top da semana</Text>
              <Image style={estilo.ImagemEdit2} source={require('../componentes/PastaFotos/croa.jpg')} />
            </View>

            <View style={estilo.card2}>
              <Text style={estilo.letra2}>Baratinhos</Text>
              <Image style={estilo.ImagemEdit2} source={require('../componentes/PastaFotos/pao.jpg')} />
            </View>

          </View>

          
          <View style={estilo.card}>
              <Text style={estilo.letra2}>Empanadinhos</Text>
              <Image style={estilo.ImagemEdit2} source={require('../componentes/PastaFotos/empanada.jpg')} />
            </View>

            <View style={estilo.card2}>
              <Text style={estilo.letra2}>Pratos</Text>
              <Image style={estilo.ImagemEdit2} source={require('../componentes/PastaFotos/foto.png')} />
            </View>




        </ScrollView>
      </View>


    </View>
  );
}
const estilo = StyleSheet.create({
  letra: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
  letra2: {
    fontSize: 19,
    color: 'white',
    textAlign: 'center',
   fontWeight:'bold',
   marginTop:7
  },
  letra3: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
   fontWeight:'bold',
   marginTop:6,
   
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    width: 180,
    height: 200,
    marginLeft: 14,
    backgroundColor:'#864332'
  },

  card2: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: -200,
    marginLeft: '53%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    width: 180,
    height: 200,
     backgroundColor:'#864332'

  },
  card3: {
    alignSelf:'center',
    marginTop:10,
    backgroundColor: 'white',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    width: 180,
    height: 50,
     backgroundColor:'#864332'

  },
  ImagemEdit: {
    height: 150,
    width: 430,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10
  },
  ImagemEdit2: {
    height: 150,
    width: 150,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 5,
    marginLeft: 15
  },
  fundo: {
    backgroundColor: '#450700'
  }

});