module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@theme': './src/presentation/theme/theme.ts',
          '@icons': './src/presentation/assets/icons',
          '@hooks': './src/hooks',
          '@screens': './src/presentation/screens',
          '@navigation': './src/navigation',
          '@domain': './src/domain',
          '@brand': './src/presentation/assets/brand',
          '@api': './src/api',
          '@types': './src/types',
          '@utils': './src/utils',
          '@infra': './src/infra',
          '@services': './src/services',
          '@test': './src/test',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
