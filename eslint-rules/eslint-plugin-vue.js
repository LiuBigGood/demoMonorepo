// eslint-rules/eslint-plugin-vue
const { name, version } = require("../package.json")
const vueStylePrettier = require("./vue-style-prettier")

const plugin = {
    meta: {
       name,
       version,
    },
    rules: {
       "vue-style-prettier": vueStylePrettier, // vue模板中style使用prettier
    },
}

module.exports = plugin
