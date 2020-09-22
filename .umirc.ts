import { defineConfig } from 'umi';
export default defineConfig({
  favicon: '/static/1.jpg',

  //  更改路径名
  alias: {
    components: '../components',
  },

  //加速编译，防止内存标调
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  //按需加载
  dynamicImport: {},
  ssr: { mode: 'stream' },
});
