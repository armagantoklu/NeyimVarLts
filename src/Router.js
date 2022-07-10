import React from 'react';
import {StatusBar, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Giris from './screens/MainScreens/Giris';
import Home from './screens/MainScreens/Home';
import Kayit from './screens/MainScreens/Kayit';
import Harita from './screens/MainScreens/Harita';
import Teshis from './screens/MainScreens/Teshis';
import Akciger from './screens/Organlar/Akciger';
import Mide from './screens/Organlar/Mide';
import Bobrek from './screens/Organlar/Bobrek';
import Goz from './screens/Organlar/Goz';
import AgizVeDis from './screens/Organlar/AgizVeDis';
import Burun from './screens/Organlar/Burun';
import Kafa from './screens/Organlar/Kafa';
import Bogaz from './screens/Organlar/Bogaz';
import Ortopedi from './screens/Organlar/Ortopedi';
import Kalp from './screens/Organlar/Kalp';
import Sonuc from './screens/MainScreens/Sonuc';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#ff0000'} />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'NEYİM VAR',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              letterSpacing: 0.5,
            },
          }}
        />
        <Stack.Screen
          name="Giris"
          component={Giris}
          options={{
            title: 'NEYİM VAR',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              letterSpacing: 0.5,
            },
          }}
        />
        <Stack.Screen
          name="Kayit"
          component={Kayit}
          options={{
            title: 'NEYİM VAR',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              letterSpacing: 0.5,
            },
          }}
        />
        <Stack.Screen
          name="Harita"
          component={Harita}
          options={{
            title: 'NEYİM VAR',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              letterSpacing: 0.5,
            },
          }}
        />
        <Stack.Screen
          name="AgizVeDis"
          component={AgizVeDis}
          options={{
            title: 'NEYİM VAR',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              letterSpacing: 0.5,
            },
          }}
        />
        <Stack.Screen
          name="Burun"
          component={Burun}
          options={{
            title: 'NEYİM VAR',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              letterSpacing: 0.5,
            },
          }}
        />
        <Stack.Screen
          name="Kafa"
          component={Kafa}
          options={{
            title: 'NEYİM VAR',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              letterSpacing: 0.5,
            },
          }}
        />
        <Stack.Screen
          name="Bogaz"
          component={Bogaz}
          options={{
            title: 'NEYİM VAR',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              letterSpacing: 0.5,
            },
          }}
        />
        <Stack.Screen
          name="Ortapedi"
          component={Ortopedi}
          options={{
            title: 'NEYİM VAR',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              letterSpacing: 0.5,
            },
          }}
        />

        <Stack.Screen
          name="Sonuc"
          component={Sonuc}
          options={{
            title: 'NEYİM VAR',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              letterSpacing: 0.5,
            },
          }}
        />
        <Stack.Screen
          name="Mide"
          component={Mide}
          options={{
            title: 'NEYİM VAR',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              letterSpacing: 0.5,
            },
          }}
        />
        <Stack.Screen
          name="Bobrek"
          component={Bobrek}
          options={{
            title: 'NEYİM VAR',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              letterSpacing: 0.5,
            },
          }}
        />
        <Stack.Screen
          name="Kalp"
          component={Kalp}
          options={{
            title: 'NEYİM VAR',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              letterSpacing: 0.5,
            },
          }}
        />
        <Stack.Screen
          name="Akciger"
          component={Akciger}
          options={{
            title: 'NEYİM VAR',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              letterSpacing: 0.5,
            },
          }}
        />
        <Stack.Screen
          name="Goz"
          component={Goz}
          options={{
            title: 'NEYİM VAR',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              letterSpacing: 0.5,
            },
          }}
        />

        <Stack.Screen
          name="Teshis"
          component={Teshis}
          options={{
            title: 'NEYİM VAR',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              letterSpacing: 0.5,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
