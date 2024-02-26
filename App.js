//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Perfil from "./screens/perfil";
import Main from "./screens/main";
import Busqueda from "./screens/Busqueda";
import { NavigationContainer } from '@react-navigation/native';

/*
const Tab = createBottomTabNavigator();

const Apps = () => {
  return(
    <Tab.Navigator initialRouteName="Main">
      <Tab.Screen name="Main" component={Main} options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen name="Perfil" component={Perfil} options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen name="Busqueda" component={Busqueda} options={{headerShown: false}}></Tab.Screen>
    </Tab.Navigator>
  );

}*/

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name='Main' component={Main} options={{headerShown: false}}/>
        <Stack.Screen name='Perfil' component={Perfil} options={{headerShown: false}}/>
        <Stack.Screen name='Busqueda' component={Busqueda} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );  
}

export default App;
