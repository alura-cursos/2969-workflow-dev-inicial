module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 0,
    'prefer-destructuring': 0,
    'no-underscore-dangle': 0,
    // windows linebreaks when not in production environment
    "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"]
  },
  overrides: [
    {
      files: [
        '*.test.js',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
