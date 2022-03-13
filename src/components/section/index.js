import React, {useEffect, useState} from 'react';
import {Image, View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './Styles';
import api from '../../services/api';
import {Title} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Sections = ({film}) => {
  const navigation = useNavigation();
  return (
    <>
      <Title style={styles.titleSections}>Filmes</Title>
      <ScrollView horizontal style={styles.container}>
        {film.map((item, index) => {
          return (
            <View>
              {item.type === 'movie' && (
                <TouchableOpacity
                  key={index}
                  style={{marginRight: 10}}
                  onPress={() =>
                    navigation.navigate('Movie', {movie: item, section: film})
                  }>
                  <Image style={styles.capa} source={{uri: item.image}} />
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </ScrollView>
      <Title style={styles.titleSections}>Séries</Title>
      <ScrollView horizontal style={styles.container}>
        {film.map((item, index) => {
          return (
            <View>
              {item.type === 'series' && (
                <TouchableOpacity
                  key={index}
                  style={{marginRight: 10}}
                  onPress={() =>
                    navigation.navigate('Movie', {movie: item, section: film})
                  }>
                  <Image style={styles.capa} source={{uri: item.image}} />
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

export default Sections;
