import { createStackNavigator } from '@react-navigation/stack';


import Americano from '../PastaBebidas/BebidaAmericano';
import Expresso from '../PastaBebidas/BebidaExpresso';
import Latte from '../PastaBebidas/BebidaLatte';
import BebidasMain from '../PastaBebidas/BebidasMain';



const Stack = createStackNavigator();

export default function RotaBebidas() {
    return (

        <Stack.Navigator name='BebidasMain' component={BebidasMain}>
            <Stack.Screen   name='Cardapio de bebidas' component={BebidasMain} />
            <Stack.Screen name='Americano' component={Americano} />
            <Stack.Screen name='Expresso' component={Expresso} />
            <Stack.Screen name='Latte' component={Latte} />
        </Stack.Navigator>


    )
}
