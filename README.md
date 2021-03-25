# Personal ESLint Config

This is an opionated configuration preset for ESLint.

## Setting up

1. Install:

```bash
$ npm i --save-dev crqra/eslint-config-crqra

# Install peer dependencies
$ npx install-peerdeps --dev eslint-config-crqra
```

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

```
{
  "extends": [
    "crqra"
  ]
}
```

3. Copy the `.prettierrc` file from this repository

```
$ cp ./node_modules/crqra/eslint-config/crqra/.prettierrc .
```

---

This repository is inspired by [eslint-config-leozera](https://github.com/leonardofaria/eslint-config-leozera).
