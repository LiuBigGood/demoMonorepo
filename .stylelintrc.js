// .stylelintrc.js
module.exports = {
  plugins: [
		"@stylistic/stylelint-plugin"
	],
    // 继承的预设，这些预设包含了规则集插件
    extends: [
      // 基本 scss 规则
      'stylelint-config-standard-scss',
      // scss vue 规则
      'stylelint-config-recommended-vue/scss',
      // 样式属性顺序规则
      'stylelint-config-recess-order',
      // 代码风格规则
     "@stylistic/stylelint-config",
    ],
    rules: {
      // 自定义规则集的启用 / 禁用
      // 'stylistic/max-line-length': null,
      // syntax rules from stylelint:
     "color-function-notation": "modern",
     "selector-max-compound-selectors": 2,
    
     // stylistic rules from @stylistic/stylelint-plugin:
     "@stylistic/color-hex-case": "lower",
     "@stylistic/number-leading-zero": "always",
     "@stylistic/unit-case": "lower",
     "@stylistic/at-rule-name-newline-after": "always-multi-line"
    },
  };
  