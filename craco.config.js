const WebpackBar = require('webpackbar');
const path = require('path');

module.exports = {
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }], // MobX
    ],
  },
  jest: {
    configure: {
      globals: {
        CONFIG: true,
        __DEV__: true,
      },
      moduleNameMapper: {
        '^@app(.*)$': '<rootDir>/src$1',
      },
      roots: ['<rootDir>/src', '<rootDir>/test'],
      setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
      testMatch: ['<rootDir>/test/{integration,unit}/**/*.{spec,test}.{ts,tsx}'],
      verbose: false,
    },
  },
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src'),
    },
    plugins: [
      new WebpackBar({ profile: true }),
      ...(process.env.NODE_ENV === 'development' ? [] : []),
    ],
    extensions: ['.ts', '.tsx'],
  },
};
