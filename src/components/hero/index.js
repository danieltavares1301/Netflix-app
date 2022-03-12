import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const Hero = ({item}) => {
  return (
    <ImageBackground
      style={styles.hero}
      source={{
        uri: item,
      }}>
      <Text style={styles.top10Text}>Top 1 de hoje no Brasil</Text>
      <LinearGradient
        style={styles.gradient}
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
      />
    </ImageBackground>
  );
};
export default Hero;
