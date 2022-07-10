import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useEffect} from 'react';
import auth from '@react-native-firebase/auth';

import style from './Teshis.Styles';
function Teshis({navigation}) {
  //   useEffect(() => {
  //       console.log(teshis.Burun['Burun kanaması'].Lösemi)
  //   })
  useEffect(() => {
    const user = auth().currentUser;
    if (!user) {
      navigation.navigate('Giris');
    }
  }, []);
  const image = require('../../../../assets/images/kalp.png');
  const akciger = require('../../../../assets/images/akciger.png');
  const mide = require('../../../../assets/images/mide.png');
  const böbrek = require('../../../../assets/images/böbrek.png');
  const göz = require('../../../../assets/images/göz.png');
  const agız = require('../../../../assets/images/agız.png');
  const burun = require('../../../../assets/images/burun.png');
  const kafa = require('../../../../assets/images/kafa.png');
  const bogaz = require('../../../../assets/images/bogaz.png');
  const ortapedi = require('../../../../assets/images/ortapedi.png');

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View>
        <Text style={style.text_style}>
          Şikayetinizin olduğu organınızı seçiniz.
        </Text>
      </View>

      <View style={style.positions}>
        <TouchableOpacity
          style={style.item}
          onPress={() => navigation.navigate('Kalp')}>
          <Image source={image} style={style.image} />
          <Text style={style.text_style}>KALP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.item}
          onPress={() => navigation.navigate('Akciger')}>
          <Image source={akciger} style={style.image} />
          <Text style={style.text_style}>AKCİĞER</Text>
        </TouchableOpacity>
      </View>

      <View style={style.positions}>
        <TouchableOpacity
          style={style.item}
          onPress={() => navigation.navigate('Mide')}>
          <Image source={mide} style={style.image} />
          <Text style={style.text_style}>MİDE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.item}
          onPress={() => navigation.navigate('Bobrek')}>
          <Image source={böbrek} style={style.image} />
          <Text style={style.text_style}>BÖBREK</Text>
        </TouchableOpacity>
      </View>

      <View style={style.positions}>
        <TouchableOpacity
          style={style.item}
          onPress={() => navigation.navigate('Goz')}>
          <Image source={göz} style={style.image} />
          <Text style={style.text_style}>GÖZ</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.item}
          onPress={() => navigation.navigate('AgizVeDis')}>
          <Image source={agız} style={style.image} />
          <Text style={style.text_style}>AĞIZ VE DİŞ</Text>
        </TouchableOpacity>
      </View>
      <View style={style.positions}>
        <TouchableOpacity
          style={style.item}
          onPress={() => navigation.navigate('Burun')}>
          <Image source={burun} style={style.image} />
          <Text style={style.text_style}>BURUN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.item}
          onPress={() => navigation.navigate('Kafa')}>
          <Image source={kafa} style={style.image} />
          <Text style={style.text_style}>KAFA</Text>
        </TouchableOpacity>
      </View>

      <View style={style.positions}>
        <TouchableOpacity
          style={style.item}
          onPress={() => navigation.navigate('Bogaz')}>
          <Image source={bogaz} style={style.image} />
          <Text style={style.text_style}>BOĞAZ</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.item}
          onPress={() => navigation.navigate('Ortapedi')}>
          <Image source={ortapedi} style={style.image} />
          <Text style={style.text_style}>ORTAPEDİ</Text>
        </TouchableOpacity>
      </View>
      <View style={style.logoutContainer}>
        <TouchableOpacity
          style={style.item}
          onPress={() => {
            auth().signOut();
          }}>
          <View style={style.imageContainer}>
            <Image
              style={style.imageSide}
              source={require('./../../../../assets/images/Logout.png')}
            />
          </View>

          <Text style={style.text_style}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Teshis;
