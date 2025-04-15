import { createStackNavigator } from '@react-navigation/stack';

import AlMare from '../PastaComidas/AlMare'
import Comidas from '../PastaComidas/Comidas'
import FiletVe from '../PastaComidas/FiletVe'
import CardGold from '../PastaComidas/CardGold'



const Stack = createStackNavigator();

export default function RotasComidas() {
    return (

        <Stack.Navigator name='Comidas' component={Comidas}>
            <Stack.Screen   name='Cardapio de Comidas' component={Comidas} />
            <Stack.Screen name='AlMare' component={AlMare} />
            <Stack.Screen name='FiletVe' component={FiletVe} />
            <Stack.Screen name='CardGold' component={CardGold} />
            
        </Stack.Navigator>


    )
}
