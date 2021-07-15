module.exports = {
  root: true,
  extends: ['@nghinv/eslint-config', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  rules: {
    'react/require-default-props': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    'array-callback-return': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react-hooks/rules-of-hooks': 'off',
  },
};
