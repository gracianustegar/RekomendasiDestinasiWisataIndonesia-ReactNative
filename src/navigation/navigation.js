// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import recommend from '../screens/Recommend';
import rajaampat from '../nmwisata/Rajaampat';
import tampilanawal from '../screens/Tampilanawal';
import home from '../screens/Home';
import SplashScreen from '../screens/SplashScreen'
import pulaukomodo from '../nmwisata/Pulaukomodo';
import nusapenida from '../nmwisata/Nusapenida';
import Diengkawah1 from '../rekomendasi/Diengkawah1';
import Telagasarangan1 from '../rekomendasi/Telagasarangan1';
import Tamanbunganusantara1 from '../rekomendasi/Tamanbunganusantara1';
import Spesial from '../screens/Spesial';
import Kawahputih1 from '../rekomendasi/Kawahputih1';
import Gunungrinjani from '../nmwisata/Gunungrinjani';
import Pantaipandawa from '../akhirtahun/Pantaipandawa';
import Pantaisumba from '../akhirtahun/Pantaisumba';
import Tanahlot from '../akhirtahun/Tanahlot';
import Informasi from '../informasi/informasi';



const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Recommend" component={recommend} />
        <Stack.Screen name='Rajaampat' component={rajaampat} />
        <Stack.Screen name='Pulaukomodo' component={pulaukomodo}/>
        <Stack.Screen name='Nusapenida' component={nusapenida}/>
        <Stack.Screen name='Telagasarangan1' component={Telagasarangan1}/>
        <Stack.Screen name='Spesial' component={Spesial}/>
        <Stack.Screen name='Gunungrinjani' component={Gunungrinjani}/>
        <Stack.Screen name='Pantaipandawa' component={Pantaipandawa}/>
        <Stack.Screen name='Pantaisumba' component={Pantaisumba}/>
        <Stack.Screen name='Diengkawah1' component={Diengkawah1}/>
        <Stack.Screen name='Kawahputih1' component={Kawahputih1}/>
        <Stack.Screen name='Tamanbunganusantara1' component={Tamanbunganusantara1}/>
        <Stack.Screen name='Tanahlot' component={Tanahlot}/>
        <Stack.Screen name='Informasi' component={Informasi}/>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;