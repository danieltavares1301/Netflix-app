import React from 'react';
import {
  Text,
  ScrollView,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Button, Title, Paragraph, Caption} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import ButtonVertical from '../../components/buttonVertical';
import Sections from '../../components/section';
import {useNavigation} from '@react-navigation/native';

const Movie = ({route, navigation}) => {
  const {movie, section} = route.params;
  //const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={{uri: movie.image}} style={styles.hero}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-left" size={25} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.information}>
        <Title>{movie.name}</Title>
        <Button
          icon="play"
          uppercase={false}
          mode="contained"
          color="#fff"
          style={styles.buttonPlay}>
          Assistir
        </Button>
        <Paragraph style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </Paragraph>
        <Caption>
          Elenco:{' '}
          <Caption style={styles.captionWhite}>
            Lorem ipsum, Lorem ipsum, Lorem ipsum
          </Caption>
        </Caption>
        <Caption style={styles.genre}>
          Gênero:{' '}
          <Caption style={styles.captionWhite}>
            Lorem ipsum, Lorem ipsum, Lorem ipsum
          </Caption>
        </Caption>
      </View>
      <View style={styles.options}>
        <ButtonVertical icon="plus" text="Minha Lista" />
        <ButtonVertical icon="thumb-up" text="Classifique" />
        <ButtonVertical icon="send" text="Compartilhe" />
        <ButtonVertical icon="download" text="Baixe" />
      </View>
      <Sections film={section} />
    </ScrollView>
  );
};

export default Movie;
