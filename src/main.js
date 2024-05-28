import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

/* import bootstrap icons */
import 'bootstrap-icons/font/bootstrap-icons.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB2i56KyMTXCg2yFcezBSy2c_Fw9y-VoA0',
  authDomain: 'e-commerce-authenticatio-4724d.firebaseapp.com',
  projectId: 'e-commerce-authenticatio-4724d',
  storageBucket: 'e-commerce-authenticatio-4724d.appspot.com',
  messagingSenderId: '812054029123',
  appId: '1:812054029123:web:b6243de7b7cbb3ede6c5f6'
}
// Initialize Firebase
initializeApp(firebaseConfig)

//import AOS
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual'
}
