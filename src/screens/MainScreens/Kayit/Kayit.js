import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Formik} from 'formik';
import style from './Kayit.Styles';
import * as Yup from 'yup';
function Kayit({navigation}) {
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [sifre, onChangeText] = useState();
  //const [sifretekrar,onChangeText1] = useState();
  const deneme = values => {
    auth()
      .createUserWithEmailAndPassword(values.eposta, values.sifre)
      .then(() => {
        navigation.navigate('Teshis');
      })
      .catch((error)=>{
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
      });
  };
  return (
    <ScrollView style={style.area}>
      <View style={style.board}>
        <Formik
          initialValues={{
            adsoyad: '',
            eposta: '',
            sifre: '',
            sifretekrar: '',
          }}
          onSubmit={deneme}
          validationSchema={Yup.object().shape({
            adsoyad: Yup.string().required('İsim soyisim boş olamaz!'),
            eposta: Yup.string().required('E posta boş olamaz!'),
            sifre: Yup.string()
              .required('Şifre boş olamaz!')
              .min(8, 'En az 8 karakter olmalı!'),
            sifretekrar: Yup.string()
              .required('Şifre tekrarı boş olamaz!')
              .min(8, 'En az 8 karakter olmalı!'),
          })}>
          {({values, handleSubmit, handleChange, errors}) => (
            <View>
              <View style={style.item}>
                <TextInput
                  style={style.input}
                  placeholder="Ad Soyad"
                  value={values.adsoyad}
                  onChangeText={handleChange('adsoyad')}
                />
                {errors.adsoyad && (
                  <Text style={style.errors_title}>{errors.adsoyad}</Text>
                )}
                <Icon
                  style={{position: 'absolute', left: 8, top: 19}}
                  name="user"
                  size={15}
                />
              </View>
              <View style={style.item}>
                <TextInput
                  style={style.input}
                  placeholder="E-posta"
                  value={values.eposta}
                  onChangeText={handleChange('eposta')}
                />
                {errors.eposta && (
                  <Text style={style.errors_title}>{errors.eposta}</Text>
                )}
                <Icon
                  style={{position: 'absolute', left: 8, top: 19}}
                  name="envelope"
                  size={15}
                />
              </View>
              <View style={style.item}>
                <TextInput
                  style={style.input}
                  placeholder="Şifre"
                  secureTextEntry={hide}
                  value={values.sifre}
                  onChangeText={handleChange('sifre')}
                />
                {errors.sifre && (
                  <Text style={style.errors_title}>{errors.sifre}</Text>
                )}
                <Icon
                  style={{position: 'absolute', left: 8, top: 19}}
                  name={'key'}
                  size={15}
                />
                <TouchableOpacity
                  style={{position: 'absolute', right: 15, top: 19}}
                  onPress={() => setHide(!hide)}>
                  <Icon name={hide ? 'eye' : 'eye-slash'} size={16} />
                </TouchableOpacity>
              </View>
              <View style={style.item}>
                <TextInput
                  style={style.input}
                  placeholder="Şifre Tekrar"
                  secureTextEntry={hide1}
                  value={values.sifretekrar}
                  onChangeText={handleChange('sifretekrar')}
                />
                {errors.sifretekrar && (
                  <Text style={style.errors_title}>{errors.sifretekrar}</Text>
                )}
                <Icon
                  style={{position: 'absolute', left: 8, top: 19}}
                  name={'key'}
                  size={15}
                />
                <TouchableOpacity
                  style={{position: 'absolute', right: 15, top: 19}}
                  onPress={() => setHide1(!hide1)}>
                  <Icon name={hide1 ? 'eye' : 'eye-slash'} size={16} />
                </TouchableOpacity>
              </View>

              <View style={style.item}>
                <TouchableOpacity style={style.button} onPress={handleSubmit}>
                  <Text
                    style={{color: '#FFF', fontSize: 15, fontWeight: '600'}}>
                    KAYIT OL
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
      <View style={style.logo_area}>
        <Image
          style={{width: 300, height: 300}}
          source={require('../../../../assets/images/register.png')}
        />
      </View>
      <View></View>
    </ScrollView>
  );
}


export default Kayit;
