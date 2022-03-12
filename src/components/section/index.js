import React, {useEffect, useState} from 'react';
import {Image, View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './Styles';
import api from '../../services/api';
import {Title} from 'react-native-paper';

const Sections = ({film}) => {
  return (
    <>
      <Title style={styles.titleSections}>Filmes</Title>
      <ScrollView horizontal style={styles.container}>
        {film.map((item, index) => {
          return (
            <View>
              {item.type === 'movie' && (
                <TouchableOpacity key={index} style={{marginRight: 10}}>
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
                <TouchableOpacity key={index} style={{marginRight: 10}}>
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
