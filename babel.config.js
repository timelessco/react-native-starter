module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'tailwind': './tailwind.js',
        },
        cwd: 'babelrc',
      },
    ],
  ],
};
