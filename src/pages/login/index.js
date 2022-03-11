import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import styles from './Styles';

const Login = ({navigation}) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  return (
    <>
      <View style={styles.bgDark}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
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
          <Button
            mode="contained"
            styles={styles.marginBottom}
            onPress={() => navigation.navigate('Home')}>
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
      </View>
    </>
  );
};

export default Login;
