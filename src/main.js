import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import * as fb from 'firebase/app'
import router from './router'

Vue.config.productionTip = false

new Vue({
	vuetify,
	store,
	router,
	render: h => h(App),
	created () {
		fb.initializeApp({
			apiKey: "AIzaSyCw6lMkSCdtOC8935hDdpAUVgm06Ug2CL4",
			authDomain: "plane-store-7a251.firebaseapp.com",
			databaseURL: "https://plane-store-7a251.firebaseio.com",
			projectId: "plane-store-7a251",
			storageBucket: "plane-store-7a251.appspot.com",
			messagingSenderId: "839258862253",
			appId: "1:839258862253:web:2b2abd3edacc9ceb3acc24",
			measurementId: "G-P4HF9ZV90Y"
		})
	}
}).$mount('#app')
