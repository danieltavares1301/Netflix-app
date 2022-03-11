import React, {useState, useEffect} from 'react';
import {Text, View, Image, ActivityIndicator} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import styles from './Styles';
import apiLocal from '../../services/apiLocal';
import AsyncStorage from '@react-native-community/async-storage';

const Login = ({navigation}) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  // 0 - carregando, 1 - logado, 2 - deslogado
  const [logged, setLogged] = useState(0);
  const [error, setError] = useState();

  const saveUser = async user => {
    await AsyncStorage.setItem('@token', JSON.stringify(user));
  };
  const checkLogin = async () => {
    const user = await AsyncStorage.getItem('@token');
    if (user) {
      setLogged(1);
      navigation.replace('Home');
    } else {
      setLogged(2);
    }
  };

  //toda vez que meu app carregar, quero que checke o login
  useEffect(() => {
    checkLogin();
  }, []);

  const login = async () => {
    try {
      const response = await apiLocal
        .post('/login', credentials)
        .then(res => {
          saveUser(res.data);
          checkLogin();
        })
        .catch(error => {
          setError(error);
        });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.bgDark}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      {logged === 0 && <ActivityIndicator color="#fff" size="large" />}
      {logged === 2 && (
        <View>
          <TextInput
            label="Email ou número de telefone"
            mode="flat"
            style={styles.marginBottom}
            value={credentials.email}
            onChangeText={text => setCredentials({...credentials, email: text})}
          />
          <TextInput
            label="Password"
            mode="flat"
            style={styles.marginBottom}
            secureTextEntry
            value={credentials.password}
            onChangeText={text =>
              setCredentials({...credentials, password: text})
            }
          />
          {error ? (
            <Text style={styles.text}>
              Credenciais incorretas. Por favor, tente novamente.
            </Text>
          ) : null}
          <Button
            mode="contained"
            styles={styles.marginBottom}
            onPress={() => login()}>
            Entrar
          </Button>

          <Button
            styles={styles.marginBottom}
            onPress={() => console.log('Pressed')}>
            Recuperar senha
          </Button>

          <Text style={styles.textSmall}>
            O acesso está garantido pelo Google reCAPTCHA para garantir que você
            não éum robô. Saiba mais.
          </Text>
        </View>
      )}
    </View>
  );
};

export default Login;
