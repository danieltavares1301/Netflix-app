import React, {useEffect, useState} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './Styles';
import Header from '../../components/header';
import Hero from '../../components/hero';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Title} from 'react-native-paper';
import ButtonVertical from '../../components/buttonVertical';
import Previews from '../../components/previews';
import Sections from '../../components/section';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Hero />
      <View style={styles.menuHeader}>
        <ButtonVertical icon="plus" text="Minha Lista" />
        <Button icon="play" mode="contained" color="#fff" uppercase={false}>
          Assistir
        </Button>
        <ButtonVertical icon="information-outline" text="Saiba mais" />
      </View>
      <Title style={styles.title}>Prévias</Title>
      <Previews />
      <Title style={styles.titleSections}>Nome da Seção</Title>
      <Sections />
    </ScrollView>
  );
};

export default Home;
