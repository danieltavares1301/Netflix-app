import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ButtonVertical = ({icon, text}) => {
  return (
    <TouchableOpacity style={styles.menuButton}>
      <Icon name={icon} color="#fff" size={20}></Icon>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonVertical;
