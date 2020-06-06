import { defineConfig, Route } from 'umi';
export default defineConfig({
  favicon:'/static/1.jpg',
  nodeModulesTransform: {
    type: 'none',
  },
  routes:[
    {     
       path:'/',
  
       component:'@/pages/index'
    },


    { 
      path:'/discover',
      component:'@/pages/index'
   },
    // {
    //   path:'/discover/toplist/:aid',
    //   component:'@/pages/toplist'
    // },
    {
      path:'/discover/toplist',
      component:'@/pages/toplist',
      routes: [
        { path: '/discover/toplist/:aid', component: '@/layouts/toplist/topitemshow' },
      ],
    },
    {
      path:'/discover/playlist',
      component:'@/pages/playlist',
    },
  ]
  // routes: [
  //   {path:'/',
  //    component:'@/layouts/index',
  // routes:[
  //   {
  //     path:'/Counter',
  //    component:'@/layouts/counter'
  //   },
  //   {
  //     path:'/CommentList',
  //    component:'@/layouts/CommentList'
  //   },
  //    ]
  //   },

  // ]
});
