


// Vue!
import Vue from "vue"
import VueRouter from "vue-router"
import VueFire from 'vuefire'

Vue.use(VueRouter)
Vue.use(VueFire);


// Class imports
import MainApp from "./Main.vue" // Stores router-view, nesting everything below:
import Home from "./components/Home.vue"
// import Classes from "./components/Class.vue"
import Spells from "./components/Spells.vue"
import Races from "./components/Races.vue"
import Items from "./components/Items.vue"

// Setup routing
const routes = [
	{ path: "/", component: Home},
	// { path: "/classes", component: Classes }, -- Am on plane, and Firebase is unhappy in the air.
	{ path: "/spells", component: Spells },
	{ path: "/races", component: Races },
	{ path: "/items", component: Items },
]

const router = new VueRouter({
	routes
})

// Main instance
new Vue({
	el: "#mainapp",
	components: { MainApp },
	router,
	render: h => h(MainApp)
// }).$mount('Main')
})






