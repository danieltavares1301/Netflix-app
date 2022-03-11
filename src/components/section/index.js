import React, {useEffect, useState} from 'react';
import {Image, View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './Styles';
import api from '../../services/api';
import {Title} from 'react-native-paper';

const Sections = () => {
  const [data, setDatas] = useState([]);

  useEffect(() => {
    async function loadDatas() {
      const response = await api
        .get()
        .then(res => {
          //console.log(res.data._id);
          setDatas(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
    loadDatas();
  }, []);

  return (
    <ScrollView horizontal style={styles.container}>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{marginLeft: index === 0 ? 20 : 0, marginRight: 10}}>
            <Image style={styles.capa} source={{uri: item.image}} />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Sections;
