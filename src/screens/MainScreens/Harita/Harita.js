import React from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './Harita.Styles';
import hastane from '../../../../hastane.json';
import MapView from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';
function Harita({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView
        style={{height: 750}}
        initialRegion={{
          latitude: 39.1062061,
          longitude: 31.7428407,
          latitudeDelta: 8,
          longitudeDelta: 8,
        }}>
        {hastane.data.map((item, key) => {
          if (typeof item.latitude != 'object') {
            return (
              <Marker
                title={item.ad}
                description={item.sehir}
                coordinate={{
                  latitude: item.longitude,
                  longitude: item.latitude,
                }}>
                <View
                  style={{
                    width: 36,
                    height: 36,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                  }}></View>
              </Marker>
            );
          }
        })}
      </MapView>
    </SafeAreaView>
  );
}

export default Harita;
