import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import styles from './Sonuc.Styles';
import sonuc1 from './../../../../sonucJson.json';
import Button from './../../../Components/Button';
const Sonuc = ({route, navigation}) => {
  const {sonuc} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={{width: 250, height: 250, resizeMode: 'contain'}}
          source={{uri: sonuc1[`${sonuc}`][0]}}
        />
      </View>
      <Text style={styles.hastalikText}>
        {sonuc} Hastalığını geçiriyor olabilirsiniz
      </Text>
      <Text style={styles.hastalikBilgi}>Tahmini tedavi süreci</Text>
      <Text style={styles.tanimText}>{sonuc1[`${sonuc}`][1]}</Text>
      <Text style={styles.hastalikBilgi}>{sonuc} nedir</Text>
      <Text style={styles.tedaviText}>{sonuc1[`${sonuc}`][2]}</Text>
      <Button onPress={() => navigation.navigate('Teshis')} title="Tamam" />
    </ScrollView>
  );
};
export default Sonuc;
