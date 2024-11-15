// packages/shared/vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'node:path'
export default defineConfig({
  build: {
    // 产物输出目录，默认值就是 dist。我们使用默认值，注释掉此字段。
    // outDir: 'dist',

    // 参考：https://cn.vitejs.dev/config/build-options.html#build-lib
    lib: {
      // 构建的入口文件
      entry: './src/index.ts',
      // 产物的生成格式，默认为 ['es', 'umd']。我们使用默认值，注释掉此字段。
      formats: ['es', 'umd'],
      // 当产物为 umd、iife 格式时，该模块暴露的全局变量名称
      name: 'DemoMuiUI',
      // 产物文件名称
      fileName: 'demoMui-Ui',
    },
    rollupOptions:{
        // 确保外部化处理那些你不想打包进库的依赖
        external:[/@demo-mui.*/,'vue'],
      },
    // 为了方便学习，查看构建产物，将此置为 false，不要混淆产物代码
    minify: false,
  },
  plugins:[vue()],
  resolve:{
    alias: [
      {
        find:  /^@demo-mui\/(.+)$/,
        replacement: join(__dirname, '..', 'packages', '$1', 'src') 
      }
    ]
  }
})
