module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["plugin:@typescript-eslint/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "project": "./tsconfig.json",
        "sourceType": "module"
    },
    "plugins": ["@typescript-eslint"],
    "rules": {
        "prefer-const": "off"
    }
};
