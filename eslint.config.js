const pluginJs = require('@eslint/js');
const pluginVue = require('eslint-plugin-vue');
const vueEslintParser = require('vue-eslint-parser');
const typescriptParser = require("@typescript-eslint/parser");
const eslintPluginVue = require("./eslint-rules/eslint-plugin-vue"); // 自定义规则
const globals = require('globals');

module.exports = [
  {
    // 全局配置
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: 'readonly',
      }
    },
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      'vue/multi-word-component-names': 'off',
      'operator-linebreak': ['error', 'after'],
      'class-methods-use-this': 'off',
      'no-plusplus': 'off',
      'no-spaced-func': 'off',
      'linebreak-style': 'off',
    }
  },
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/eslint-rules/**"] // 排除不需要检查的文件夹
  },
  pluginJs.configs.recommended,
  {
    plugins: { typescriptParser },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: './tsconfig.eslint.json',
        extraFileExtensions: ['.vue'] // 添加这一行
      },
    },
  },
  ...pluginVue.configs['flat/recommended'],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: typescriptParser,
        sourceType: "module",
        jsx: true,
        extraFileExtensions: ['.vue'] // 添加这一行
      },
    },
  },
  {
    files: ["**/*.vue"],
    plugins: { "eslint-rules": eslintPluginVue },
    rules: {
      "eslint-rules/vue-style-prettier": "error", // vue模板中style使用prettier
    },
  },
  {
    files: ['**/vite.config.*', '**/vitest.config.*'],
    rules: {
      'no-console': 'off',
    },
  }
];
