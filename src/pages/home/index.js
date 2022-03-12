import React, {useEffect, useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import styles from './Styles';
import Header from '../../components/header';
import Hero from '../../components/hero';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Title} from 'react-native-paper';
import ButtonVertical from '../../components/buttonVertical';
import Previews from '../../components/previews';
import Sections from '../../components/section';
import api from '../../services/api';

const Home = () => {
  const [data, setDatas] = useState([]);
  const [principal, setPrincipal] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  const getHome = async () => {
    setRefreshing(true);
    await api
      .get()
      .then(res => {
        setDatas(res.data);
        setPrincipal(res.data[Math.floor(Math.random() * res.data.length)]);
      })
      .catch(error => {
        console.log(error);
      });
    setRefreshing(false);
  };

  useEffect(() => {
    getHome();
  }, []);
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={getHome} />
      }>
      <Header />
      <Hero item={principal.image} />
      <View style={styles.menuHeader}>
        <ButtonVertical icon="plus" text="Minha Lista" />
        <Button icon="play" mode="contained" color="#fff" uppercase={false}>
          Assistir
        </Button>
        <ButtonVertical icon="information-outline" text="Saiba mais" />
      </View>
      <Title style={styles.title}>Prévias</Title>
      <Previews filmes={data} />
      <Sections film={data} />
    </ScrollView>
  );
};

export default Home;
