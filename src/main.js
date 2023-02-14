//? Libraries
import { createApp } from 'vue'
//? Services
import router from './router'
import { store } from './store/store'
//? Components
import App from './App.vue'
//? Styles
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
