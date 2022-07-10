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
import Icon from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import style from './Giris.Styles';
import {Formik} from 'formik';
import * as Yup from 'yup';

function Giris({navigation}) {
  React.useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      navigation.navigate('Teshis');
    }
  }, []);
  const deneme = values => {
    auth()
      .signInWithEmailAndPassword(values.eposta, values.sifre)
      .then(() => {
        navigation.navigate('Teshis');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
      });
  };
  const [hide, setHide] = useState(false);

  return (
    <ScrollView style={style.body}>
      <View style={style.logo_area}>
        <Image
          style={{width: 250, height: 250}}
          source={require('../../../../assets/images/hospital.png')}
        />
      </View>
      <View style={style.board}>
        <Formik
          initialValues={{
            eposta: '',
            sifre: '',
          }}
          onSubmit={deneme}
          validationSchema={Yup.object().shape({
            eposta: Yup.string().required('E-posta boş olamaz!'),
            sifre: Yup.string().required('Şifre boş olamaz!'),
          })}>
          {({values, handleSubmit, handleChange, errors}) => (
            <View>
              <View style={style.item}>
                <TextInput
                  style={style.input}
                  onChangeText={handleChange('eposta')}
                  value={values.eposta}
                  placeholder="E-posta"
                />
                <Icon
                  style={{position: 'absolute', left: 8, top: 19}}
                  name={'user'}
                  size={15}
                />
                {errors.eposta && (
                  <Text style={{color: 'red', marginLeft: 5}}>
                    {errors.eposta}
                  </Text>
                )}
              </View>
              <View style={style.item}>
                <TextInput
                  style={style.input}
                  onChangeText={handleChange('sifre')}
                  value={values.sifre}
                  placeholder="Şifre"
                  secureTextEntry={hide}
                />
                {errors.sifre && (
                  <Text style={{color: 'red', marginLeft: 5}}>
                    {errors.sifre}
                  </Text>
                )}
                <Icon
                  style={{position: 'absolute', left: 8, top: 19}}
                  name={'key'}
                  size={15}
                />
                <TouchableOpacity
                  style={{position: 'absolute', right: 15, top: 19}}
                  onPress={() => setHide(!hide)}>
                  <Icon name={hide ? 'eye' : 'eye-slash'} size={15} />
                </TouchableOpacity>
              </View>
              <View
                style={[
                  style.item,
                  {flexDirection: 'row', justifyContent: 'flex-end'},
                ]}>
                <TouchableOpacity>
                  <Text style={{color: 'black', fontSize: 14}}>
                    Şifreni mi unuttun?
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={style.item}>
                <TouchableOpacity style={style.button} onPress={handleSubmit}>
                  <Text style={{color: '#FFF', fontWeight: '700'}}>GİRİŞ</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>

        <View style={[style.item, {alignItems: 'center'}]}>
          <Text>Hala hesabınız yok mu?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Kayit')}>
            <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
              Kayıt için tıklayın.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Giris;
