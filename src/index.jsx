import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import FormScreen from './screens/FormScreen';
import LoginScreen from './screens/LoginScreen';
import CadScreen from './screens/CadScreen';
import LocuScreen from './screens/LocuScreen';
import LocutoresScreen from './screens/LocutoresScreen';
import ContatoScreen from './screens/ContatoScreen';
import WeekScreen from './screens/WeekScreen';
import WeekendyScreen from './screens/WeekendyScreen';
import PriScreen from './screens/PriScreen';
import InicioScreen from './screens/InicioScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator();



export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>

      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="FormScreen" component={FormScreen} />
        <Drawer.Screen name="WeekScreen" component={WeekScreen} />
        <Drawer.Screen name="Cadastrar" component={CadScreen} />
        <Drawer.Screen name="LocuScreen" component={LocuScreen} />
        <Drawer.Screen name="LocutoresScreen" component={LocutoresScreen} />
        <Drawer.Screen name="ContatoScreen" component={ContatoScreen} />
        <Drawer.Screen name="WeekendyScreen" component={WeekendyScreen} />
        <Drawer.Screen name="PriScreen" component={PriScreen} />
        <Drawer.Screen name="InicioScreen" component={InicioScreen} />
        <Drawer.Screen name="LoginScreen" options={{ headerShown: false }}>

          {props => <LoginScreen {...props} onLogin={handleLogin} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
