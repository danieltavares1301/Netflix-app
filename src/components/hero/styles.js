import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  hero: {
    height: 500,
    width: '100%',
  },
  logo: {
    marginTop: 200,
    alignSelf: 'center',
    width: 300,
    height: 150,
    position: 'absolute',
    zIndex: 10,
  },
  top10Text: {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 450,
    fontSize: 15,
    color: '#fff',
    zIndex: 10,
  },
  gradient: {
    width: '100%',
    height: 150,
    position: 'absolute',
    zIndex: 9,
    bottom: 0,
  },
});

export default styles;
