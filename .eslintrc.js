module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-base',
    'prettier',
    'prettier/react',
  ],
  rules: {
    'prettier/prettier': 'error',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'comma-spacing': ['error', {before: false, after: true}],
  },
};
