# Personal ESLint Config

This is an opinionated configuration preset for ESLint.

## Setting up

1. Install:

```bash
$ npm i --save-dev crqra/eslint-config-crqra
```

Make sure to install Peer Dependencies as well.

2. Add the following to `package.json`:

```json
{
  "eslintConfig": {
    "extends": [
      "crqra"
    ]
  }
}
```

Or, touch a `.eslintrc` file and add:

```json
{
  "extends": [
    "crqra"
  ]
}
```

3. Copy the `.prettierrc` file from this repository

```bash
$ cp ./node_modules/crqra/eslint-config/crqra/.prettierrc .
```

Or add the file contents to your `package.json`:

```json
{
  "prettier": {
    "printWidth": 100,
    "tabWidth": 2,
    "useTabs": false,
    "semi": false,
    "singleQuote": true,
    "trailingComma": "none",
    "bracketSpacing": true,
    "arrowParens": "avoid"
  }
}
```

---

This repository is inspired by [eslint-config-leozera](https://github.com/leonardofaria/eslint-config-leozera).
