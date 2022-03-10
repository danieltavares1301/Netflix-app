import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 38,
  },
  buttonText: {
    color: '#fff',
  },
  menuButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatContainer: {
    height: 100,
    width: '100%',
    marginTop: 10,
    marginBottom: 50,
  },
  oval: {
    backgroundColor: '#E50914',
    padding: 2.5,
    width: 90,
    height: 90,
    borderRadius: 90,
  },
  capa: {
    height: 85,
    width: 85,
    borderRadius: 85,
  },
  title: {
    marginTop: 40,
    marginLeft: 30,
  },
  titleSections: {
    marginLeft: 30,
  },
});

export default styles;
