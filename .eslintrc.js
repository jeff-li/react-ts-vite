module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    // eslint-plugin-react
    'plugin:react/recommended',
    // @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // eslint-plugin-import
    'plugin:import/recommended',
    'plugin:import/typescript',
    // plugin:react-hooks/recommended
    "plugin:react-hooks/recommended",
    // eslint-config-prettier
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint'
  ],
  settings: {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  rules: {
    "eqeqeq": [1, "always"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/jsx-filename-extension": [
      1,
      { "extensions": [".js", ".jsx", ".ts", ".tsx"] }
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }
};
