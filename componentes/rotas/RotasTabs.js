import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';


import Home from '../Home';
import RotaBebidas from './RotaBebidas';
import RotasComidas from'../rotas/RotasComidas'




const Tab = createBottomTabNavigator();

export default function RotasTabs() {
    return (

        <Tab.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: "#00ff00", }}>
            <Tab.Screen name='Bebidas' component={RotaBebidas} options={{ tabBarLabel: 'BebidasMain', tabBarIcon: ({ color, size }) => (<FontAwesome name="coffee" size={24} color="black" />), }} />

            <Tab.Screen name='Home' component={Home} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name='home' color={color} size={size} />) }} />

            <Tab.Screen name='RotasComidas' component={RotasComidas} options={{ tabBarLabel: 'Comidas', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name='food-drumstick' color={color} size={size} />) }} />




        </Tab.Navigator>


    );
};