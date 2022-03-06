import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './Styles';
import Header from '../../components/header';
import Hero from '../../components/hero';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-paper';
import ButtonVertical from '../../components/buttonVertical';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Hero />
      <View style={styles.menuHeader}>
        <ButtonVertical icon="plus" text="Minha Lista" />
        <Button icon="play" mode="contained" color="#fff" uppercase={false}>
          Assistir
        </Button>
        <ButtonVertical icon="information-outline" text="Saiba mais" />
      </View>
    </View>
  );
};

export default Home;
