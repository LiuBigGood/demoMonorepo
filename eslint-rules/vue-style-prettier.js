// eslint-rules/vue-style-prettier
/* vue模板中style使用prettier */
const synchronizedPrettier = require("@prettier/sync")
const { parse } = require("vue/compiler-sfc")
module.exports = {
    meta: {
       type: "layout",
       fixable: "whitespace",
       messages: {
          checkMessage: "样式不符合规范,应使用Prettier进行格式化",
       },
       schema: [], // no options
    },
    create(context) {
       return {
          Program() {
             if (context.getFilename().endsWith(".vue")) {
                const content = context.getSourceCode().text
                const parsed = parse(content)
                const styles = parsed.descriptor.styles
                if (styles.length > 0) {
                   styles.forEach(styleBlock => {
                      const formatted = "\n" + synchronizedPrettier.format(
                         styleBlock.content,
                         {
                            parser: "scss",
                            singleQuote: false,
                            trailingComma: "all",
                            tabWidth: 4,
                            endOfLine: "auto",
                            arrowParens: "avoid",
                            printWidth: 80,
                            vueIndentScriptAndStyle: false,
                            embeddedLanguageFormatting: "off",
                         },
                      )
                      if (styleBlock.content !== formatted) {
                         context.report({
                            loc: {
                               start: styleBlock.loc.start,
                               end: styleBlock.loc.end,
                            },
                            messageId: "checkMessage",
                            fix(fixer) {
                               return fixer.replaceTextRange(
                                  [
                                     styleBlock.loc.start.offset,
                                     styleBlock.loc.end.offset,
                                  ],
                                  formatted,
                               )
                            },
                         })
                      }
                   })
                }
             }
          },
       }
    },
}
