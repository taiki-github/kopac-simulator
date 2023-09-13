
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'; // あなたのHomeコンポーネントのパスに適宜変更してください
// import About from './views/About.vue'; // あなたのAboutコンポーネントのパスに適宜変更してください
// // 他のコンポーネントも必要に応じてインポートしてください

import Test from "./pages/TestComponent"

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    // 他のルートも必要に応じて追加してください
  ];
  


  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;
















// // import Vue from 'vue'
// import Router from 'vue-router'
// // import Home from './views/Home/'
// import TestComponent from "./components/TestComponent"

// // Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   routes: [
//     // {
//     //   path: '/',
//     //   name: 'home',
//     //   component: Home
//     // }
//     {
//         path: "test",
//         name: "test",
//         Component:TestComponent
//     }
//   ]
// })


