import React, {useEffect} from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import database from './../../../../Database.json';
import styles from './Kalp.Styles';
import Karsilastir from './../../../Components/Karsilastir';
import Button from './../../../Components/Button';
import SearchBar from './../../../Components/SearchBar';
import Filter from './../../../Components/Filter';
const Kalp = ({navigation}) => {
  const [check, setCheck] = React.useState(false);
  const [sayfaNo, setSayfaNo] = React.useState(0);
  const [dizi, setDizi] = React.useState([]);
  const [list, setList] = React.useState(database.Kalp[4].belirti);
  const [data, setData] = React.useState('');
  useEffect(() => {
    setList(Filter(data, 'Kalp'));
  }, [data]);

  return (
    <View style={styles.bigContainer}>
      <Text style={styles.titleText}>
        Hastalıklarla ilgili genel olarak belirtiler
      </Text>
      <SearchBar placeholder={'Belirtinizi Yazınız'} onChangeText={setData} />

      <View style={styles.flatlistContainer}>
        <FlatList
          style={styles.flatList}
          data={list.slice(sayfaNo * 5, sayfaNo * 5 + 5)}
          renderItem={({item}) => {
            return (
              <View>
                <Text style={styles.flatListItem}>
                  <BouncyCheckbox
                    size={25}
                    fillColor="red"
                    unfillColor="#FFFFFF"
                    iconStyle={{borderColor: 'red'}}
                    disabled={check}
                    disableBuiltInState
                    isChecked={dizi.includes(item)}
                    onPress={() => {
                      setDizi([...dizi, item]);
                    }}
                  />
                  {item}
                </Text>
              </View>
            );
          }}
        />
        <View style={styles.pagiContainer}>
          <Button
            title="Önceki Sayfa"
            onPress={() => {
              if (sayfaNo > 0) {
                setSayfaNo(sayfaNo - 1);
              } else return;
            }}
          />
          <Text>{sayfaNo + 1}</Text>
          <Button
            title="Sonraki Sayfa"
            onPress={() => {
              if (
                sayfaNo <
                Math.ceil(database['Kalp'][4].belirti.length / 5) - 1
              ) {
                setSayfaNo(sayfaNo + 1);
              } else return;
            }}
          />
        </View>
      </View>

      <Button
        title="Onayla"
        onPress={async () => {
          if (dizi.length > 0) {
            const sonuc = await Karsilastir(dizi, database.Kalp);
            setDizi([]);
            navigation.navigate('Sonuc', {
              sonuc: sonuc,
            });
          } else {
            return setDizi([]);
          }
        }}
      />
    </View>
  );
};

export default Kalp;
