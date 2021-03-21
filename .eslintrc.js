module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier/react',
    'babel-eslint',
    'plugin:eslint-comments/recommended',
  ],
  plugins: ['eslint-comments', 'react-hooks'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    quotes: [0, 'double'],
  },
};
