import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const Hero = () => {
  return (
    <ImageBackground
      style={styles.hero}
      source={{
        uri: 'http://farofageek.com.br/wp-content/uploads/2019/01/bird-box-capa.jpg',
      }}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={{
          uri: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABQrSc5LTOIq9ZMJ_vK7Q5Nq8uHLTnKzLwNRByU_5BxqdUp4_7bpD9kDk6UuXfspNPLvWLK5-hA1npnI_8O9kp5CYSC8BH9D15SAmeciFYlNPpbhkhLRO4BNiUdbpI2ihS8DWwrOuCfjcQWvEL0j8OGb9C_NDk0tYR6Wox3VJrzkz7g.png?r=429',
        }}
      />
      <Text style={styles.top10Text}>Top 1 de hoje no Brasil</Text>
      <LinearGradient
        style={styles.gradient}
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
      />
    </ImageBackground>
  );
};
export default Hero;
