import { defineConfig } from 'umi';
export default defineConfig({
  title: '网易云音乐',
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
  dynamicImport: {
    loading: '../../components/common/Loading',
  },
  // ssr: { mode: 'stream' },
});
