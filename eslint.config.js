module.exports =
  {
    extends: [
      require.resolve('/opt/homebrew/lib/node_modules/eslint-config-standard')
    ],

    parserOptions: {
      ecmaVersion: 2023
    },

    env: {
      es6: true,
      mocha: true
    },
    rules: {
      'max-len': [2, 120, 2],
      semi: [2, 'always'],
      'no-async-promise-executor': 0,
      'no-misleading-character-class': 0,
      'no-useless-catch': 0,
      'no-unused-vars': [
        2,
        {
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      'no-var': 2,
      'function-paren-newline': [2, 'multiline']
    },
    ignorePatterns: ['node_modules/*', 'dist/*', 'coverage/*', 'build/*']
  };
