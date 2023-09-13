import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import store from './store/store'; 
import router from './router'

// Vuetify のインポートを追加 **********/
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// 以下を追加 **********/
const vuetify = createVuetify({
  components,
  directives,
})

// 以下のように .use(vuetify) を追加
// store(vuexを追加)
createApp(App).use(vuetify).use(store).use(router).mount('#app');
// createApp({}).use(vuetify).mount('#app');
