import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



// import  './app-assets/css/colors.css'
// import abc from './app-assets/css/components.css'
// import './app-assets/css/themes/layout-dark.css'
// import './app-assets/css/pages/authentication.css'
createApp(App).use(store).use(router).mount('#app')
