import React from 'react';
import Login from './src/pages/login';
import Home from './src/pages/home';
import {StatusBar} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#E50914',
      background: '#3C3C3C',
      placeholder: '#ffffff',
      text: '#ffffff',
    },
  };
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="#000" />
      <Home />
    </PaperProvider>
  );
};

export default App;
