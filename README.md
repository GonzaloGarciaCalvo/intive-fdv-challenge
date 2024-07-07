# React + TypeScript + Vite

# Explanation
- Project based  on a challenge showed id JS_Exercise.pdf
- Replace global state manager with a context and URL search param
- A form aloud to add a person to a list
- Countries are getting from API https://restcountries.com/#endpoints-name
- Persons are displayed in a table
- Persosn are persisted in localStorage
- Old entries are displayed in /api/revisited

# Satandard rules
- npm i standard -D
.eslintrc.cjs
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'standard',
    'standard-jsx'
  ],

  # Countries list from https://restcountries.com/#endpoints-name