import React from 'react';
import {ScrollView, Image, Text, View, TouchableOpacity} from 'react-native';
import style from './Home.Styles';
function Home({navigation}) {
  return (
    <ScrollView
      style={style.body}
      contentContainerStyle={{flex: 1, justifyContent: 'space-around'}}>
      <View style={style.logo_area}>
        <Image
          style={{width: 300, height: 300}}
          source={require('../../../../assets/images/home.png')}
        />
      </View>
      <View>
        <View style={style.item}>
          <TouchableOpacity
            style={style.button}
            onPress={() => navigation.navigate('Giris')}>
            <Text style={style.title}>GİRİŞ YAP</Text>
          </TouchableOpacity>
        </View>
        <View style={style.item}>
          <TouchableOpacity
            style={style.button}
            onPress={() => navigation.navigate('Kayit')}>
            <Text style={style.title}>KAYIT OL</Text>
          </TouchableOpacity>
        </View>

        <View style={style.item}>
          <TouchableOpacity
            style={style.button}
            onPress={() => navigation.navigate('Harita')}>
            <Text style={style.title}>ÇEVREMDEKİ HASTANELER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;
