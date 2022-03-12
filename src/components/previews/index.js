import React, {useEffect, useState} from 'react';
import {Image, View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './Styles';

const Previews = ({filmes}) => {
  return (
    <ScrollView horizontal style={styles.flatContainer}>
      {filmes.map((item, index) => {
        return (
          <TouchableOpacity
            style={{marginLeft: index === 0 ? 20 : 0, marginRight: 10}}
            key={index}>
            <View style={styles.oval}>
              <Image style={styles.capa} source={{uri: item.image}} />
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Previews;
